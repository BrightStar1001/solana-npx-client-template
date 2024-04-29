import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("GiYzLwUPf4VFwwvnSx5ZaqX7QbvaVJKBZ5bxXQu6nRmt");

const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/0Q08Z1y3AQokJzaXvrb6-yhidpBK1OUS", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);
console.log(balanceInLamports);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);