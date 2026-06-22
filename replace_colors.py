import os
import re

replacements = [
    (r'(?i)#b91c1c', '#cc0000'),
    (r'(?i)#991b1b', '#cc0000'),
    (r'(?i)#ff4b4b', '#cc0000'),
    (r'(?i)#e63939', '#aa0000'), # Hover state for ff4b4b
    (r'(?i)#d11d1e', '#cc0000'),
    (r'185,\s*28,\s*28', '204, 0, 0'),
    (r'153,\s*27,\s*27', '204, 0, 0'),
    (r'209,\s*29,\s*30', '204, 0, 0'),
]

files_to_process = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.css') or f.endswith('.html'):
            files_to_process.append(os.path.join(root, f))

count = 0
for filepath in files_to_process:
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        count += 1
        print(f"Updated colors in {filepath}")

print(f"Successfully updated colors in {count} files.")
