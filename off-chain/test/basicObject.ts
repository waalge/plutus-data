import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicObject() {
  return buildTx(data.basicObject, "basic_object")
}

Deno.test("basicObject", async () => await wrap(basicObject))