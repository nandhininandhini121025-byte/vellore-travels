import re

# Append the required CSS from index.html to style.css
css_to_append = """

/* --- REDESIGNED HEADER AND FOOTER CSS --- */

/* Header */
.header {
  background-color: #cc0000;
  color: white;
  padding: 0 40px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.logo-icon {
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
}
.nav {
  display: flex;
  gap: 30px;
  align-items: center;
}
.nav a {
  font-weight: 600;
  font-size: 15px;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
}
.nav a:hover { opacity: 0.8; }
.nav .btn-home {
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 6px;
}

/* Footer */
.footer {
  background: #cc0000;
  color: white;
  position: relative;
  margin-top: 40px;
  padding-top: 80px;
}
.footer-jagged {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 20L10 0L20 20Z" fill="%23cc0000"/></svg>') repeat-x;
  background-size: 20px 20px;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px 60px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
}
.footer h4 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding-bottom: 10px;
  display: inline-block;
}
.footer p {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255,255,255,0.9);
}
.footer-links {
  list-style: none;
}
.footer-links li {
  margin-bottom: 12px;
}
.footer-links a {
  color: rgba(255,255,255,0.9);
  transition: color 0.3s;
}
.footer-links a:hover { color: white; }
.social-icons {
  display: flex;
  gap: 15px;
}
.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background 0.3s;
}
.social-icon:hover { background: rgba(255,255,255,0.4); }
.footer-bottom {
  text-align: center;
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}
"""

with open('css/style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Update primary and secondary accent colors to #cc0000
css_content = re.sub(r'--accent-primary:\s*#[a-zA-Z0-9]+;', '--accent-primary: #cc0000;', css_content)
css_content = re.sub(r'--accent-secondary:\s*#[a-zA-Z0-9]+;', '--accent-secondary: #cc0000;', css_content)
css_content = re.sub(r'--accent-gold:\s*#[a-zA-Z0-9]+;', '--accent-gold: #cc0000;', css_content)

# Append the new css
css_content += css_to_append

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Updated css/style.css successfully.")
