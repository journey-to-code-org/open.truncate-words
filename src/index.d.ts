export interface TruncateOptions { ellipsis?: string; trim?: boolean; }
export function truncateWords(text: string, maxWords: number, options?: TruncateOptions): string;
export function truncateCharacters(text: string, maxCharacters: number, options?: TruncateOptions): string;
