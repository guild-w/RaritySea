const { ethers, upgrades } = require("hardhat");

let accounts, deployer

describe('#InitMarket', () => {

    it('deploy contracts and set variables', async () => {

        accounts = await hre.ethers.getSigners();
        deployer = accounts[0];

        const MarketFact = await ethers.getContractFactory("RarityCraftingMarket");
        const Market = await upgrades.deployProxy(MarketFact, ["0xf41270836dF4Db1D28F7fd0935270e3A603e78cC", 1, 5])
        await Market.deployed();
        console.log("RarityCraftingMarket deployed to:", Market.address);
    })
})