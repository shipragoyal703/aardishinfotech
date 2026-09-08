export async function getMenu(menuId = 4) {
  const url = `${process.env.NEXT_PUBLIC_WP_API}/menus/v1/menus/${menuId}`;

  console.log("Fetching:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", res.status);

  const text = await res.text();
  console.log("Response:", text);

  if (!res.ok) {
    throw new Error(`Menu API failed (${res.status})`);
  }

  return JSON.parse(text);
}