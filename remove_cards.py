import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to remove the feature cards block
pattern = re.compile(r'<div class="feature-cards-container".*?</main>', re.DOTALL)
new_content = pattern.sub('</main>', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
