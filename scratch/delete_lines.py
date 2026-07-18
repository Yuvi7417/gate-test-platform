import os

with open('js/test-registry.src.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# lines are 0-indexed, so lines 6816 to 7039 correspond to lines 6817 to 7040 in 1-index.
# Let's verify by printing them.
print("Deleting the following block starts with:")
print(lines[6816:6820])

new_lines = lines[:6816] + lines[7040:]

with open('js/test-registry.src.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Done")
