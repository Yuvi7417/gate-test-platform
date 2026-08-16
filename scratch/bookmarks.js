

// Bookmark Logic
function renderBookmarks() {
  const container = document.getElementById("bookmarkContainer");
  const filterSelect = document.getElementById("bookmarkSubjectFilter");
  
  if (!container || !filterSelect) return;
  
  const filter = filterSelect.value;
  container.innerHTML = "";
  
  let bookmarks = JSON.parse(localStorage.getItem("apex_bookmarks") || "{}");
  let items = Object.values(bookmarks);
  
  if (filter !== "All") {
    items = items.filter(b => b.subject === filter);
  }
  
  if (items.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: #64748b;">No saved questions found.</div>`;
    return;
  }
  
  items.reverse().forEach(b => {
    const el = document.createElement("div");
    el.style.border = "1px solid #e2e8f0";
    el.style.borderRadius = "6px";
    el.style.padding = "15px";
    el.style.background = "#f8fafc";
    
    el.innerHTML = `
      <div style="font-size: 12px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; font-weight: bold; display: flex; justify-content: space-between;">
        <span>${b.subject} • Bookmarked on ${b.date || "Unknown Date"}</span>
        <span style="color: #3b82f6;">${b.testId} (Q${b.qIndex})</span>
      </div>
      <div style="font-size: 15px; color: #334155; line-height: 1.5; margin-bottom: 12px;">${b.text}</div>
      <button onclick="removeBookmark('${b.testId}_Q${b.qIndex - 1}')" style="background: none; border: none; color: #ef4444; font-size: 13px; font-weight: 500; cursor: pointer; padding: 0;">
        Remove Bookmark
      </button>
    `;
    container.appendChild(el);
  });
}

function removeBookmark(key) {
  let bookmarks = JSON.parse(localStorage.getItem("apex_bookmarks") || "{}");
  if (bookmarks[key]) {
    delete bookmarks[key];
    localStorage.setItem("apex_bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
  }
}
