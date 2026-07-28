content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
print('Q14 (index 13) image field:')
image_idx = parts[12].rfind('image: "')
print(parts[12][image_idx:image_idx+50])

print('\nQ45 (index 44) image field:')
image_idx = parts[43].rfind('image: "')
print(parts[43][image_idx:image_idx+50])
