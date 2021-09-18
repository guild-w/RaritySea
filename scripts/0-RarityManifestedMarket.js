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

  const MarketFact = await ethers.getContractFactory("RarityManifestedMarket");
  const Market = await upgrades.deployProxy(MarketFact, ["0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb", 1, 5])
  await Market.deployed();
  console.log("RarityCraftingMarket deployed to:", Market.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });