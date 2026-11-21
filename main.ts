// The poem about permission: writes one short poem to /output/entry.txt.
//
// A poem about agency — the power to ask and to be given — built on one
// image: an empty cup held out, filled, and warm in both hands.
// Deterministic: no network, no randomness, no clock. Two runs write
// identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `I held out my empty cup, and you filled it.
That is the whole of it:
my asking, your giving,
and the tea warm in both our hands.

I did not take the cup.
You did not lose it.
Permission is like that —
it grows each time it changes hands.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
