import { PAGES } from "@/shared/consts"
import { Logo } from "@/shared/ui/Logo"
import Link from "next/link"

export function Footer() {
  const linkClassName = "hover:text-[#1A1A1A] transition-colors"

  return (
    <footer className="py-8 px-6 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#666]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 accent-bg rounded flex items-center justify-center">
            <Logo className="w-4 h-4 text-white" />
          </div>
          <span>Next Saas Template</span>
        </div>
        <div className="flex gap-6">
          <Link href={PAGES.blog} className={linkClassName}>
            Blog
          </Link>
        </div>
      </div>
    </footer>
  )
}
