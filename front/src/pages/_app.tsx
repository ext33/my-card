import "nprogress/nprogress.css"
import "@/styles/root.scss"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { appWithTranslation } from "next-i18next"
import NProgress from "nprogress"
import { useEffect } from "react"

NProgress.configure({ showSpinner: false })

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const Page = Component as any

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleComplete = () => NProgress.done()

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  }, [router])

  return (
    <AnimatePresence
      initial={true}
      mode="wait"
      onExitComplete={() => typeof window !== "undefined" ? window.scrollTo(0, 0) : null}
    >
      <Page {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default appWithTranslation(App)
