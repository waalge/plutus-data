import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicOption() {
  return buildTx(data.basicOption, "basic_option")
}

Deno.test("basicOption", async () => await wrap(basicOption))