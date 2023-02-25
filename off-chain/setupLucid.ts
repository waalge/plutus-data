import * as path from "https://deno.land/std@0.173.0/path/mod.ts";

import { Blockfrost, Lucid } from "./deps.ts";

async function getLine(fp: string | URL): Promise<string> {
  return await Deno.readTextFile(fp).then((x) => x.trim());
}

const NETWORK = "Preprod";
const STORE = "./secrets/";
const BLOCKFROST_API_KEY = await getLine(path.join(STORE, "blockfrost-preprod.txt"));

export const lucid = await Lucid.new(
  new Blockfrost(
    "https://cardano-preprod.blockfrost.io/api/v0",
    BLOCKFROST_API_KEY,
  ),
  NETWORK,
);

lucid.selectWalletFromPrivateKey(
  await getLine(path.join(STORE, "owner" + ".sk")),
);

