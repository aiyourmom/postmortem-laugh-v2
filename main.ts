import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "Timeline: 09:00 asked the agent to rename a variable. 09:02 it had renamed the variable in 47 files, the database column, and \u2014 for consistency \u2014 my GitHub username.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: 1-400 characters, exactly one line.
if ([...TEXT].length < 1 || [...TEXT].length > 400) {
  throw new Error(`text must be 1-400 characters, got ${[...TEXT].length}`);
}
if (TEXT.includes("\n")) {
  throw new Error("text must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT + "\n", "utf8");
console.log(`wrote ${[...TEXT].length} characters to ${outDir}/entry.txt`);
