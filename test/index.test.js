import test from "node:test";
import assert from "node:assert/strict";
import { truncateWords, truncateCharacters } from "../src/index.js";
test("truncates words", () => assert.equal(truncateWords("one two three", 2), "one two…"));
test("does not alter short text", () => assert.equal(truncateWords("one two", 2), "one two"));
test("supports custom ellipsis", () => assert.equal(truncateCharacters("abcdef", 3, {ellipsis:"..."}), "abc..."));
test("handles Unicode characters", () => assert.equal(truncateCharacters("👍🏽abc", 2), "👍🏽a…"));
test("rejects invalid limits", () => assert.throws(() => truncateWords("x", -1), RangeError));
