import os
import re

new_header = """  <!-- Header -->
  <header class="header">
    <a href="index.html" class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20" style="position: absolute; z-index: 2;">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      velloretravels
    </a>
    <nav class="nav">
      <a href="index.html" class="btn-home">HOME</a>
      <a href="tourist-places.html">TOURIST PLACES</a>
      <a href="vellore-hotels.html">HOTELS TO STAY</a>
      <a href="vellore-atm.html">ATM</a>
      <a href="vellore-banks.html">BANKS</a>
      <a href="vellore-taxiservice.html">TAXI</a>
      <a href="tour-operator.html">TOUR OPERATORS</a>
      <a href="contactus.html">CONTACT US</a>
    </nav>
  </header>"""

new_footer = """  <!-- Footer -->
  <footer class="footer">
    <div class="footer-jagged"></div>
    <div class="footer-content">
      <div class="footer-col">
        <h4>About Vellore</h4>
        <p>Vellore is an ancient and historically rich urban hub in Tamil Nadu, India, situated on the banks of the Palar River. Celebrated as the "Fort City", it is famous for its magnificent 16th-century fort, Sripuram Golden Temple, and world-renowned medical and educational institutions.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="tourist-places.html">Sightseeing</a></li>
          <li><a href="vellore-hotels.html">Hotels & Stays</a></li>
          <li><a href="contactus.html">Contact Us</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Follow Us</h4>
        <div class="social-icons">
          <a href="#" class="social-icon">F</a>
          <a href="#" class="social-icon">I</a>
          <a href="#" class="social-icon">Y</a>
          <a href="#" class="social-icon">X</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      Copyright © 2026 | Powered by JB Soft System
    </div>
  </footer>"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html') and filename != 'index.html':
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We need to make sure we don't accidentally match multiple headers if there's any weird HTML.
        # Usually there's only one header/footer tag per file.
        content = re.sub(r'<header.*?>.*?</header>', new_header, content, flags=re.DOTALL)
        content = re.sub(r'<footer.*?>.*?</footer>', new_footer, content, flags=re.DOTALL)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1
        print(f"Updated {filename}")

print(f"Successfully updated {count} files.")
