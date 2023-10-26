import React, { FC } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

interface INavLinkProps {
  to: string,
  children: React.ReactFragment | null,
  onClick?: () => void
}

const NavLink: FC<INavLinkProps> = ({ children, to, onClick }) => {
  const router = useRouter()
  const style = {
    transform: router.asPath === to ? "scale(1.1)" : "none",
    fontWeight: router.asPath === to ? "bold" : "normal"
  }

  return (
    <Link
      href={to}
      onClick={() => {
        onClick && onClick()
      }}
      style={style}
    >
      {children}
    </Link>
  )
}

export default NavLink
