import { EventHandler } from "@create-figma-plugin/utilities"

export interface ReqSerializeJsonHandler extends EventHandler {
  name: "REQ_SERIALIZE_JSON"
  handler: () => void
}

export interface ResSerializeJsonHandler extends EventHandler {
  name: "RES_SERIALIZE_JSON"
  handler: (json: string) => void
}

export interface ReqDocumentTitleHandler extends EventHandler {
  name: "REQ_DOCUMENT_TITLE"
  handler: () => void
}

export interface ResDocumentTitleHandler extends EventHandler {
  name: "RES_DOCUMENT_TITLE"
  handler: (title: string) => void
}
