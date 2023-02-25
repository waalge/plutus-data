import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicByteArray() {
  return buildTx(data.basicByteArray, "basic_byte_array")
}

Deno.test("basicByteArray", async () => await wrap(basicByteArray))