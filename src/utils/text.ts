export function parseCategoryName(category: string): string {
  return category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
