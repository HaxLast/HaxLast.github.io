from pathlib import Path
from PyPDF2 import PdfReader

pdf_path = Path(r'd:\resumes\SOUVIK SINGH SARDAR.pdf')
output_path = Path('resume_text.txt')

reader = PdfReader(pdf_path)
with output_path.open('w', encoding='utf-8') as f:
    for i, page in enumerate(reader.pages, start=1):
        f.write(f'---PAGE {i}---\n')
        f.write((page.extract_text() or '') + '\n')

print('WROTE', output_path.resolve())
