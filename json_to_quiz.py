import json
import os
import re
from typing import List, Dict, Any

class QuizGenerator:
    def __init__(self):
        self.template_path = "quiz_template.html"
        self.subjects = {
            "english": {"icon": "📝", "name": "English", "description": "Literature, Grammar & Writing Skills"},
            "mathematics": {"icon": "📊", "name": "Mathematics", "description": "Algebra, Geometry, Trigonometry & Statistics"},
            "science": {"icon": "🔬", "name": "Science", "description": "Physics, Chemistry & Biology"},
            "social-studies": {"icon": "🏛️", "name": "Social Studies", "description": "History, Geography, Civics & Economics"},
            "tamil": {"icon": "🔤", "name": "Tamil", "description": "Literature, Grammar & Comprehension"}
        }

    def load_questions_from_json(self, json_file: str) -> Dict[str, Any]:
        """Load questions from JSON file"""
        try:
            with open(json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            return data
        except Exception as e:
            print(f"Error loading JSON file: {e}")
            return {}

    def merge_questions(self, existing_questions: List[Dict], new_questions: List[Dict]) -> List[Dict]:
        """Merge new questions with existing ones, avoiding duplicates"""
        merged = existing_questions.copy()
        
        for new_q in new_questions:
            # Check for duplicates based on question text
            is_duplicate = False
            for existing_q in merged:
                if self._are_questions_similar(existing_q["question"], new_q["question"]):
                    is_duplicate = True
                    break
            
            if not is_duplicate:
                merged.append(new_q)
        
        return merged

    def _are_questions_similar(self, q1: str, q2: str, threshold: float = 0.8) -> bool:
        """Check if two questions are similar (basic similarity check)"""
        # Simple similarity check based on common words
        words1 = set(re.findall(r'\w+', q1.lower()))
        words2 = set(re.findall(r'\w+', q2.lower()))
        
        if not words1 or not words2:
            return False
        
        intersection = len(words1.intersection(words2))
        union = len(words1.union(words2))
        
        similarity = intersection / union if union > 0 else 0
        return similarity > threshold

    def update_quiz_html(self, subject: str, questions: List[Dict], output_file: str = None):
        """Update HTML file with new questions"""
        if subject not in self.subjects:
            print(f"Unknown subject: {subject}")
            return
        
        if not output_file:
            output_file = f"{subject}.html"
        
        subject_info = self.subjects[subject]
        
        # Generate JavaScript questions array
        js_questions = self._generate_js_questions(questions)
        
        # Create HTML content
        html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CBSE Class 10 {subject_info["name"]} - Previous Year Questions</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand">
                <h1>🎓 CBSE Class 10 - {subject_info["name"]}</h1>
            </div>
        </nav>
    </header>

    <main class="container">
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>{subject_info["icon"]} CBSE Class 10 {subject_info["name"]}</h2>
                <p>Previous Year Board Examination Questions - {subject_info["description"]}</p>
                <div class="quiz-progress">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                    <span id="question-counter">Question 1 of {len(questions)}</span>
                    <div class="timer" id="timer">5:00</div>
                </div>
            </div>

            <div id="quiz-content">
                <div id="question-container">
                    <!-- Questions will be loaded here by JavaScript -->
                </div>

                <div class="quiz-controls">
                    <button class="btn btn-secondary" id="prev-btn" onclick="previousQuestion()" disabled>
                        Previous
                    </button>
                    <button class="btn" id="next-btn" onclick="nextQuestion()" disabled>
                        Next Question
                    </button>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
            <a href="index.html" class="back-link">← Back to Home</a>
        </div>
    </main>

    <script src="script.js"></script>
    <script>
        // CBSE Class 10 {subject_info["name"]} Previous Year Questions
        const {subject.replace('-', '')}Questions = {js_questions};

        function initializeQuiz() {{
            window.currentQuiz = new QuizApp({subject.replace('-', '')}Questions, '{subject_info["name"]}');
        }}
    </script>
</body>
</html>'''
        
        # Write to file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"Updated {output_file} with {len(questions)} questions")

    def _generate_js_questions(self, questions: List[Dict]) -> str:
        """Generate JavaScript array string for questions"""
        js_array = "[\n"
        
        for i, q in enumerate(questions):
            # Escape quotes and special characters
            question_text = json.dumps(q["question"])
            options = json.dumps(q["options"])
            
            js_array += f'''            {{
                question: {question_text},
                options: {options},
                correct: {q["correct"]}
            }}'''
            
            if i < len(questions) - 1:
                js_array += ","
            js_array += "\n"
        
        js_array += "        ]"
        return js_array

    def process_all_json_files(self, directory: str = "."):
        """Process all JSON files in directory and update corresponding HTML files"""
        json_files = [f for f in os.listdir(directory) if f.endswith('.json')]
        
        for json_file in json_files:
            print(f"\nProcessing {json_file}...")
            
            data = self.load_questions_from_json(json_file)
            if not data or 'questions' not in data:
                print(f"Invalid JSON format in {json_file}")
                continue
            
            subject = data.get('subject', '').lower().replace(' ', '-')
            questions = data['questions']
            
            if subject in self.subjects:
                # Check if HTML file exists and merge questions
                html_file = f"{subject}.html"
                if os.path.exists(html_file):
                    existing_questions = self._extract_existing_questions(html_file)
                    questions = self.merge_questions(existing_questions, questions)
                
                self.update_quiz_html(subject, questions, html_file)
            else:
                print(f"Unknown subject: {subject}")

    def _extract_existing_questions(self, html_file: str) -> List[Dict]:
        """Extract existing questions from HTML file"""
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the questions array in JavaScript
            pattern = r'const\s+\w+Questions\s*=\s*(\[.*?\]);'
            match = re.search(pattern, content, re.DOTALL)
            
            if match:
                # This is a simplified extraction - in practice, you might want
                # to use a proper JavaScript parser
                return []  # Return empty for now, will be replaced by new questions
            
            return []
        except Exception as e:
            print(f"Error extracting questions from {html_file}: {e}")
            return []

def main():
    generator = QuizGenerator()
    
    print("=== Quiz HTML Generator ===")
    print("1. Process single JSON file")
    print("2. Process all JSON files in directory")
    print("3. Exit")
    
    choice = input("\nEnter your choice (1-3): ").strip()
    
    if choice == '1':
        json_file = input("Enter JSON file path: ").strip()
        
        if os.path.exists(json_file):
            data = generator.load_questions_from_json(json_file)
            if data and 'questions' in data:
                subject = data.get('subject', '').lower().replace(' ', '-')
                questions = data['questions']
                
                output_file = input(f"Enter output HTML file name (default: {subject}.html): ").strip()
                if not output_file:
                    output_file = f"{subject}.html"
                
                generator.update_quiz_html(subject, questions, output_file)
            else:
                print("Invalid JSON format!")
        else:
            print("JSON file not found!")
    
    elif choice == '2':
        directory = input("Enter directory path (default: current directory): ").strip()
        if not directory:
            directory = "."
        
        generator.process_all_json_files(directory)
    
    elif choice == '3':
        print("Goodbye!")
    
    else:
        print("Invalid choice!")

if __name__ == "__main__":
    main()
