import News from "@/component/News/News";
import { getPayloadClient } from "@/lib/payloadClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Kits For Africa",
  description:
    "Stay updated with the latest news, stories, and impact reports from Kits For Africa. Read about our recent kit distributions, global partnerships, and inspiring stories from the field.",
  openGraph: {
    title: "Kits For Africa News | Latest Impact Stories & Announcements",
    description:
      "Follow our journey across the continent. Catch up on the latest press releases, success stories, and media highlights from our football equipment distributions.",
    url: "https://www.kitsforafrica.org/news",
  },
};

export const revalidate = 60;

export default async function page() {
  const payload = await getPayloadClient();

  const { docs: news } = await payload.find({
    collection: "news" as any,
    // where: { status: { equals: "published" } },
    sort: "-publishedDate",
    limit:100,
    depth:2
  });

  if (!news || news.length === 0) {
    return <div className="py-20 text-center">No news yet. Stay tuned!</div>;
  }
  return <News news={news} />;
}

