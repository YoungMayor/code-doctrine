import fs from 'fs';
import path from 'path';

function processDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) processDir(fullPath);
        else if (entry.name === 'SKILL.md') updateFile(fullPath);
    }
}

function updateFile(file: string) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('license: MIT') || content.includes('author: MayR Labs')) return;

    const parts = content.split(/^---\s*$/m);
    if (parts.length >= 3 && parts[1]) {
        // parts[1] is the frontmatter
        parts[1] = parts[1].trimEnd() + `\nlicense: MIT\nmetadata:\n  author: MayR Labs\n  version: '1.0.0'\n`;
        content = parts[0] + '---\n' + parts[1].trimStart() + '---\n' + parts.slice(2).join('---').trimStart();
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}

processDir(path.join(process.cwd(), 'collection/persona'));
processDir(path.join(process.cwd(), 'collection/internals'));
