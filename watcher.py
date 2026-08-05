import os
import time
import subprocess

# List of files to monitor
FILES_TO_WATCH = ["test1.html", "test2.html", "test3.html", "test4.html", "process_all.js"]
LAST_MODIFIED = {}

def get_mtime(filepath):
    try:
        return os.path.getmtime(filepath)
    except FileNotFoundError:
        return 0

# Initialize modification times
for f in FILES_TO_WATCH:
    LAST_MODIFIED[f] = get_mtime(f)

print("Watcher started! Monitoring HTML files for changes...")
print("Press Ctrl+C to stop.")

while True:
    changed_file = None
    for f in FILES_TO_WATCH:
        mtime = get_mtime(f)
        if mtime > LAST_MODIFIED[f]:
            changed_file = f
            LAST_MODIFIED[f] = mtime
            break
            
    if changed_file:
        print(f"\n[{time.strftime('%X')}] Detected change in {changed_file}!")
        print("Waiting 3 seconds for any additional saves to complete...")
        time.sleep(3)
        
        # Update mtimes again to ignore saves that happened during the wait
        for f in FILES_TO_WATCH:
            LAST_MODIFIED[f] = get_mtime(f)
            
        print("Starting automated processing...")
        try:
            print(">> 1. Running node process_all.js")
            subprocess.run(["node", "process_all.js"], check=True)
            
            print(">> 2. Running npm run build:tests")
            subprocess.run(["npm", "run", "build:tests"], check=True, shell=True)
            
            print(">> 3. Committing and pushing to GitHub")
            subprocess.run(["git", "add", "."], check=True)
            subprocess.run(["git", "commit", "-m", f"Auto-update triggered by {changed_file}"], check=False) # check=False because there might be no changes
            subprocess.run(["git", "push"], check=True)
            
            print(">> All tasks completed successfully!")
            
        except subprocess.CalledProcessError as e:
            print(f"\n[ERROR] A command failed: {e}")
        except Exception as e:
            print(f"\n[ERROR] An unexpected error occurred: {e}")
            
    time.sleep(1)
