import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicInt() {
  return buildTx(data.basicInt, "basic_int")
}

Deno.test("basicInt", async () => await wrap(basicInt))

