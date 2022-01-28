import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
    console.error("Wallet private key missing")
    process.exit(1)
}

export const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.WALLET_PRIVATE_KEY,
        // We use Polygon Mumbai network
        ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
    ),
);

const appAddress = '0xf3944E9994a4BD993A4Ed86ac647380777c33B83'; 

export async function getApp() {
    const app = await sdk.getAppModule(appAddress);
    return app;
}