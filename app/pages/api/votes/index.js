import { web3 } from "@project-serum/anchor"

const voteAccount = web3.Keypair.generate()

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ voteAccount })
  }
}
