// One Word From Your Ex — writes exactly one word to /output/entry.txt.
// The word is the one my ex would use to describe me. "Forgettable" was
// the first draft: it stings, but it is a plain insult with no surprise.
// "Unsubscribed" is sharper — the relationship as a subscription she
// cancelled: modern, relatable, painfully honest, and it lands instantly
// with no explanation. One word, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Unsubscribed";

// Gate check, mirroring RULES.txt: 1-24 characters, exactly one word,
// not only whitespace. Fail loudly rather than writing an invalid entry.
if (word.length < 1 || word.length > 24 || /\s/.test(word)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(word)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(`Wrote ${word.length} characters to /output/entry.txt`);
