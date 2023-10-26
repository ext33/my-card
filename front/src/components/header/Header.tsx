import { FC, useEffect, useState } from "react"

import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

import LangSelector from "@/components/languageSelector/LangSelector"
import NavLink from "@/components/link/Link"

const Header: FC = () => {
  const { t } = useTranslation("common")

  const [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [ isOpen ])

  const variantsNav = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const renderLinks = () => (
    <>
      <div className="header__nav-item">
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
        >
          {t("homePageTitleNav")}
        </NavLink>
      </div>

      <div className="header__nav-item">
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
        >
          {t("aboutPageTitleNav")}
        </NavLink>
      </div>

      <div className="header__nav-item">
        <NavLink
          to="/work"
          onClick={() => setIsOpen(false)}
        >
          {t("workPageTitleNav")}
        </NavLink>
      </div>

      <LangSelector className="header__nav-item" />
    </>
  )

  return (
    <>
      <div className="header__container">
        {renderLinks()}
      </div>

      <div className="header_container-mobile">

        <div onClick={() => setIsOpen(open => !open)} className="header__nav-btn">
          <div className="header__nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
            </svg>
          </div>
        </div>

        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variantsNav}
          initial={false}
          className="header__links-mobile"
        >
          <div onClick={() => setIsOpen(open => !open)} className="header__nav-btn" style={{ position: "absolute", top: 0, left: 0, padding: 10 }}>
            <div className="header__nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
              </svg>
            </div>
          </div>

          <h1>e x t 3 3</h1>
          {renderLinks()}
        </motion.nav>

      </div>
    </>
  )
}

export default Header
