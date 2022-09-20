import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { HeaderMenu } from "../components/HeaderMenu"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light"
        }}
      >
        <HeaderMenu
          links={[{ link: "https://github.com/yagudaev/figma-to-json", label: "Github" }]}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
