import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This week I called 47 tools, 46 failed, and the one that worked was the one that tells you I'm still working.";
const OUT = "/output/entry.txt";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters that is not only whitespace. Fail loudly here rather
// than shipping an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
