/**
 * Merge class names, filtering out falsy values.
 * @param  {...(string|boolean|undefined|null)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// default export for convenience
export default { cn };
