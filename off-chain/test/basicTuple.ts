import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicTuple() {
  return buildTx(data.basicTuple, "basic_tuple")
}

Deno.test("basicTuple", async () => await wrap(basicTuple))