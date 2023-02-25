import { Assets, fromText, TxSigned } from "../deps.ts";

import { lucid } from "../setupLucid.ts";

import { getMint, Mint } from "../script.ts";

function mintValue(pid: string, tokenName : string) {
  const unit = pid + fromText(tokenName);
  console.log("unit : ", unit);
  const token: Assets = {};
  token[unit] = 1n;
  return token;
}

export async function buildTx(data: any, mintName : string): Promise<TxSigned> {
  const mint : Mint = getMint("basic", mintName)
  const utx = lucid
    .newTx()
    .mintAssets(mintValue(mint.pid, mintName), data)
    .attachMintingPolicy(mint.script);
  return await utx.complete().then((ctx) => ctx.sign().complete());
}

async function submit(tx: TxSigned) {
  const h = await tx.submit();
  await lucid.awaitTx(h);
  return h;
}

export async function wrap(fun: Function) {
  const txHash = (await submit(await fun()));
  console.log(`https://preprod.cexplorer.io/tx/${txHash}`)
}
