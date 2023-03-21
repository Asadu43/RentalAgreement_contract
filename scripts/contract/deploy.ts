import { Contract, Signer } from "ethers";
import { ethers, upgrades } from "hardhat";
import "@nomiclabs/hardhat-ethers";

async function main() {
    const signers: Signer[] = await ethers.getSigners()
    let tokenInstance: Contract;
    const Asad = await ethers.getContractFactory("Asad", signers[0]);
    const box = await upgrades.deployProxy(Asad);
    await box.deployed();
    console.log("Box deployed to:", box.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    })