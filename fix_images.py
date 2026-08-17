import os
import urllib.request
import sys

def download_image(url, filepath):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        with open(filepath, 'wb') as f:
            f.write(response.read())

def process_log(log_path, target_folder):
    os.makedirs(f"images/quiz/ee/{target_folder}", exist_ok=True)
    with open(log_path, 'r', encoding='utf-8') as f:
        for line in f:
            if line.startswith("Downloading"):
                parts = line.split(" to ")
                url = parts[0].replace("Downloading ", "")
                old_path = parts[1].strip()
                # Use replace('\\', '/') to handle windows paths
                filename = old_path.replace('\\', '/').split('/')[-1]
                new_path = f"images/quiz/ee/{target_folder}/{filename}"
                print(f"Downloading {url} to {new_path}")
                try:
                    download_image(url, new_path)
                except Exception as e:
                    print(f"Failed to download {url}: {e}")

if __name__ == "__main__":
    process_log(sys.argv[1], sys.argv[2])
