import os
import re

new_logo = """<a href="index.html" class="logo" style="gap: 12px;">
      <div class="logo-icon" style="background-color: white; color: #cc0000; border: 2px solid white; font-weight: 900; font-style: italic;">
        VTC
      </div>
      <span style="font-family: 'Playfair Display', serif; font-weight: 800; letter-spacing: 0.5px;">VelloreTravels.com</span>
    </a>"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to find the logo anchor tag block
        pattern = re.compile(r'<a href="index\.html" class="logo">\s*<div class="logo-icon">\s*VT\s*</div>\s*velloretravels\s*</a>', re.DOTALL)
        
        if pattern.search(content):
            content = pattern.sub(new_logo, content)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Updated {filename}")
        else:
            # Fallback search if spacing is slightly different
            pattern2 = re.compile(r'<a href="index\.html" class="logo">.*?velloretravels\s*</a>', re.DOTALL)
            if pattern2.search(content):
                content = pattern2.sub(new_logo, content)
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1
                print(f"Updated {filename} (fallback regex)")

print(f"Total files updated: {count}")
