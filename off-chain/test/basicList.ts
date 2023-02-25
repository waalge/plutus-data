import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicList() {
  return buildTx(data.basicList, "basic_list")
}

Deno.test("basicList", async () => await wrap(basicList))