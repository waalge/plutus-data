# Plutus Data 

> Test alignment between aiken and lucid data constructors. 

In writing a cardano validator in aiken, you define data types. 
To use these validators, you need to construct valid cbor that can be parsed into these data types. 

This repo attempts to systematically match aiken types with lucid code,
and check really works by sumbitting txs to preprod. 
The correspondence between aiken and lucid, at least in lucid `<= 0.8.9`, is not one-to-one. 

In later lucid versions, the `Data` api has changed. 

To test, we have each type be the redeemer of a minting policy, 
and to a simple match or operation in the minting policy to ensure its been parsed.
We then mint a token using the policy. 

TODO: Bump lucid version. 

WARNING: You'll need to setup `./secrets/` to use this repo. See below.

WARNING: at the time of writing `Dict` is not working. 


## Repo Organization  

Annotated tree output of this repo
```sample
$tree -a -L 1
.
├── .direnv               #    
├── .envrc                #     (direnv)
├── flake.lock            #      
├── flake.nix             #     (flake) 
├── .git                  #      
├── .gitignore            #     (git)  
├── .helix                # <-- helix config for deno and aiken                   
├── off-chain             # <-- lucid code here 
├── on-chain              # <-- Aiken code here
├── README.md             #     (you are here)
└── secrets               # <-- Blockfrost key and wallet key here (not tracked by git)
```

This repo is equipped with a flake, and contains an `.envrc` to use `direnv`.

Lucid data structures are at 
```
  ./off-chain/data.ts
```
Tests are in 
```
  ./off-chain/test/
```

Secrets expects to contain the following files. 
```sample
$tree secrets/
secrets/
├── blockfrost-preprod.txt
└── owner.sk
```
This is inspected by `./off-chain/setupLucid.ts`.
See there for more details. 

## Example commands 

Build validators 
```
aiken build on-chain
```

Run a test example
```
deno test --allow-read --allow-net off-chain/test/basicEnum.ts
```

