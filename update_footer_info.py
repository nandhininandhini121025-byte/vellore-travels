import os
import re

old_footer_inner = """    <div class="footer-content">
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
    </div>"""

new_footer_inner = """    <div class="footer-content">
      <div class="footer-col">
        <h4>About Vellore</h4>
        <p>Vellore is an ancient and historically rich urban hub in Tamil Nadu, India, situated on the banks of the Palar River. Celebrated as the "Fort City", it is famous for its magnificent 16th-century fort, Sripuram Golden Temple, and world-renowned medical and educational institutions.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="tourist-places.html">Tourist Places</a></li>
          <li><a href="vellore-hotels.html">Hotels to Stay</a></li>
          <li><a href="contactus.html">Contact Us</a></li>
          <li><a href="sitemap.html">Sitemap</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Social Medias</h4>
        <div class="social-icons">
          <a href="#" class="social-icon" title="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" class="social-icon" title="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" class="social-icon" title="Twitter">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" class="social-icon" title="YouTube">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      Copyright © 2026 Coimbatore info | Powered by JB Soft System
    </div>"""

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_footer_inner in content:
            content = content.replace(old_footer_inner, new_footer_inner)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
        else:
            # Fallback regex in case of slight spacing differences
            pattern = re.compile(r'<div class="footer-content">.*?Copyright © 2026 \| Powered by JB Soft System\s*</div>', re.DOTALL)
            if pattern.search(content):
                content = pattern.sub(new_footer_inner, content)
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Updated footer info in {count} HTML files.")
