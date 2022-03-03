const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hero", function () {
  let 
  owner,a1,a2,
  a3,a4,a5,a6,
  a7,a8,a9,a10,
  a11,a12,a13,
  a14,a15,a16,
  a17,a18,hero, hBG;
  it("Deployment :", async function () {
    [owner,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19] = await ethers.getSigners();
    
    const HBG = await ethers.getContractFactory("HBG");
    hBG = await HBG.deploy();
    await hBG.deployed();

    const Hero = await ethers.getContractFactory("Hero");
    hero = await Hero.deploy(owner.address, hBG.address);
    await hero.deployed();
  });
  it("add new Hero : ", async () => {
    let arr = [a1.address,
      a2.address,a3.address,
      a4.address,a5.address,
      a6.address,a7.address,
      a8.address,a9.address,
      a10.address,a11.address,
      a12.address,a13.address,
      a14.address,a15.address,
      a16.address,a17.address,
      a18.address];
    await hero.connect(owner).addAddressToWhiteList(arr);
  });
  it("array tester : ", async () => {
    const [b1,b2,b3,b4,b5,b6,b7] = await hero.checker();
    expect(b1).to.eq(a1.address);
  });
  it("Mint Token for Whitelisted : ", async () => {
    await hero.endClaimHero();
    expect(await hero.balanceOf(a1.address)).to.eq(1);
  });
  it("Burn Token", async () =>{
    await hero.deleteNFT(1);
  });
});
