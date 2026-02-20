"use client"

import { PAGES } from "@/shared/consts"
import { Button } from "@/shared/ui/Button"
import { Logo } from "@/shared/ui/Logo"
import { RocketIcon } from "lucide-react"
import Link from "next/link"

export function Header() {
  const buttonClickHandler = () => console.log("click")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={PAGES.home} className="flex items-center gap-2 text-black">
          <div className="w-12 h-12 accent-bg rounded-lg flex items-center justify-center">
            <Logo className="text-black" />
          </div>
          <span className="font-semibold">Saas Template</span>
        </Link>
        <Button onClick={buttonClickHandler} className="text-sm py-2.5 px-5">
          Get Started
          <RocketIcon className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
