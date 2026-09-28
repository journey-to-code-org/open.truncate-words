function assertString(value) {
  if (typeof value !== "string") throw new TypeError("Expected text to be a string");
}
function assertLimit(value) {
  if (!Number.isInteger(value) || value < 0) throw new RangeError("Expected limit to be a non-negative integer");
}
function normalizeOptions(options) {
  if (options === null || typeof options !== "object" || Array.isArray(options)) throw new TypeError("Expected options to be an object");
  const { ellipsis = "…", trim = true } = options;
  if (typeof ellipsis !== "string") throw new TypeError("Expected ellipsis to be a string");
  if (typeof trim !== "boolean") throw new TypeError("Expected trim to be a boolean");
  return { ellipsis, trim };
}

export function truncateWords(text, maxWords, options = {}) {
  assertString(text); assertLimit(maxWords);
  const { ellipsis, trim } = normalizeOptions(options);
  const value = trim ? text.trim() : text;
  const words = value.match(/\S+/gu) ?? [];
  if (words.length <= maxWords) return value;
  if (maxWords === 0) return ellipsis;
  return words.slice(0, maxWords).join(" ") + ellipsis;
}

export function truncateCharacters(text, maxCharacters, options = {}) {
  assertString(text); assertLimit(maxCharacters);
  const { ellipsis, trim } = normalizeOptions(options);
  const value = trim ? text.trim() : text;
  const chars = splitGraphemes(value);
  if (chars.length <= maxCharacters) return value;
  return chars.slice(0, maxCharacters).join("") + ellipsis;
}

function splitGraphemes(value) {
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    return Array.from(
      new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(value),
      segment => segment.segment
    );
  }

  return Array.from(value);
}
