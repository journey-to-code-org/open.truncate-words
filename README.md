# open.truncate-words

Dependency-free helpers for truncating text by word or character count.

## Install

```bash
npm install @journey-to-code/open-truncate-words
```

## Usage

```js
truncateWords("one two three", 2); // "one two…"
truncateCharacters("abcdef", 3); // "abc…"
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
