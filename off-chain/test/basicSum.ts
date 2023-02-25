import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicSum() {
  return buildTx(data.basicSum, "basic_sum")
}

Deno.test("basicSum", async () => await wrap(basicSum))