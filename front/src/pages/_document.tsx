import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  const AppHead = Head as any
  const AppNextScript = NextScript as any

  return (
    <Html lang="en">
      <AppHead>
        <link rel="icon" href="/favicon.ico" />
      </AppHead>
      <body>
        <Main />
        <AppNextScript />
        <script> </script>
      </body>
    </Html>
  )
}
