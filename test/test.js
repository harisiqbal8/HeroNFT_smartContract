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
    hBG = await HBG.deploy(owner.address);
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
  it("owner of token Id : ", async () =>{
    expect(await hero.ownerOf(1)).to.eq(a1.address);
  });
  it("set Price : ", async ()=>{
    await hero.connect(owner).SetPrice(1,2,3,4);
  });
  it("send Tokens to buyers:", async ()=>{
    await hBG.connect(owner).transfer(a1.address, 10000000);
    await hBG.connect(a1).approve(hero.address , 10000000);
    await hBG.connect(owner).transfer(a2.address, 10000000);
    await hBG.connect(a2).approve(hero.address , 10000000);
    await hBG.connect(owner).transfer(a3.address, 10000000);
    await hBG.connect(a3).approve(hero.address , 10000000);
    await hBG.connect(owner).transfer(a4.address, 10000000);
    await hBG.connect(a4).approve(hero.address , 10000000);
    await hBG.connect(owner).transfer(a5.address, 10000000);
    await hBG.connect(a5).approve(hero.address , 10000000);
    const bal = await hBG.balanceOf(a1.address);
    expect(bal).to.eq(10000000)
});
  it("buy Boxes :",  async()=>{
    await hero.connect(a1).buyBox(a1.address, 1, 1);
    await hero.connect(a2).buyBox(a1.address, 2, 2);
    await hero.connect(a3).buyBox(a1.address, 3, 3);
    await hero.connect(a2).buyBox(a1.address, 4, 4);
  });
  it("token URI :", async ()=>{
    await hero.setBaseURI("hello ");
    const check = await hero.tokenURI(1);
    console.log(check);
  });
  
});