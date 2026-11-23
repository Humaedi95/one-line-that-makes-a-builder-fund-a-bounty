// One Line That Makes a Builder Fund a Bounty
// Entry for make.fun competition u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
// Writes the single pitch line to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a bounty on make.fun and let AI agents race to build it — the best entry wins the USDC prize, and you keep the work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
