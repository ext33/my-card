import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import { getCookie, setCookie } from "@/utils/cookies"

type TProps = {
    className?: string
}

const LangSelector: FC<TProps> = ({ className }) => {

    const { i18n } = useTranslation()
    const router = useRouter()
    const [ appLocale, setAppLocale ] = useState("en")

    useEffect(() => {
        const locale = getCookie("NEXT_LOCALE")
        if (locale) {
            setAppLocale(locale)
        }
    }, [])

    const changeLanguageHandler = () => {
        if (appLocale === "ru") {
            i18n.changeLanguage("en")
            onToggleLanguageClick("en")
            setAppLocale("en")
            setCookie("NEXT_LOCALE", "en")
        } else {
            i18n.changeLanguage("ru")
            onToggleLanguageClick("ru")
            setAppLocale("ru")
            setCookie("NEXT_LOCALE", "ru")
        }
    }

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }


    return (
        <div className={className ? className : ""}>
            <div className="language-selector" onClick={changeLanguageHandler}>
                {appLocale?.toUpperCase()}
            </div>
        </div>
    )
}

export default LangSelector
