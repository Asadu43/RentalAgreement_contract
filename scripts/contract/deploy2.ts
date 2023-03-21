import { Contract, Signer } from "ethers";
import { ethers, upgrades } from "hardhat";
import "@nomiclabs/hardhat-ethers";

async function main() {
    const signers: Signer[] = await ethers.getSigners()
    let tokenInstance: Contract;
    const Asad2 = await ethers.getContractFactory("Asad2");
    const box = await upgrades.upgradeProxy("0xA2f6f2a46c97A92eC0ed58e261AA324A28B77003", Asad2);
    console.log("Box upgraded");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    })