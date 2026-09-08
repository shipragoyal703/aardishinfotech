export async function fetchAPI(endpoint) {
  const url = `${process.env.NEXT_PUBLIC_WP_API}${endpoint}`;

  console.log("Fetching:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", res.status);

  if (!res.ok) {
    const error = await res.text();
    console.error("Response:", error);
    throw new Error(`Failed to fetch API: ${res.status}`);
  }

  return res.json();
}