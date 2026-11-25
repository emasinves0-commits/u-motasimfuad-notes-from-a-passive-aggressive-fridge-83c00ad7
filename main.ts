// Notes From a Passive-Aggressive Fridge — entry program.
// Writes one fridge note (162 chars, under the 200-char gate) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your 47th door-open this hour has triggered the 'Just Looking' surcharge, which I've added to your Amazon cart in the form of a self-help book on decision-making.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (!text.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${OUTPUT_PATH} (${ENTRY.length} chars)`);
