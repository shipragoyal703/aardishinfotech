export async function getMenu(menuId = 4) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/wp-api-menus/v2/menus/${menuId}`
  );

  if (!res.ok) throw new Error("Failed to fetch menu");

  return res.json();
}
