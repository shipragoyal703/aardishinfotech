export async function getMenu(menuId = 4) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/menus/v1/menus/${menuId}`,
    { cache: "no-store" } // optional for App Router
  );

  if (!res.ok) throw new Error("Failed to fetch menu");

  return res.json();
}