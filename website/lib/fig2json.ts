import { ByteBuffer, compileSchema, decodeBinarySchema, parseSchema } from "kiwi-schema"
import * as UZIP from "uzip"

const transfer8to32 = function (fileByte: Uint8Array, start: number, cache: Uint8Array) {
  cache[0] = fileByte[start + 0]
  cache[1] = fileByte[start + 1]
  cache[2] = fileByte[start + 2]
  cache[3] = fileByte[start + 3]
}

const int32 = new Int32Array(1)
const uint8 = new Uint8Array(int32.buffer)
const uint32 = new Uint32Array(int32.buffer)

const calcEnd = function (fileByte: Uint8Array, start: number) {
  transfer8to32(fileByte, start, uint8)
  return uint32[0]
}

export const figToJson = (fileBuffer: Buffer | ArrayBuffer): object => {
  let fileByte: Uint8Array = new Uint8Array(fileBuffer)

  // check bytes for figma comment "fig-kiwi" if doesn't exist, we first need to unzip the file
  if (
    fileByte[0] !== 102 ||
    fileByte[1] !== 105 ||
    fileByte[2] !== 103 ||
    fileByte[3] !== 45 ||
    fileByte[4] !== 107 ||
    fileByte[5] !== 105 ||
    fileByte[6] !== 119 ||
    fileByte[7] !== 105
  ) {
    const unzipped = UZIP.parse(fileBuffer)
    const file = unzipped["canvas.fig"]
    fileBuffer = file.buffer
    fileByte = new Uint8Array(fileBuffer)
  }

  // 8 bytes for figma comment "fig-kiwi"
  let start = 8

  // jumps 4 bytes? delimiter?
  calcEnd(fileByte, start)

  start += 4
  const result = []
  while (start < fileByte.length) {
    var end = calcEnd(fileByte, start)
    start += 4

    let byteTemp = fileByte.slice(start, start + end)

    // Decompress everything other than PNG bytes (they remain compressed and are handled by image-loaders)
    // WARN: it is possible this byte is not png, maybe I need to check a few more bytes?
    if (!(fileByte[start] == 137 && fileByte[start + 1] == 80)) {
      byteTemp = UZIP.inflateRaw(byteTemp)
    }

    result.push(byteTemp)
    start += end
  }

  const [schemaByte, dataByte] = result

  const schemaBB = new ByteBuffer(schemaByte)
  const schema = decodeBinarySchema(schemaBB)
  const dataBB = new ByteBuffer(dataByte)
  const schemaHelper = compileSchema(schema)

  return schemaHelper[`decodeMessage`](dataBB)
}
