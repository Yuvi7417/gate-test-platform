const fs = require('fs');
const path = 'js/questions/pw-test-registry.js';
let content = fs.readFileSync(path, 'utf8');

// Update all <table> tags to have border="1" if they don't already
content = content.replace(/<table([^>]*)>/g, (match, attrs) => {
    let newAttrs = attrs;
    if (!newAttrs.includes('border="1"')) {
        newAttrs += ' border="1"';
    }
    // Also ensure border-collapse is there
    if (!newAttrs.includes('border-collapse')) {
        if (newAttrs.includes('style="')) {
            newAttrs = newAttrs.replace('style="', 'style="border-collapse: collapse; ');
        } else {
            newAttrs += ' style="border-collapse: collapse;"';
        }
    }
    return `<table${newAttrs}>`;
});

// Update all <td> and <th> tags to have the proper styling
content = content.replace(/<(td|th)([^>]*)>/g, (match, tag, attrs) => {
    if (attrs.includes('border: 1px solid')) {
        return match; // already styled
    }
    let newAttrs = attrs;
    const styleToAdd = "padding: 8px; border: 1px solid #ced4da;";
    if (newAttrs.includes('style="')) {
        newAttrs = newAttrs.replace('style="', `style="${styleToAdd} `);
    } else {
        newAttrs += ` style="${styleToAdd}"`;
    }
    return `<${tag}${newAttrs}>`;
});

fs.writeFileSync(path, content, 'utf8');
console.log("Tables updated");
