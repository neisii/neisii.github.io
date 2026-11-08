import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  output: 'static',
  base: '/astroxx/',
  site: 'https://neisii.github.io/astroxx',
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
