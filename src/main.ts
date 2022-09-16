import { loadFontsAsync, once, showUI } from "@create-figma-plugin/utilities"
import { nodeToObject } from "@figma-plugin/helpers"
import { ReqSerializeJsonHandler } from "./types"

export default function () {
  once<ReqSerializeJsonHandler>("REQ_SERIALIZE_JSON", async function () {
    const json = nodeToObject(figma.root)
    console.log("Plugin JSON", json)
  })
  showUI({ height: 120, width: 320 })
}
