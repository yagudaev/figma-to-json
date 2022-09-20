import { Button, Container, render, Textbox, VerticalSpace, Text } from "@create-figma-plugin/ui"
import { emit, on } from "@create-figma-plugin/utilities"
import { h } from "preact"
import { useCallback, useEffect, useState } from "preact/hooks"

import styles from "./styles.css"
import {
  ReqDocumentTitleHandler,
  ReqSerializeJsonHandler,
  ResDocumentTitleHandler,
  ResSerializeJsonHandler
} from "./types"

function Plugin() {
  const [documentTitle, setDocumentTitle] = useState<string | null>(null)
  const defaultFilename = `${documentTitle || `export`}.plugin.json`
  const [filenameOverride, setFilenameOverride] = useState<string | null>(null)
  const filename = filenameOverride || defaultFilename

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    on<ResDocumentTitleHandler>(`RES_DOCUMENT_TITLE`, (documentTitle) => {
      setDocumentTitle(documentTitle)
    })
    emit<ReqDocumentTitleHandler>(`REQ_DOCUMENT_TITLE`)
  }, [])

  const handleDownloadJson = useCallback(
    function () {
      setLoading(true)
      on<ResSerializeJsonHandler>("RES_SERIALIZE_JSON", (json: string) => {
        downloadFile(json, filename)
        setLoading(false)
      })
      // delay to allow the loading state to be set
      setTimeout(() => emit<ReqSerializeJsonHandler>("REQ_SERIALIZE_JSON"), 100)
    },
    [filename]
  )

  return (
    <Container space='medium'>
      <VerticalSpace space='small' />
      <div class={styles.container}>
        <Text style={{ marginBottom: 8 }}>Filename</Text>
        <Textbox
          onInput={(e) => setFilenameOverride(e.currentTarget.value)}
          placeholder='filename'
          value={filename}
          variant='border'
        />
      </div>
      <VerticalSpace space='large' />
      <Button fullWidth onClick={handleDownloadJson} disabled={loading}>
        {loading ? "Loading JSON..." : "Download JSON"}
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
