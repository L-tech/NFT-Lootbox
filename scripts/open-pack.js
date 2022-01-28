import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = "0xA224C3eEeA1790e7e44DD592cdd1a9dAF5A4aa88";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Opening the pack...");
    const opened = await packModule.open("0");
    console.log("Opened the pack!");
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}
