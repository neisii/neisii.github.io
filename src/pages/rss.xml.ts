import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).filter((post) => post.data.kind === 'article').sort((a, b) => b.data.date.localeCompare(a.data.date));
  return rss({
    title: 'Astroxx · 글과 작업 노트',
    description: '만든 것과 기록한 생각을 모아두는 개인 아카이브.',
    site: context.site ?? 'https://neisii.github.io/astroxx',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: new Date(post.data.date),
      link: `${context.site ?? 'https://neisii.github.io/astroxx'}/posts/${post.slug}/`,
    })),
  });
}
