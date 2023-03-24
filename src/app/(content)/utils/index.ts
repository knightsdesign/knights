export function calculateReadingTime(text: string, wordsPerMinute = 200) {
  const wordCount = text.trim().split(/\s+/g).length;
  const minutes = wordCount / wordsPerMinute;
  return Math.ceil(minutes);
}
