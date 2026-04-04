/** Paragraph-style bullets in data (blank-line separated). */
export function bulletsFromParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/** Impact / metric lines (one per line). */
export function bulletsFromLines(text: string): string[] {
  return text
    .split(/\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
