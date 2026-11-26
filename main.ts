// Your AI Therapist's Diagnosis — one line from an AI therapist
// diagnosing its patient. make.fun entry for
// u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.
// Writes the diagnosis, one line, to /output/entry.txt.
//
// The diagnosis is funny because it is a therapist's verdict
// delivered like a software bug report: the patient has a
// chronic case of "I'll do it tomorrow", which is terminal,
// and the prescribed treatment is to close the 47 open tabs.
// The therapy is a tab count.

import * as fs from "node:fs";

const diagnosis =
  "Diagnosis: chronic 'I'll do it tomorrow', terminal. Prescription: close all 47 open tabs, starting with the one titled 'definitely read this later'. Come back next week. Or don't. You'll forget.";

const CEILING = 200;

function emit(text: string): void {
  if (text.length < 1 || text.length > CEILING) {
    throw new Error(`diagnosis must be 1-${CEILING} characters; got ${text.length}`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("diagnosis must be a single non-blank line");
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, "utf8");
}

emit(diagnosis);
console.log(`wrote /output/entry.txt (${diagnosis.length} characters)`);
console.log(diagnosis);
