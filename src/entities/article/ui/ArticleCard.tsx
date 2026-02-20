import Link from "next/link"
import type { Article } from "../model"
import { PAGES } from "@/shared/consts"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`${PAGES.blog}/${article.slug}`} className="block group">
      <article className="card p-6 transition-transform group-hover:-translate-y-1 border border-[#E5E5E5] rounded-xl">
        {article.coverImage ? (
          <picture>
            <img
              src={article.coverImage}
              alt={article.title}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </picture>
        ) : (
          <div className="w-full h-48 object-cover rounded-lg mb-4 bg-blue-100"></div>
        )}
        <time className="text-sm text-(--color-muted)">{article.date}</time>
        <h3 className="mt-2 text-xl font-semibold">{article.title}</h3>
        <p className="mt-2 text-(--color-muted)">{article.description}</p>
      </article>
    </Link>
  )
}
