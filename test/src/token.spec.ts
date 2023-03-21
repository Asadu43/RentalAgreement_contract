import { expect } from "chai";
import { Contract, BigNumber, Signer } from "ethers";
import hre, { ethers } from "hardhat";

describe("Test Token", function () {

  let signers: Signer[];

  let rentalAgreement: Contract;



  before(async () => {
    signers = await ethers.getSigners();

    hre.tracer.nameTags[await signers[0].getAddress()] = "ADMIN";
    hre.tracer.nameTags[await signers[1].getAddress()] = "USER1";
    const RentalAgreement = await ethers.getContractFactory("RentalAgreement", signers[0]);

    rentalAgreement = await RentalAgreement.deploy();
    hre.tracer.nameTags[rentalAgreement.address] = "TEST-TOKEN";
  });


  it("should allow simple array replacement", async function () {
    console.log(rentalAgreement.functions);


    await rentalAgreement.connect(signers[1]).confirmAgreement()
    
    // expect(await rentalAgreement.callStatic.balanceOf(await signers.getAddress())).to.be.equal("0x00")
    
  })


});