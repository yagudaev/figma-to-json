import { emit, loadFontsAsync, once, showUI } from "@create-figma-plugin/utilities"
import { nodeToObject } from "@figma-plugin/helpers"
import { ReqSerializeJsonHandler, ResSerializeJsonHandler } from "./types"

export default function () {
  once<ReqSerializeJsonHandler>("REQ_SERIALIZE_JSON", async function () {
    const json = nodeToObject(figma.root)
    console.log("Plugin JSON", json)
    emit<ResSerializeJsonHandler>("RES_SERIALIZE_JSON", json)
  })
  showUI({ height: 120, width: 320 })
}
