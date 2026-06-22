import os
import re

old_nav = """    <nav class="nav">
      <a href="index.html" class="btn-home">HOME</a>
      <a href="tourist-places.html">TOURIST PLACES</a>
      <a href="vellore-hotels.html">HOTELS TO STAY</a>
      <a href="vellore-atm.html">ATM</a>
      <a href="vellore-banks.html">BANKS</a>
      <a href="vellore-taxiservice.html">TAXI</a>
      <a href="tour-operator.html">TOUR OPERATORS</a>
      <a href="contactus.html">CONTACT US</a>
    </nav>"""

new_nav = """    <nav class="nav">
      <a href="index.html" class="btn-home">HOME</a>
      <a href="tourist-places.html">TOURIST PLACES</a>
      <a href="vellore-hotels.html">HOTELS TO STAY</a>
      <div class="dropdown">
        <a href="#" style="cursor: pointer;">CITY DIRECTORIES <span class="dropdown-arrow">▼</span></a>
        <div class="dropdown-content">
          <a href="vellore-atm.html">ATM</a>
          <a href="vellore-banks.html">BANKS</a>
          <a href="vellore-taxiservice.html">TAXI</a>
          <a href="tour-operator.html">TOUR OPERATORS</a>
        </div>
      </div>
      <a href="contactus.html">CONTACT US</a>
    </nav>"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_nav in content:
            content = content.replace(old_nav, new_nav)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Updated HTML navigation in {count} files.")

dropdown_css = """
/* Dropdown CSS */
.dropdown {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
  z-index: 1001;
  border-radius: 8px;
  top: 100%;
  left: 0;
  overflow: hidden;
}
.dropdown-content a {
  color: #333 !important;
  padding: 12px 16px !important;
  text-decoration: none;
  display: block;
  font-weight: 500 !important;
  border-bottom: 1px solid #f0f0f0;
}
.dropdown-content a:last-child {
  border-bottom: none;
}
.dropdown-content a:hover {
  background-color: #f8f8f8;
  color: #cc0000 !important;
  opacity: 1 !important;
}
.dropdown:hover .dropdown-content {
  display: block;
}
"""

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

if "/* Dropdown CSS */" not in css:
    with open('css/style.css', 'a', encoding='utf-8') as f:
        f.write(dropdown_css)
    print("Added Dropdown CSS to style.css.")
else:
    print("Dropdown CSS already exists.")
