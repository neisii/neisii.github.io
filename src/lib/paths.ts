/** GitHub Pages deployment prefix configured in astro.config.mjs. */
export const siteBase = '/astroxx/';

export function sitePath(path: string): string {
  return `${siteBase}${path.replace(/^\//, '')}`;
}
