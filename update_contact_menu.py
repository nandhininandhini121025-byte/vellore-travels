import os
import glob

for filepath in glob.glob('*.html'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to replace the contact button with both bus details and contact us
    old_contact = '<a href="contactus.html" class="btn-contact-white">CONTACT US</a>'
    new_contact = '<a href="vellore-bus.html" style="color: white; font-family: \'Outfit\', sans-serif; font-size: 15px; font-weight: 600; text-decoration: none; margin-left: auto;">BUS DETAILS</a>\n          <a href="contactus.html" class="btn-contact-white" style="margin-left: 25px;">CONTACT US</a>'
    
    # Also handle if it's already there but we want to update spacing
    if 'href="vellore-bus.html"' in content and filepath != 'vellore-bus.html':
        continue
        
    if old_contact in content:
        new_content = content.replace(old_contact, new_contact)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
