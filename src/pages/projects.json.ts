import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { projects } from '../data/projects';

// GitHub 프로필 등 바깥에서 이 사이트의 프로젝트·글 목록을 읽어 가도록 공개 데이터로 낸다.
// 주소는 모두 절대 주소로 낸다(사이트 기준 주소 + 경로).
export async function GET(context: APIContext) {
  const root = String(context.site ?? 'https://neisii.github.io').replace(/\/+$/, '');
  const abs = (path?: string) => (path ? (/^https?:/.test(path) ? path : `${root}${path}`) : null);
  const sortedProjects = [...projects].sort((a, b) => b.date.localeCompare(a.date));
  const posts = (await getCollection('posts'))
    .filter((post) => post.data.kind === 'article')
    .sort((a, b) => b.data.date.localeCompare(a.data.date));
  const data = {
    site: `${root}/`,
    projects: sortedProjects.map((p) => ({
      slug: p.slug, name: p.name, title: p.title, summary: p.summary, date: p.date, period: p.period,
      type: p.type, color: p.color, mark: p.mark, image: abs(p.image), imageMode: p.imageMode ?? null,
      url: `${root}/projects/${p.slug}/`, links: p.links,
    })),
    posts: posts.map((post) => ({
      title: post.data.title, date: post.data.date, description: post.data.description ?? '',
      tags: post.data.tags, url: `${root}/posts/${post.slug}/`,
    })),
  };
  return new Response(JSON.stringify(data, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
