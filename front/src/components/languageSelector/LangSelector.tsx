import { ChangeEvent, FC, useEffect } from "react"

import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import { getCookie, setCookie } from "@/utils/cookies"

type TProps = {
  className?: string
}

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
]

const LangSelector: FC<TProps> = ({ className }) => {

  const { i18n } = useTranslation()
  const router = useRouter()

  // Set English as default on first visit
  useEffect(() => {
    const savedLocale = getCookie("NEXT_LOCALE")
    if (!savedLocale) {
      setCookie("NEXT_LOCALE", "en")
      if (router.locale !== "en") {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: "en" })
      }
    }
  }, [])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    i18n.changeLanguage(newLocale)
    setCookie("NEXT_LOCALE", newLocale)
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <div className={className ?? ""}>
      <div className="language-selector">
        <select value={router.locale} onChange={handleChange}>
          {LOCALES.map(({ code, label }) => (
            <option key={code} value={code}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LangSelector
