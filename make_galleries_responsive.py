import os
import re

# Regex to find the hardcoded inline flex row
# <div style="display: flex; gap: 20px; width: 100%;">
row_regex = re.compile(r'<div\s+style="display:\s*flex;\s*gap:\s*20px;\s*width:\s*100%;?"\s*>')

# Regex to find the hardcoded image styles
# <img src="..." alt="..." style="flex: 1; height: 220px; width: 50%;" />
# We want to replace `style="flex: 1; height: 220px; width: 50%;"` with `class="gallery-img"`
img_regex = re.compile(r'(<img[^>]*?)\bstyle="flex:\s*1;\s*height:\s*220px;\s*width:\s*50%;?"([^>]*>)')

count = 0
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = row_regex.sub('<div class="gallery-row">', content)
        
        # Also clean up any `style="..."` on the image by replacing it with `class="gallery-img"`
        new_content = img_regex.sub(r'\1class="gallery-img"\2', new_content)
        
        # Handle the edge case of `<div class="place-image" style="display: flex; flex-direction: column; gap: 20px;">`
        # We can just leave that one alone since `flex-direction: column` already stacks. 
        # But wait, it's just a wrapper.
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f"Refactored inline gallery styles in {filename}")

print(f"Total files updated: {count}")
