# CBSE Question Bank PDF Processing Guide

## Overview
This guide will help you extract questions from PDF files and integrate them into your CBSE Class 10 quiz website.

## Setup Instructions

### 1. Install Required Dependencies
```bash
pip install -r requirements.txt
```

### 2. Prepare Your PDF Files
- Ensure PDFs contain CBSE Class 10 previous year questions
- Questions should be in multiple-choice format
- PDFs should have clear question numbering and answer options

## How to Use

### Method 1: Automatic PDF Processing

1. **Run the PDF Processor:**
   ```bash
   python pdf_processor.py
   ```

2. **Choose Option 1** (Process PDF file)

3. **Provide Required Information:**
   - PDF file path (e.g., `C:\Downloads\math_questions.pdf`)
   - Subject name (e.g., `Mathematics`, `English`, `Science`, etc.)

4. **Output:** 
   - Creates a JSON file with extracted questions
   - Example: `mathematics_questions.json`

### Method 2: Manual Question Input

1. **Run the PDF Processor:**
   ```bash
   python pdf_processor.py
   ```

2. **Choose Option 2** (Manual question input)

3. **Enter Questions Manually:**
   - Type each question text
   - Provide 4 answer options (A, B, C, D)
   - Specify the correct answer

### Method 3: Integration with Quiz Website

1. **Generate/Update HTML Files:**
   ```bash
   python json_to_quiz.py
   ```

2. **Choose Processing Option:**
   - Option 1: Process single JSON file
   - Option 2: Process all JSON files in directory

3. **Result:**
   - Updates your quiz HTML files with new questions
   - Merges with existing questions (removes duplicates)

## Supported PDF Formats

The system can handle PDFs with these question formats:

### Format 1: Numbered Questions
```
1. What is the capital of India?
(a) Mumbai
(b) Delhi
(c) Kolkata
(d) Chennai
Answer: (b)
```

### Format 2: Q-Format
```
Q1. Which gas is most abundant in Earth's atmosphere?
a) Oxygen
b) Nitrogen
c) Carbon dioxide
d) Argon
Ans: b
```

### Format 3: Question Format
```
Question 1: What is the chemical formula for water?
A. H2O2
B. H2O
C. HO2
D. H3O
Solution: B
```

## File Structure After Processing

```
quiz-website/
├── pdf_processor.py          # PDF extraction tool
├── json_to_quiz.py          # JSON to HTML converter
├── requirements.txt         # Python dependencies
├── mathematics_questions.json # Extracted math questions
├── english_questions.json   # Extracted English questions
├── science_questions.json   # Extracted science questions
├── mathematics.html         # Updated math quiz page
├── english.html            # Updated English quiz page
├── science.html            # Updated science quiz page
└── ...
```

## Tips for Best Results

### 1. PDF Quality
- Use high-quality, text-based PDFs (not scanned images)
- Ensure clear formatting and readable text
- Questions should follow standard CBSE format

### 2. Question Format
- Each question should have exactly 4 options
- Clear answer indication (Answer: a, Ans: b, Solution: c, etc.)
- Avoid complex formatting or special characters

### 3. Subject Organization
- Process one subject at a time
- Use consistent subject names: `English`, `Mathematics`, `Science`, `Social Studies`, `Tamil`
- Keep PDF files organized by subject

## Troubleshooting

### Common Issues:

1. **No questions extracted:**
   - Check PDF text quality
   - Verify question format matches supported patterns
   - Try manual input method

2. **Incorrect answers:**
   - Review extracted JSON file
   - Manually correct answer indices if needed
   - Re-run the HTML generator

3. **Duplicate questions:**
   - The system automatically removes similar questions
   - You can manually edit JSON files to remove unwanted duplicates

### Manual JSON Editing:

If automatic extraction doesn't work perfectly, you can manually edit the JSON files:

```json
{
  "subject": "Mathematics",
  "source": "CBSE_2023_Math.pdf",
  "questions": [
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correct": 1
    }
  ],
  "total_questions": 1
}
```

## Integration Steps

1. **Extract questions from PDFs** → JSON files
2. **Convert JSON to HTML** → Updated quiz pages
3. **Test the quiz** → Verify questions display correctly
4. **Repeat for all subjects** → Complete question bank

## Benefits

- **Massive Question Bank:** Extract hundreds of questions quickly
- **Authentic Content:** Use real CBSE previous year papers
- **Automatic Integration:** Seamlessly add to existing quiz system
- **Randomization:** New questions automatically participate in shuffling
- **Quality Control:** Manual review and editing capabilities

## Next Steps

1. Gather your CBSE PDF question papers
2. Install dependencies: `pip install -r requirements.txt`
3. Start with one subject to test the process
4. Extract and integrate questions systematically
5. Test the updated quiz website

Your quiz platform will now have a comprehensive question bank with authentic CBSE content!
