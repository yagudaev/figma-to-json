import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Text } from "@mantine/core"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Text size='xl'>Welcome to Mantine</Text>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
