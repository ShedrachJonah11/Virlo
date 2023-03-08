/**
 * Replace `{name}` placeholders in a template string with values
 * from a map. Unknown placeholders are left as-is.
 *
 *   tmpl("Hi {name}", { name: "Alex" }) -> "Hi Alex"
 */
export function tmpl(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in values ? String(values[key as keyof typeof values]) : match;
  });
}
