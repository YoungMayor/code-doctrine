import fs from 'node:fs';
import path from 'node:path';
import { collections } from './data.js';

const ROOT_DIR = process.cwd();
const COLLECTION_DIR = path.join(ROOT_DIR, 'collection');
const PLUGIN_DIR = path.join(ROOT_DIR, '.claude-plugin');
const MARKETPLACE_FILE = path.join(PLUGIN_DIR, 'marketplace.json.bak');

interface MarketplacePlugin {
  name: string;
  source: string;
  description: string;
  version: string;
  repository: string;
  license: string;
  author: { name: string; email: string };
  keywords?: string[];
  category: string;
  skills: string[];
}

interface Marketplace {
  name: string;
  owner: { name: string; email: string };
  metadata: { description: string; version: string };
  plugins: MarketplacePlugin[];
}

function main() {
  if (!fs.existsSync(COLLECTION_DIR)) {
    console.error('Collection directory not found!');
    process.exit(1);
  }

  const marketplacePlugins: MarketplacePlugin[] = [];

  const collectionDirs = fs.readdirSync(COLLECTION_DIR, {
    withFileTypes: true,
  });

  for (const collEntry of collectionDirs) {
    if (!collEntry.isDirectory()) continue;

    const collName = collEntry.name as keyof typeof collections;

    const collData = collections[collName] || {
      name: collName,
      description: 'No description provided.',
      keywords: [],
      category: [collName],
    };

    const collPath = path.join(COLLECTION_DIR, collName);
    const skillDirs = fs.readdirSync(collPath, { withFileTypes: true });

    const skillsPaths: string[] = [];

    for (const skillEntry of skillDirs) {
      if (!skillEntry.isDirectory()) continue;

      const skillPath = path.join(collPath, skillEntry.name);
      const skillFile = path.join(skillPath, 'SKILL.md');

      if (fs.existsSync(skillFile)) {
        skillsPaths.push(`./collection/${collName}/${skillEntry.name}`);
      }
    }

    if (skillsPaths.length > 0) {
      marketplacePlugins.push({
        name: collName,
        source: './',
        description: collData.description || '',
        version: '1.0.0',
        repository: 'https://github.com/MayR-Labs/skills.git',
        license: 'MIT',
        author: { name: 'MayR Labs', email: 'support@mayrlabs.com' },
        keywords: collData.keywords,
        category: Array.isArray(collData.category)
          ? collData.category[0]
          : collData.category || collName,
        skills: skillsPaths,
      });
    }
  }

  const marketplace: Marketplace = {
    name: '@mayrlabs/skills',
    owner: { name: 'MayR Labs', email: 'support@mayrlabs.com' },
    metadata: {
      description: 'Official MayR Labs AI Agent Skills Marketplace',
      version: '1.0.0',
    },
    plugins: marketplacePlugins,
  };

  if (!fs.existsSync(PLUGIN_DIR)) {
    fs.mkdirSync(PLUGIN_DIR, { recursive: true });
  }

  fs.writeFileSync(MARKETPLACE_FILE, JSON.stringify(marketplace, null, 2));

  console.log(
    `Successfully built marketplace.json with ${marketplacePlugins.length} plugins!`
  );
}

main();
