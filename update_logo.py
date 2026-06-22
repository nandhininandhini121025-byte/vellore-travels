import os
import re

old_html = """      <div class="logo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20" style="position: absolute; z-index: 2;">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>"""

new_html = """      <div class="logo-icon">
        VT
      </div>"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_html in content:
            content = content.replace(old_html, new_html)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Updated HTML logo in {count} files.")

# Now update css
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace .logo-icon CSS
old_css = """.logo-icon {
  width: 32px;
  height: 32px;
  background: #80c4e9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  position: relative;
}
.logo-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #7bdcb5;
  border-radius: 2px;
}"""

new_css = """.logo-icon {
  width: 36px;
  height: 36px;
  background: transparent;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  font-size: 18px;
}"""

if old_css in css:
    css = css.replace(old_css, new_css)
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Updated CSS logo styles.")
else:
    print("Old CSS not found perfectly.")
