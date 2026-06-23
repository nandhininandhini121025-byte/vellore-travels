import os
import re

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to find the style link and add a query parameter
        new_content = re.sub(r'href="css/style\.css(\?v=\d+)?"', 'href="css/style.css?v=2"', content)
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f"Updated {filename}")

print(f"Total files updated: {count}")
