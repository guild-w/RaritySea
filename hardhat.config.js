require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-web3")
require("@nomiclabs/hardhat-truffle5")
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades'); // upgrade
require("hardhat-deploy")
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: '註記詞',
        initialIndex: 0,
        accountsBalance: '800000000000000000000000000000000',
      },
      chainId: 50
    },
    ftmMainnet: {
      url: "https://rpcapi.fantom.network/",
      accounts: {
        mnemonic: '註記詞',
        initialIndex: 0,
      },
      chainId: 250
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "私鑰"
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ]
  }
};
