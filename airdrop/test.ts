import { Keypair } from "@solana/web3.js";

// Replace 'privateKeyUintArray' with your actual Uint8Array containing the private key
const privateKeyUintArray = new Uint8Array();

// Create a keypair from the private key Uint8Array
const keypair = Keypair.fromSecretKey(privateKeyUintArray);

// Get the public key associated with the keypair
const publicKey = keypair.publicKey;

// Get the private key in base64 encoded format
const privateKeyBase64 = Buffer.from(privateKeyUintArray).toString("base64");

console.log("Public key:", publicKey.toBase58());
console.log("Private key (base64):", privateKeyBase64);
