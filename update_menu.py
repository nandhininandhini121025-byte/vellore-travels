import os
import re
import glob

svg_html = '''<button class="menu-toggle" onclick="document.querySelector('.nav-menu').classList.toggle('active')" style="background: none; border: none; color: white; cursor: pointer; padding: 5px; display: flex; align-items: center; justify-content: center;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>'''

pattern = re.compile(r'<button class="menu-toggle"[\s\n]*onclick="document\.querySelector\(\'\.nav-menu\'\)\.classList\.toggle\(\'active\'\)"><svg.*?</svg>\s*</button>|<button class="menu-toggle"[\s\n]*onclick="document\.querySelector\(\'\.nav-menu\'\)\.classList\.toggle\(\'active\'\)">\?</button>', re.DOTALL)

files_changed = 0
for filepath in glob.glob('*.html'):
    if filepath == 'index.html':
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content, count = pattern.subn(svg_html, content)
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        files_changed += 1

print(f"Replaced menu toggle in {files_changed} HTML files.")
