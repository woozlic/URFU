const hre = require("hardhat");

async function main() {
  const URFU = await hre.ethers.getContractFactory("URFU");
  const urfu = await URFU.deploy(100000000, 50);

  await urfu.deployed();

  console.log("URFU Token deployed: ", urfu.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
