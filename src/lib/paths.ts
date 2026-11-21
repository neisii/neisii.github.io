/** GitHub Pages 주소 앞부분. astro.config.mjs의 base를 Astro가 BASE_URL로 넘겨 준다(끝에 / 보장). */
const base = import.meta.env.BASE_URL;
export const siteBase = base.endsWith('/') ? base : `${base}/`;

export function sitePath(path: string): string {
  return `${siteBase}${path.replace(/^\//, '')}`;
}
