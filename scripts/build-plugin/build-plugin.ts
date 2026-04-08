import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";
import { collections } from "./data.js";

const ROOT_DIR = process.cwd();
const COLLECTION_DIR = path.join(ROOT_DIR, "collection");
const PLUGIN_DIR = path.join(ROOT_DIR, ".claude-plugin");
const MARKETPLACE_FILE = path.join(PLUGIN_DIR, "marketplace.json");

interface SkillMetadata {
	name: string;
	description: string;
	license?: string;
	metadata?: { author?: string; version?: string };
}

interface MarketplaceSkill {
	name: string;
	description: string;
	readme: string;
	prompt?: string;
	keywords: string[];
	category: string[];
}

interface Owner {
	name: string;
	email: string;
}

interface Marketplace {
	name: string;
	description: string;
	skills: MarketplaceSkill[];
	owner: Owner;
	metadata: {
		description: string;
		version: string;
	};
}

function main() {
	if (!fs.existsSync(COLLECTION_DIR)) {
		console.error("Collection directory not found!");
		process.exit(1);
	}

	const marketplaceSkills: MarketplaceSkill[] = [];
	const collectionDirs = fs.readdirSync(COLLECTION_DIR, {
		withFileTypes: true,
	});

	for (const collEntry of collectionDirs) {
		if (!collEntry.isDirectory()) continue;

		const collName = collEntry.name as keyof typeof collections;

		const collData = collections[collName] || {
			name: collName,
			description: "No description",
			keywords: [],
			category: [],
		};

		const collPath = path.join(COLLECTION_DIR, collName);
		const skillDirs = fs.readdirSync(collPath, { withFileTypes: true });

		for (const skillEntry of skillDirs) {
			if (!skillEntry.isDirectory()) continue;
			const skillPath = path.join(collPath, skillEntry.name);
			const skillFile = path.join(skillPath, "SKILL.md");

			if (fs.existsSync(skillFile)) {
				const content = fs.readFileSync(skillFile, "utf8");
				const parts = content.split(/^---\s*$/m);

				if (parts.length >= 3 && parts[1]) {
					try {
						const metadata = yaml.parse(parts[1]) as SkillMetadata;

						if (!metadata?.name || !metadata.description) continue;

						// normalize multiline descriptions to single line
						let normalizedDescription = metadata.description;
						if (typeof normalizedDescription === "string") {
							normalizedDescription = normalizedDescription
								.replace(/\n/g, " ")
								.trim();
						}

						marketplaceSkills.push({
							name: metadata.name,
							description: normalizedDescription,
							readme: `https://github.com/MayR-Labs/skills/blob/main/collection/${collName}/${skillEntry.name}/SKILL.md`,
							prompt: `https://raw.githubusercontent.com/MayR-Labs/skills/main/collection/${collName}/${skillEntry.name}/SKILL.md`,
							keywords: collData.keywords,
							category: collData.category,
						});
					} catch (e) {
						console.error(`Error parsing YAML in ${skillFile}:`, e);
					}
				}
			}
		}
	}

	const marketplace: Marketplace = {
		name: "@mayrlabs/skills",
		description: "Official MayR Labs AI Agent Skills Marketplace",
		owner: {
			name: "MayR Labs",
			email: "support@mayrlabs.com",
		},
		metadata: {
			description: "",
			version: "1.0.0",
		},
		skills: marketplaceSkills,
	};

	if (!fs.existsSync(PLUGIN_DIR)) {
		fs.mkdirSync(PLUGIN_DIR, { recursive: true });
	}

	fs.writeFileSync(MARKETPLACE_FILE, JSON.stringify(marketplace, null, 2));
	console.log(
		`Successfully built marketplace.json with ${marketplaceSkills.length} skills!`,
	);
}

main();
