import { Button, Container, render, Textbox, VerticalSpace, Text } from "@create-figma-plugin/ui"
import { emit, on } from "@create-figma-plugin/utilities"
import { h } from "preact"
import { useCallback, useEffect, useState } from "preact/hooks"
// import Editor from "react-simple-code-editor"

import styles from "./styles.css"
import { ReqSerializeJsonHandler, ResSerializeJsonHandler } from "./types"

function Plugin() {
  const [filename, setFilename] = useState(`export.plugin.json`)
  const handleDownloadJson = useCallback(
    function () {
      on<ResSerializeJsonHandler>("RES_SERIALIZE_JSON", (json: string) =>
        downloadFile(JSON.stringify(json), filename)
      )
      emit<ReqSerializeJsonHandler>("REQ_SERIALIZE_JSON")
    },
    [filename]
  )

  return (
    <Container space='medium'>
      <VerticalSpace space='small' />
      <div class={styles.container}>
        <Text style={{ marginBottom: 8 }}>Filename</Text>
        <Textbox
          onInput={(e) => setFilename(e.currentTarget.value)}
          placeholder='filename'
          value={filename}
          variant='border'
        />
      </div>
      <VerticalSpace space='large' />
      <Button fullWidth onClick={handleDownloadJson}>
        Download JSON
      </Button>
      <VerticalSpace space='small' />
    </Container>
  )
}

function downloadFile(content: string, filename: string) {
  const blob = new Blob([content], { type: "application/json" })
  const blobURL = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = blobURL
  link.download = filename || "export.plugin.json"
  link.click()
}

export default render(Plugin)
