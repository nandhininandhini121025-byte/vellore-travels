import os
import re

css_to_append = """
/* Responsive Styles */
.menu-toggle {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: white;
}

@media (max-width: 900px) {
  .header { padding: 0 20px; }
  .menu-toggle { display: block; }
  
  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #cc0000;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    z-index: 999;
  }
  .nav.mobile-open { display: flex; }
  .dropdown-content { position: static; box-shadow: none; min-width: auto; padding-left: 20px; background: transparent; }
  .dropdown-content a { color: white !important; border-bottom: 1px solid rgba(255,255,255,0.2); }
  .dropdown-content a:hover { background-color: rgba(255,255,255,0.1); color: white !important; }
  
  /* Hero */
  .hero h1 { font-size: 56px; }
  .hero p { font-size: 18px; }
  
  /* Grids */
  .features, .attractions-grid, .footer-content {
    grid-template-columns: repeat(2, 1fr) !important;
    padding: 40px 20px !important;
    gap: 20px;
  }
}

@media (max-width: 600px) {
  /* Grids */
  .features, .attractions-grid, .footer-content {
    grid-template-columns: 1fr !important;
  }
  .hero h1 { font-size: 40px; }
  .hero-nav { padding: 0 10px; }
  .footer { padding-top: 50px; }
  .logo { font-size: 20px; }
}
"""

js_to_inject = """
      var menuToggle = document.querySelector('.menu-toggle');
      var nav = document.querySelector('.nav');
      if(menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
          nav.classList.toggle('mobile-open');
        });
      }
"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        updated = False
        
        # Inject menu-toggle
        if '<div class="menu-toggle">☰</div>' not in content:
            content = content.replace('    <nav class="nav">', '    <div class="menu-toggle">☰</div>\n    <nav class="nav">')
            updated = True
        
        # Inject JS
        if 'nav.classList.toggle' not in content:
            # Find the existing script tag and inject
            content = content.replace('});\n      \n      // Close dropdown', '});\n' + js_to_inject + '\n      // Close dropdown')
            updated = True
            
        # If it's index.html, append CSS to the <style> block
        if filename == 'index.html':
            if '/* Responsive Styles */' not in content:
                content = content.replace('</style>', css_to_append + '\n  </style>')
                updated = True
                
        if updated:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Updated {count} HTML files for responsiveness.")

# Append CSS to style.css
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '/* Responsive Styles */' not in css:
    with open('css/style.css', 'a', encoding='utf-8') as f:
        f.write(css_to_append)
    print("Appended responsive CSS to style.css")
else:
    print("Responsive CSS already in style.css")
