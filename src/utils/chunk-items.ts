/** Splits items into fixed-size chunks, optionally reversing chunk order without reordering items. */
export function chunkItems<T>(
  items: readonly T[],
  size: number,
  reverseOrder = false,
): T[][] {
  if (size <= 0) {
    return [Array.from(items)];
  }
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return reverseOrder ? rows.reverse() : rows;
}
