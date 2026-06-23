import os

files_to_update = [
    "tourist-places.html",
    "vellore-hotels.html",
    "vellore-atm.html",
    "vellore-banks.html",
    "vellore-taxiservice.html",
    "tour-operator.html"
]

style_block = """
<!-- Footer White Theme Override -->
<style>
  footer.footer, footer.app-footer {
    background: #ffffff !important;
    color: #000000 !important;
    border-top: 1px solid #e2e8f0;
  }
  footer.footer h4, footer.app-footer h3, footer.app-footer h4 {
    color: #cc0000 !important;
  }
  footer.footer p, footer.app-footer p, 
  footer.footer-links a, footer.app-footer .footer-links a,
  .footer-bottom, .copyright {
    color: #333333 !important;
  }
  .social-icon svg {
    stroke: #cc0000 !important;
  }
  .social-icon {
    border: 1px solid #cc0000;
  }
  .social-icon:hover {
    background-color: #cc0000;
  }
  .social-icon:hover svg {
    stroke: #ffffff !important;
  }
</style>
"""

count = 0
for filename in files_to_update:
    filepath = os.path.join(".", filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if "Footer White Theme Override" not in content:
            # Insert right before </body>
            if "</body>" in content:
                content = content.replace("</body>", style_block + "\n</body>")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {filename}")
                count += 1
            else:
                print(f"No </body> found in {filename}, appending to end.")
                content += style_block
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1
        else:
            print(f"{filename} already has the override.")
    else:
        print(f"{filename} not found.")

print(f"Total files updated: {count}")
