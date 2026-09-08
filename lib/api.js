export async function fetchAPI(endpoint) {
  const url = `${process.env.NEXT_PUBLIC_WP_API}${endpoint}`;

  const res = await fetch(url, {
    next: {
      revalidate: 3600,
      tags: ["wordpress-api"],
    },
  });

  if (!res.ok) {
    const error = await res.text();

    console.error(`WordPress API Error ${res.status}:`, error);

    throw new Error(`Failed to fetch API: ${res.status}`);
  }

  return res.json();
}