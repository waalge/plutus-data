import { fromHex, MintingPolicy, toHex } from "./deps.ts";

import plutusJson from "../on-chain/plutus.json" assert { type: "json" };

import * as cbor from "https://deno.land/x/cbor@v1.4.1/index.js";

export type Mint = {
  pid: string;
  script: MintingPolicy;
};

export function getMint(root: string, name: string): Mint {
  const title = `${root}.${name}`  
  const subject = plutusJson.validators.find((v) =>
    v.title === title
  )!;
  const script: MintingPolicy = {
    type: "PlutusV2",
    script: toHex(cbor.encode(fromHex(subject.compiledCode))),
  };
  const pid = subject.hash;
  return { pid, script };
}

console.log(plutusJson.validators.map(x => x.title))
