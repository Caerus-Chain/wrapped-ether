const { expect } = require("chai");

describe("WETH contract", function () {
  let weth;
  let owner, addr1, addr2, addrs;

  beforeEach(async function () {
    const WETH = await ethers.getContractFactory("WETH");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    weth = await WETH.deploy();
  });

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await weth.balanceOf(owner.address);
      expect(await weth.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should deposit correctly", async function () {
      await weth.deposit({ value: ethers.utils.parseEther("1.0") });
      expect(await weth.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("1.0"));
    });

    it("Should withdraw correctly", async function () {
      await weth.deposit({ value: ethers.utils.parseEther("1.0") });
      await weth.withdraw(ethers.utils.parseEther("1.0"));
      expect(await weth.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("0.0"));
    });
  });
});
