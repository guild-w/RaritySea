require("@nomiclabs/hardhat-web3") // web3

let accounts, deployer

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  accounts = await ethers.getSigners();
  deployer = accounts[0];

  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MarketFact = await ethers.getContractFactory("RarityCraftingMarket");
  const Market = await upgrades.deployProxy(MarketFact, ["0xf41270836dF4Db1D28F7fd0935270e3A603e78cC", 1, 5])
  await Market.deployed();
  console.log("RarityCraftingMarket deployed to:", Market.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });