import { buildTx, wrap } from "./common.ts";
import * as data from "../data.ts";

function basicEnum() {
  return buildTx(data.basicEnum, "basic_enum")
}

Deno.test("basicEnum", async () => await wrap(basicEnum))