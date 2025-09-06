import PyPDF2
import re
import json
import os
from typing import List, Dict, Any

class PDFQuestionExtractor:
    def __init__(self):
        self.question_patterns = [
            r'(\d+)\.\s*(.+?)(?=\n\s*(?:\([a-d]\)|[a-d]\)|\d+\.|$))',  # Numbered questions
            r'Q\s*(\d+)\.\s*(.+?)(?=\n\s*(?:\([a-d]\)|[a-d]\)|\d+\.|Q\s*\d+\.|$))',  # Q1. format
            r'Question\s*(\d+):\s*(.+?)(?=\n\s*(?:\([a-d]\)|[a-d]\)|\d+\.|Question\s*\d+:|$))',  # Question 1: format
        ]
        
        self.option_patterns = [
            r'\([a-d]\)\s*(.+?)(?=\n\s*\([a-d]\)|\n\s*(?:Answer|Ans|Solution)|$)',  # (a) format
            r'[a-d]\)\s*(.+?)(?=\n\s*[a-d]\)|\n\s*(?:Answer|Ans|Solution)|$)',  # a) format
            r'[a-d]\.\s*(.+?)(?=\n\s*[a-d]\.|\n\s*(?:Answer|Ans|Solution)|$)',  # a. format
        ]
        
        self.answer_patterns = [
            r'(?:Answer|Ans|Solution):\s*\(?([a-d])\)?',
            r'Correct\s*(?:Answer|Option):\s*\(?([a-d])\)?',
            r'Answer\s*-\s*\(?([a-d])\)?',
        ]

    def extract_text_from_pdf(self, pdf_path: str) -> str:
        """Extract text content from PDF file"""
        try:
            with open(pdf_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                text = ""
                for page in pdf_reader.pages:
                    text += page.extract_text() + "\n"
                return text
        except Exception as e:
            print(f"Error reading PDF: {e}")
            return ""

    def clean_text(self, text: str) -> str:
        """Clean and normalize extracted text"""
        # Remove extra whitespace and normalize line breaks
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'\n\s*\n', '\n', text)
        return text.strip()

    def extract_questions(self, text: str) -> List[Dict[str, Any]]:
        """Extract questions, options, and answers from text"""
        questions = []
        
        # Split text into potential question blocks
        blocks = self._split_into_blocks(text)
        
        for block in blocks:
            question_data = self._parse_question_block(block)
            if question_data:
                questions.append(question_data)
        
        return questions

    def _split_into_blocks(self, text: str) -> List[str]:
        """Split text into question blocks"""
        # Try different splitting patterns
        patterns = [
            r'(?=\d+\.\s)',  # Split before numbered questions
            r'(?=Q\s*\d+\.)',  # Split before Q1. format
            r'(?=Question\s*\d+:)',  # Split before Question 1: format
        ]
        
        for pattern in patterns:
            blocks = re.split(pattern, text)
            if len(blocks) > 1:
                return [block.strip() for block in blocks if block.strip()]
        
        return [text]

    def _parse_question_block(self, block: str) -> Dict[str, Any]:
        """Parse a single question block"""
        question_text = ""
        options = []
        correct_answer = None
        
        # Extract question text
        for pattern in self.question_patterns:
            match = re.search(pattern, block, re.DOTALL)
            if match:
                question_text = match.group(2).strip()
                break
        
        if not question_text:
            return None
        
        # Extract options
        for pattern in self.option_patterns:
            option_matches = re.findall(pattern, block, re.DOTALL)
            if option_matches:
                options = [opt.strip() for opt in option_matches]
                break
        
        # Extract correct answer
        for pattern in self.answer_patterns:
            match = re.search(pattern, block, re.IGNORECASE)
            if match:
                answer_letter = match.group(1).lower()
                correct_answer = ord(answer_letter) - ord('a')
                break
        
        # Validate extracted data
        if question_text and len(options) >= 2:
            return {
                "question": question_text,
                "options": options[:4],  # Limit to 4 options
                "correct": correct_answer if correct_answer is not None else 0
            }
        
        return None

    def process_pdf_to_json(self, pdf_path: str, subject: str, output_path: str = None) -> str:
        """Process PDF and save questions as JSON"""
        print(f"Processing PDF: {pdf_path}")
        
        # Extract text from PDF
        text = self.extract_text_from_pdf(pdf_path)
        if not text:
            print("Failed to extract text from PDF")
            return ""
        
        # Clean text
        text = self.clean_text(text)
        
        # Extract questions
        questions = self.extract_questions(text)
        
        if not questions:
            print("No questions found in PDF")
            return ""
        
        # Prepare output
        output_data = {
            "subject": subject,
            "source": os.path.basename(pdf_path),
            "questions": questions,
            "total_questions": len(questions)
        }
        
        # Save to JSON file
        if not output_path:
            output_path = f"{subject.lower()}_questions.json"
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        print(f"Extracted {len(questions)} questions and saved to {output_path}")
        return output_path

    def manual_question_input(self, subject: str) -> List[Dict[str, Any]]:
        """Interactive method to manually input questions"""
        questions = []
        print(f"\n=== Manual Question Input for {subject} ===")
        print("Enter questions one by one. Type 'done' when finished.")
        
        while True:
            print(f"\n--- Question {len(questions) + 1} ---")
            question_text = input("Enter question text (or 'done' to finish): ").strip()
            
            if question_text.lower() == 'done':
                break
            
            if not question_text:
                continue
            
            options = []
            for i in range(4):
                option = input(f"Enter option {chr(65 + i)}: ").strip()
                if option:
                    options.append(option)
            
            if len(options) < 2:
                print("At least 2 options required. Skipping this question.")
                continue
            
            while True:
                try:
                    correct = input("Enter correct answer (A/B/C/D): ").strip().upper()
                    if correct in ['A', 'B', 'C', 'D']:
                        correct_index = ord(correct) - ord('A')
                        if correct_index < len(options):
                            break
                    print("Invalid answer. Please enter A, B, C, or D.")
                except:
                    print("Invalid input. Please try again.")
            
            questions.append({
                "question": question_text,
                "options": options,
                "correct": correct_index
            })
            
            print(f"Question {len(questions)} added successfully!")
        
        return questions

def main():
    extractor = PDFQuestionExtractor()
    
    print("=== CBSE Question Bank PDF Processor ===")
    print("1. Process PDF file")
    print("2. Manual question input")
    print("3. Exit")
    
    choice = input("\nEnter your choice (1-3): ").strip()
    
    if choice == '1':
        pdf_path = input("Enter PDF file path: ").strip()
        subject = input("Enter subject name: ").strip()
        
        if os.path.exists(pdf_path):
            output_file = extractor.process_pdf_to_json(pdf_path, subject)
            if output_file:
                print(f"\nSuccess! Questions saved to: {output_file}")
        else:
            print("PDF file not found!")
    
    elif choice == '2':
        subject = input("Enter subject name: ").strip()
        questions = extractor.manual_question_input(subject)
        
        if questions:
            output_data = {
                "subject": subject,
                "source": "Manual Input",
                "questions": questions,
                "total_questions": len(questions)
            }
            
            output_file = f"{subject.lower()}_manual_questions.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(output_data, f, indent=2, ensure_ascii=False)
            
            print(f"\nSuccess! {len(questions)} questions saved to: {output_file}")
    
    elif choice == '3':
        print("Goodbye!")
    
    else:
        print("Invalid choice!")

if __name__ == "__main__":
    main()
