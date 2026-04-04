#!/usr/bin/env node
/**
 * Fails CI / prebuild if TSX contains invalid patterns that break the DOM
 * and make Tailwind "disappear" (browser repairs tree → wrong nodes get classes).
 *
 * 1) <button> ... </button> whose body includes block-level JSX (div, section, etc.)
 * 2) <p> ... </p> whose body includes <div (often invalid; use <div> for rich blocks)
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src");

const BLOCK_IN_BUTTON =
  /<\s*(div|section|article|main|footer|header|nav|ul|ol|form|table|figure|motion\.div)\b/i;
const DIV_IN_P = /<\s*div\b/i;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".tsx")) out.push(p);
  }
  return out;
}

/** Self-closing <button ... /> must be ignored: a naive <button>…</button> regex pairs />'s > with a later </button>. */
function stripSelfClosingButtons(source) {
  return source.replace(/<button\b[^>]*\/\s*>/gi, "");
}

/** Non-greedy match; assumes no nested <button> inside outer button (true for this repo). */
function findButtonBodies(source) {
  const bodies = [];
  const withoutSelfClose = stripSelfClosingButtons(source);
  const re = /<button\b[^>]*>([\s\S]*?)<\/button>/gi;
  let m;
  while ((m = re.exec(withoutSelfClose))) {
    bodies.push(m[1]);
  }
  return bodies;
}

function findParagraphBodies(source) {
  const bodies = [];
  const re = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(source))) {
    bodies.push(m[1]);
  }
  return bodies;
}

let failed = false;
const files = walk(SRC);

for (const abs of files) {
  const rel = relative(ROOT, abs);
  const s = readFileSync(abs, "utf8");

  for (const body of findButtonBodies(s)) {
    if (BLOCK_IN_BUTTON.test(body)) {
      console.error(`[check-portfolio-markup] ${rel}: <button> must not wrap block elements (found block tag inside button).`);
      console.error("  Fix: use <div role=\"button\" tabIndex={0}> for card-sized click targets, or keep <button> text-only.");
      failed = true;
    }
  }

  for (const body of findParagraphBodies(s)) {
    if (DIV_IN_P.test(body)) {
      console.error(`[check-portfolio-markup] ${rel}: <p> must not wrap <div> (invalid HTML).`);
      console.error("  Fix: use a <div> with text classes for that block of content.");
      failed = true;
    }
  }
}

if (failed) {
  console.error("\nSee .cursor/rules/product-portfolio-markup.mdc for full guidelines.\n");
  process.exit(1);
}

console.log(`check-portfolio-markup: OK (${files.length} TSX files)`);
