import os
import re

files = os.listdir('js/questions/fst-mock-test-3')
# filter only image files from 8 to 74
image_files = [f for f in files if re.match(r'^(\d+)(\.\d+)?\.(png|jpg)$', f)]
# extract base numbers
base_numbers = sorted(list(set(int(re.match(r'^(\d+)', f).group(1)) for f in image_files if 8 <= int(re.match(r'^(\d+)', f).group(1)) <= 74)))

print(f"Total base numbers: {len(base_numbers)}")
print(f"Base numbers: {base_numbers}")
