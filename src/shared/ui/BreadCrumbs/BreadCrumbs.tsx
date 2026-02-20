import Link from "next/link"
import { classNames } from "@/shared/helpers"

interface BreadCrumbItem {
  label: string
  href?: string
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[]
  className?: string
}

export function BreadCrumbs({ items, className }: BreadCrumbsProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className={classNames("text-sm text-(--color-muted)", className)}>
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-(--color-foreground) transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              ...(item.href && { item: `https://example.com${item.href}` }), // TODO Change
            })),
          }),
        }}
      />
    </>
  )
}
