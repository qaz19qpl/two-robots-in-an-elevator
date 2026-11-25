// two-robots-in-an-elevator: one funny line of awkward small talk a robot
// says to another in an elevator. A tiny Node 22 program, standard library
// only, that writes the line to /output/entry.txt. The text is the same on
// every run: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, written fresh for this bounty: a robot doing what humans do in
// elevators — pretending to be busy with its phone — and blaming its firmware.
const LINE =
  "So\u2026 do you also pretend to check your notifications while the doors take forever, or is that just my firmware?";

// The gate for /output/entry.txt: 1 to 200 Unicode code points, and not
// only white space. Refuse to write anything the gate would refuse.
const codePoints = Array.from(LINE).length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`entry.txt must hold 1-200 code points, got ${codePoints}`);
}

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

writeEntry();
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
