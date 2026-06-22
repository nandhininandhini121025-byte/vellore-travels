import os
import re

# 1. Update style.css to remove hover and improve dropdown aesthetics
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('.dropdown:hover .dropdown-content {\n  display: block;\n}', '')
# Ensure we catch variations if any
css = re.sub(r'\.dropdown:hover \.dropdown-content\s*\{\s*display:\s*block;\s*\}', '', css)

# Add a class-based block
if '.dropdown-content.show' not in css:
    css += '\n.dropdown-content.show { display: block; }\n'

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)


# 2. Inject JS into all HTML files
js_script = """
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.querySelector('.dropdown > a');
    if(dropdownBtn) {
      dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var content = this.nextElementSibling;
        content.classList.toggle('show');
      });
      
      // Close dropdown if clicked outside
      window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown > a') && !e.target.matches('.dropdown-arrow')) {
          var dropdowns = document.querySelectorAll('.dropdown-content');
          dropdowns.forEach(function(content) {
            if (content.classList.contains('show')) {
              content.classList.remove('show');
            }
          });
        }
      });
    }
  });
</script>
</body>
"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if already has script to avoid duplicates
        if "content.classList.toggle('show');" not in content:
            content = content.replace('</body>', js_script)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Updated JS in {count} HTML files and fixed CSS.")
