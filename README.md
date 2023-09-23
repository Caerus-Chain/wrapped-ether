# Wrapped Ether (WETH) Contract
`WETH` is an ERC20-compliant version of Ether (ETH), enabling more straightforward interactions with smart contracts and decentralized applications. This contract allows users to wrap their Ether into an ERC20-compatible token, facilitating activities like trading on decentralized exchanges.

### Methods:
1. **deposit()**
- Deposits Ether into the contract and mints an equivalent amount of WETH tokens to the sender's account.
- Payable function, the amount of Ether to deposit should be sent as the transaction value.
2. **withdraw(uint256 _amount)**
- Withdraws `_amount` WETH from the sender's account and sends back an equivalent amount of Ether.
The caller must have at least `_amount` WETH in their account.
- Burns the `_amount` of WETH tokens from the sender's account.

## Prerequisites
- **Node.js** v12+ LTS and npm (comes with Node)
- **Hardhat**

## Installation
Clone the repository:
```
git clone https://github.com/Caerus-Chain/wrapped-ether
```
Navigate to the project folder:
```
cd wrapped-ether
```
Install dependencies:
```
npm install
```

## Set Up Configuration:
1. Review the `.example.env` file.
2. Create a `.env` file based on the example and adjust the values as needed.

For Linux or macOS:
```
cp .example.env .env
```
For Windows:
```
copy .example.env .env
```

## Compilation
Compile the smart contracts using Hardhat:
```
npx hardhat compile
```

## Quick Start Guide
### 1. Testing
Run the following command to execute the contract tests. Make sure you've written the tests in your Hardhat project's `test` directory.
```
npx hardhat test
```

### 2. Deployment:
Run the following command to compile the contracts using the Solidity compiler and deploy the `WETH` to your Caerus network.
```
npx hardhat run scripts/deploy.js --network caerus
```

## Conclusion
If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!