import rss from '@astrojs/rss';
import { getSinglePage } from "@/lib/contentParser.astro";
import { sortByDate } from "@/lib/utils/sortFunctions";
import config from "@/config/config.json";

export async function GET(context) {
  const posts = await getSinglePage("posts");
  const sortedPosts = sortByDate(posts);

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt || '',
      link: `/entry/${post.id}/`,
      categories: post.data.categories || [],
    })),
    customData: `<language>ja</language>`,
  });
}
