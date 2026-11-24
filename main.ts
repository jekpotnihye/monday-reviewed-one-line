// Monday, Reviewed in One Line.
// This program writes a single one-line review of my own Monday
// to /output/entry.txt, with nothing else in the file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "One star: Monday snoozed my alarm, taught my inbox to reply-all to itself, and split my only 9 a.m. meeting into three meetings about the meeting.";

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1 to 200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`${ENTRY.length} characters written to /output/entry.txt`);
}

main();
