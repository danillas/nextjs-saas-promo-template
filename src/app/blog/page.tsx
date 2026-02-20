import { BreadCrumbs } from "@/shared/ui/BreadCrumbs"
import { PAGES } from "@/shared/consts"

export const metadata = {
  title: "NextJS Sass Template | Blog", // TODO Change
  description: "Starter template for NextJS with TailwindCSS, Typescript, Biome", // TODO Change
  keywords: [],
  openGraph: {
    title: "Blog",
    description: "Some description", // TODO Change
    type: "website",
    url: "https://example.com/blog", // TODO Change
  },
}

// TODO Change
export default function BlogPage() {
  return (
    <main className="min-h-screen mx-auto max-w-4xl px-4 py-32 text-[#1A1A1A]">
      <BreadCrumbs items={[{ label: "Home", href: PAGES.home }, { label: "Blog" }]} />
      <h1 className="mt-4 text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-lg text-(--color-muted)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos</p>
      <div className="mt-12">{/* ArticlesList here */}</div>
    </main>
  )
}
