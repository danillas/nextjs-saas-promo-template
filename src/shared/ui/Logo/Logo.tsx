import type { SVGProps } from "@/shared/types"
import Icon from "./assets/next.svg"
import styles from "./Logo.module.css"

export function Logo(props: SVGProps) {
  return <Icon className={styles.root} {...props} />
}
