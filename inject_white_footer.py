import os
import re

style_block = """
<!-- Footer White Text Override -->
<style>
  .footer, .footer h1, .footer h2, .footer h3, .footer h4, .footer p, .footer a, .footer-bottom, .footer-col, .footer-links, .footer-links a {
    color: #ffffff !important;
  }
  .footer a:hover {
    color: #ffffff !important;
    opacity: 0.8;
  }
</style>
</body>"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check if we already injected something similar and remove it to avoid duplicates
        content = re.sub(r'<!-- Footer White Text Override -->\s*<style>.*?</style>\s*</body>', '</body>', content, flags=re.DOTALL)
        content = re.sub(r'<!-- Footer Title White Override -->\s*<style>.*?</style>\s*</body>', '</body>', content, flags=re.DOTALL)
        
        if '</body>' in content:
            new_content = content.replace('</body>', style_block)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f"Injected white footer style into {filename}")

print(f"Total files updated: {count}")
