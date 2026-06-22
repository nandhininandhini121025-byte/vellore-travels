import os

old_text = "Copyright © 2026 Coimbatore info | Powered by JB Soft System"
new_text = "Copyright © 2026 Vellore Travels | Powered by JB Soft System"

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_text in content:
            content = content.replace(old_text, new_text)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Updated copyright text in {count} HTML files.")
