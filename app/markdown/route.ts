
export async function GET() {
  const markdown = `# Aardish Infotech

Aardish Infotech is a digital technology company.

## Services

- Website Design
- Website Development
- WordPress Development
- Shopify Development
- UI/UX Design
- Mobile App Development
- SEO Services

## Important Pages

- [About](https://aardishinfotech.in/about)
- [Services](https://aardishinfotech.in/services)
- [Contact](https://aardishinfotech.in/contact)
- [Blog](https://aardishinfotech.in/blogs)
- [Privacy Policy](https://aardishinfotech.in/privacy-policy)
- [Terms](https://aardishinfotech.in/terms-conditions)

## Contact

Website: https://aardishinfotech.in/
Email: info@aardishinfotech.in
`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Vary": "Accept"
    }
  });
}
