import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

new_header = '''  <header class="app-header-new">
    <div class="header-top-bar">
      <div class="header-container-top">
        <a href="index.html" class="logo-section-new">
          <div class="brand-logo-white-box">VT</div>
          <span class="brand-name-new">Vellore <span class="accent-text">Travels</span></span>
        </a>
        <div class="top-nav-links">
          <a href="index.html">Home</a>
          <a href="sitemap.html">Sitemap</a>
          <a href="contactus.html">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="header-bottom-bar">
      <div class="header-container-bottom">
        <ul class="nav-menu-new">
          <li class="nav-item-new active"><a href="index.html">HOME</a></li>
          <li class="nav-item-new"><a href="tourist-places.html">TOURIST PLACES</a></li>
          <li class="nav-item-new"><a href="vellore-hotels.html">HOTELS TO STAY</a></li>
          <li class="nav-item-new"><a href="vellore-atm.html">ATM</a></li>
          <li class="nav-item-new"><a href="vellore-banks.html">BANKS</a></li>
          <li class="nav-item-new"><a href="vellore-taxiservice.html">TAXI</a></li>
          <li class="nav-item-new"><a href="tour-operator.html">TOUR OPERATORS</a></li>
          <li class="nav-item-new"><a href="contactus.html">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  </header>'''

pattern = re.compile(r'<header class="app-header">.*?</header>', re.DOTALL)

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if pattern.search(content):
        new_content = pattern.sub(new_header, content)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")

print("Done updating headers.")
