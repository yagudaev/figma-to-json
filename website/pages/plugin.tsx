import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Anchor, Button, Center, Container, Grid, Group, NavLink, Text, Title } from "@mantine/core"
import { FileUpload } from "../components/FileUpload"
import dynamic from "next/dynamic"
import { useState } from "react"
import { figToJson } from "../lib/fig2json"
import { NextLink } from "@mantine/next"
import LocalVideo from "../components/LocalVideo"

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false
})

const Home: NextPage = () => {
  const [json, setJson] = useState<object | null>(null)
  return (
    <Container>
      <Head>
        <title>Figma to JSON - Plugin</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title order={1} align={"center"} mb={18}>
        Plugin
      </Title>
      <Text align={"center"} mb={8}>
        Download a plugin for Figma to convert your designs to JSON
      </Text>
      <Center mb={12}>
        <Group align='center'>
          <Text>Version 0.1.0</Text>
          <Button
            component='a'
            href='https://github.com/yagudaev/figma-to-json/releases/download/v0.1.0/figma-to-json-v0.1.0.zip'
            download
          >
            Download
          </Button>
        </Group>
      </Center>
      <Center>
        <LocalVideo width={1024} src={"/assets/videos/figma-to-json-plugin.mp4"} />
      </Center>
    </Container>
  )
}

export default Home
