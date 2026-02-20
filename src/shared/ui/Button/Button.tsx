import type React from "react"
import { classNames } from "@/shared/helpers"
import styles from "./Button.module.css"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  mode?: "primary" | "secondary"
  children: React.ReactNode
  onClick?: React.ReactEventHandler
  size?: "md" | "lg"
}

export function Button(props: ButtonProps) {
  const { className, children, mode = "primary", onClick, size = "lg", ...restProps } = props

  return (
    <button
      type="button"
      className={classNames(styles.root, styles[`root__${mode}`], styles[`root__${size}`], className)}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}
