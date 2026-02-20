import type { Article } from "@/entities/article"

export function ArticleSchema({ article }: { article: Article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Organization name", // TODO
      url: "https://example.com", // TODO
    },
    publisher: {
      "@type": "Organization",
      name: "Organization name",
      url: "https://example.com", // TODO
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://example.com/blog/${article.slug}`, // TODO
    },
    image: article.coverImage
      ? {
          "@type": "ImageObject",
          url: article.coverImage,
        }
      : undefined,
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
