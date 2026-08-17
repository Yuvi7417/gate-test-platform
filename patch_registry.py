with open("js/ee-test-registry.src.js", "r", encoding="utf-8") as f:
    content = f.read()

idx1 = content.find('name: "SWT - Power Electronics"')
idx2 = content.find('name: "SWT - Electrical & Electronics Measurements"')
idx3 = content.find('name: "SWT - Digital Electronics"')

if idx1 == -1 or idx2 == -1 or idx3 == -1:
    print("Could not find all test names!")
    exit(1)

part1 = content[:idx1]
test1 = content[idx1:idx2].replace('images/quiz/ee/', 'images/quiz/ee/power-electronics/')
test2 = content[idx2:idx3].replace('images/quiz/ee/', 'images/quiz/ee/measurements/')
test3 = content[idx3:].replace('images/quiz/ee/', 'images/quiz/ee/digital-electronics/')

with open("js/ee-test-registry.src.js", "w", encoding="utf-8") as f:
    f.write(part1 + test1 + test2 + test3)

print("Successfully updated image paths in ee-test-registry.src.js")
