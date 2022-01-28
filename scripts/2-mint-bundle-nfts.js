import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
    const bundleModuleAddress = "0x437855d18EaaeB54d6C74B67B748e0a04749E387";
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log("Creating NFT batch...");

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: "Tesla Model 3",
                description: "A pretty fancy car!",
                image: readFileSync("./assets/tesla-model3.jpeg"),
                properties: {
                    rarity: "a bit rare",
                    fanciness: 7,
                },
            },
            supply: 65,
        },
        {
            metadata: {
                name: "Porsche 911",
                description: "A pretty fancy car!",
                image: readFileSync("./assets/porsche-911.jpeg"),
                properties: {
                    rarity: "a bit rare",
                    fanciness: 7,
                },
            },
            supply: 65,
        },
        {
            metadata: {
                name: "Mclaren P1",
                description: "A super fancy car!",
                image: readFileSync("./assets/mclaren-p1.jpeg"),
                properties: {
                    rarity: "super rare!",
                    fanciness: 10,
                },
            },
            supply: 20,
        },
    ]);

    console.log("NFTs created!");
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}
