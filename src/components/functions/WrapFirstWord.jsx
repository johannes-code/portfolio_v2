export function WrapFirstWord(input) {
  const text = typeof input === "object" ? input.heading : input;

  if (!text || typeof text !== "string") {
    return "";
  }

  const words = text.split(" ");
  if (words.length > 0) {
    words[0] = `<span> ${words[0]}</span>`;
  }
  return words.join(" ");
}
