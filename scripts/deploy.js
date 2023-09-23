const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const WETH = await hre.ethers.getContractFactory("WETH");
  const weth = await WETH.deploy();

  await weth.deployed();

  console.log("WETH contract deployed to:", weth.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// Deploying contracts with the account: 0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea
// WETH contract deployed to: 0x5418ed830A6756031F6CF96fA302D5a95D1dBbcb