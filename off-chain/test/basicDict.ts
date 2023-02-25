import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicDict() {
  return buildTx(data.basicDict, "basic_dict")
}

Deno.test("basicDict", async () => await wrap(basicDict))