// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const HBG = await ethers.getContractFactory("HBG");
  const hBG = await HBG.deploy(process.env.MY_ADD);
  await hBG.deployed();

  const Hero = await ethers.getContractFactory("Hero");
  const hero = await Hero.deploy(process.env.MY_ADD, hBG.address);
  await hero.deployed();
  
  console.log(hBG.address, hero.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
