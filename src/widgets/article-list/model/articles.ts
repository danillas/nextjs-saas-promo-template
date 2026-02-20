import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import rehypeExternalLinks from "rehype-external-links"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"
import type { Article } from "@/entities/article"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

function getMdFiles(): string[] {
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))
}

function parseArticle(filename: string): Article {
  const filePath = path.join(CONTENT_DIR, filename)
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  const html = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(rehypeStringify)
    .processSync(content)
    .toString()

  return {
    slug: filename.replace(/\.md$/, ""),
    title: data.title,
    description: data.description,
    date: data.date,
    coverImage: data.coverImage,
    hidden: data.hidden,
    content: html,
    keywords: data.keywords,
  }
}

export function getAllArticles(): Article[] {
  return getMdFiles()
    .map(parseArticle)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getVisibleArticles(): Article[] {
  return getAllArticles().filter((article) => !article.hidden)
}

export function getArticleBySlug(slug: string): Article | undefined {
  const filename = `${slug}.md`
  const filePath = path.join(CONTENT_DIR, filename)

  if (!fs.existsSync(filePath)) return undefined

  return parseArticle(filename)
}
