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
// WETH contract deployed to: 0xC25d83872376c8b0EdA5f4C7eD5D59c05C1C2887