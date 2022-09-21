import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Container, Grid, Text, Title, useMantineColorScheme } from "@mantine/core"
import { FileUpload } from "../components/FileUpload"
import dynamic from "next/dynamic"
import { useState } from "react"
import { figToJson } from "../lib/fig2json"

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false
})

const Home: NextPage = () => {
  const [json, setJson] = useState<object | null>(null)
  const { colorScheme } = useMantineColorScheme()

  return (
    <Container>
      <Head>
        <title>Figma to JSON - File</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title order={1} align={"center"} mb={18}>
        File
      </Title>
      <Text align={"center"} mb={18}>
        Upload your Figma file and get JSON representation of it
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <FileUpload
            onDrop={async (files) => {
              const file = files[0]
              const buffer = await file.arrayBuffer()
              const json = figToJson(buffer)
              setJson(json)
            }}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          {json && (
            <ReactJson
              src={json}
              collapsed={true}
              theme={colorScheme === "dark" ? "twilight" : "shapeshifter:inverted"}
              displayDataTypes={false}
            />
          )}
        </Grid.Col>
      </Grid>

      <Text size={"sm"} align={"left"} mt={18}>
        Note: The file api is considered internal to figma, the REST and Plugin API is designed for
        public usage.
      </Text>
      <Text size={"sm"} align={"left"} mt={0}>
        However, it is useful for reading/writing figma files for plugin authors, design tool
        authors and for design automation.
      </Text>
    </Container>
  )
}

export default Home
