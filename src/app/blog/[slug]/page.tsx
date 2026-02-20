import { notFound } from "next/navigation"
import { getAllArticles, getArticleBySlug } from "@/widgets/article-list"
import { BreadCrumbs } from "@/shared/ui/BreadCrumbs"
import { PAGES } from "@/shared/consts"
import { ArticleSchema } from "./article-schema"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — NextJS Sass Template`, // TODO Change
    description: article.description,
    keywords: [...(article.keywords?.split(",") ?? []), "your keywords here"], // TODO Change
    authors: [{ name: "John Doe" }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      url: `https://example.com/blog/${slug}`, // TODO Change
      images: article.coverImage ? [{ url: article.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.coverImage ? [article.coverImage] : [],
    },
    alternates: {
      canonical: `https://example.com/blog/${slug}`, // TODO Change
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <ArticleSchema article={article} />
      <main className="min-h-screen mx-auto max-w-4xl px-4 py-32 bg-[#FAFAFA] text-[#1A1A1A]">
        <BreadCrumbs
          className="mb-8"
          items={[{ label: "Home", href: PAGES.home }, { label: "Blog", href: PAGES.blog }, { label: article.title }]}
        />
        <time className="mt-4 block text-sm text-(--color-muted)">{article.date}</time>
        <h1 className="mt-2 text-4xl font-bold">{article.title}</h1>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML generated from our own .md files at build time */}
        <div className="prose mt-8" dangerouslySetInnerHTML={{ __html: article.content }} />
      </main>
    </>
  )
}
