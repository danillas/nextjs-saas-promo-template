import { ArticleCard } from "@/entities/article"
import { getVisibleArticles } from "../model"

export function ArticleList() {
  const articles = getVisibleArticles()

  return (
    <section className="grid gap-6 md:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </section>
  )
}
