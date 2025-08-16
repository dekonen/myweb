export function generateSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
