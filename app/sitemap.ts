
import type { MetadataRoute } from "next";

const SITE_URL = "https://aardishinfotech.in";
const WP_API = "https://wordpress.aardishinfotech.in/wp-json/wp/v2";

interface WordPressItem {
  slug: string;
  modified: string;
}

async function fetchWordPressItems(
  endpoint: string
): Promise<WordPressItem[]> {
  try {
    const firstResponse = await fetch(
      `${endpoint}?per_page=100&page=1&_fields=slug,modified`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!firstResponse.ok) {
      console.error(
        `WordPress API error: ${endpoint}`,
        firstResponse.status
      );
      return [];
    }

    const totalPages = Number(
      firstResponse.headers.get("X-WP-TotalPages") || 1
    );

    const firstPage: WordPressItem[] = await firstResponse.json();

    if (totalPages <= 1) {
      return firstPage;
    }

    const remainingPages = await Promise.all(
      Array.from(
        { length: totalPages - 1 },
        (_, index) => index + 2
      ).map(async (page) => {
        const response = await fetch(
          `${endpoint}?per_page=100&page=${page}&_fields=slug,modified`,
          {
            next: { revalidate: 3600 },
          }
        );

        if (!response.ok) {
          console.error(`Failed to fetch page ${page}: ${endpoint}`);
          return [];
        }

        return (await response.json()) as WordPressItem[];
      })
    );

    return [...firstPage, ...remainingPages.flat()];
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/how-it-works",
    "/privacy-policy",
    "/terms-conditions",
    "/blogs",
    "/case-studies",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const [posts, caseStudies] = await Promise.all([
    fetchWordPressItems(`${WP_API}/posts`),
    fetchWordPressItems(`${WP_API}/case-studies`),
  ]);

  // Dynamic blog URLs
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blogs/${encodeURIComponent(post.slug)}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Dynamic case study URLs
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map(
    (study) => ({
      url: `${SITE_URL}/case-studies/${encodeURIComponent(study.slug)}`,
      lastModified: new Date(study.modified),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    ...staticEntries,
    ...blogEntries,
    ...caseStudyEntries,
  ];
}
