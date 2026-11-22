import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// GitHub Pages 주소는 저장소 이름에서 정한다. GitHub Actions는 GITHUB_REPOSITORY("소유자/저장소")를 알려 준다.
// 저장소 이름이 "<소유자>.github.io"면 사용자 사이트(루트 /), 아니면 프로젝트 사이트(/<저장소>/).
// 로컬 빌드처럼 값이 없으면 실제 저장소(neisii/neisii.github.io)로 본다 — 로컬과 배포 주소가 같아진다.
const [owner, repo] = (process.env.GITHUB_REPOSITORY || 'neisii/neisii.github.io').split('/');
const host = `${owner.toLowerCase()}.github.io`;
const isUserSite = repo.toLowerCase() === host;

export default defineConfig({
  output: 'static',
  base: isUserSite ? '/' : `/${repo}/`,
  site: isUserSite ? `https://${host}` : `https://${host}/${repo}`,
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      filter: (pageUrl) => !pageUrl.endsWith('/404/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        if (item.url.includes('/posts/')) item.priority = 0.8;
        return item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append', properties: { class: 'anchor' } }],
    ],
  },
});
