import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
    const bundleModuleAddress = "0x437855d18EaaeB54d6C74B67B748e0a04749E387";
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = "0xA224C3eEeA1790e7e44DD592cdd1a9dAF5A4aa88";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Getting all NFTs from bundle...");
    const nftsInBundle = await bundleModule.getAll();

    console.log("NFTs in bundle:");
    console.log(nftsInBundle);

    console.log("Creating a pack containing the NFTs from bundle...");
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: "Fancy Cars Pack!",
            image: readFileSync("./assets/fancy-cars.png"),
        },
        assets: nftsInBundle.map((nft) => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });

    console.log("Pack created!");
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}
