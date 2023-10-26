import "@/styles/root.scss"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { appWithTranslation } from "next-i18next"

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const Page = Component as any

  return (
    <AnimatePresence
      exitBeforeEnter={true}
      initial={true}
      mode="wait"
      onExitComplete={() => typeof window !== "undefined" ? window.scrollTo(0, 0) : null}
    >
      <Page {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default appWithTranslation(App)
