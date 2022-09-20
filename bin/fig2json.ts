import { compileSchema } from "kiwi-schema"
import { readFileSync, writeFileSync } from "fs"

const schema = compileSchema(readFileSync("bin/schema.kiwi", "utf8") as any)
const file = readFileSync("bin/test.fig", "binary")
const decoded = schema.decodeDocument(file)

console.log("decoded", decoded)
