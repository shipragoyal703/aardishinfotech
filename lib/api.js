export async function fetchAPI(endpoint) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}${endpoint}`);

  if (!res.ok) {
    throw new Error('Failed to fetch API');
  }

  return res.json();
}
