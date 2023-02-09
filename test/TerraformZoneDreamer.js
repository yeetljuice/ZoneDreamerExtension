const { expect } = require("chai");
const { loadFixture, time } = require("@nomicfoundation/hardhat-network-helpers");
const hre = require("hardhat");

let terraforms_abi = [{"inputs":[{"internalType":"address","name":"_terraformsDataAddress","type":"address"},{"internalType":"address","name":"_terraformsAugmentationsAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Daydreaming","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"terraformer","type":"address"}],"name":"Terraformed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seed","type":"uint256"}],"name":"TokensRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_ALLOTMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_SCALE","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"addTokenURIAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"authorizedDreamer","type":"address"}],"name":"authorizeDreamer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256[16]","name":"dream","type":"uint256[16]"}],"name":"commitDreamToCanvas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dreamers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"earlyMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"earlyMintActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"enterDream","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintingPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"ownerClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeemMintpass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"mintpassHolders","type":"address[]"}],"name":"setMintpassHolders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setSeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"setTokenURIAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"structureData","outputs":[{"components":[{"internalType":"uint256","name":"levelNumber","type":"uint256"},{"internalType":"uint256","name":"tokensOnLevel","type":"uint256"},{"internalType":"int256","name":"structureSpaceX","type":"int256"},{"internalType":"int256","name":"structureSpaceY","type":"int256"},{"internalType":"int256","name":"structureSpaceZ","type":"int256"}],"internalType":"struct Terraforms.StructureLevel[20]","name":"structure","type":"tuple[20]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"terraformsAugmentationsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleEarly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenCharacters","outputs":[{"internalType":"string[32][32]","name":"","type":"string[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenHTML","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenHeightmapIndices","outputs":[{"internalType":"uint256[32][32]","name":"","type":"uint256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSupplementalData","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"xCoordinate","type":"uint256"},{"internalType":"uint256","name":"yCoordinate","type":"uint256"},{"internalType":"int256","name":"elevation","type":"int256"},{"internalType":"int256","name":"structureSpaceX","type":"int256"},{"internalType":"int256","name":"structureSpaceY","type":"int256"},{"internalType":"int256","name":"structureSpaceZ","type":"int256"},{"internalType":"string","name":"zoneName","type":"string"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"string[9]","name":"characterSet","type":"string[9]"}],"internalType":"struct Terraforms.TokenData","name":"result","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenTerrainValues","outputs":[{"internalType":"int256[32][32]","name":"","type":"int256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToAuthorizedDreamer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToCanvasData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToDreamBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToDreamer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToPlacement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToStatus","outputs":[{"internalType":"enum TerraformsDreaming.Status","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenURIAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

let dream = ['0000000000000000000000000000000000200000000020000000002000000000','0020000000002000000000200000000000200000000020000011012211000000','0020011111112000111000200110000000222022222220011001102100100000','0020001010022111011000210010000000200011101201101000102110100000','0020000100020000101001221110000000200001100120001001001211000000','0000000011111101111011110000000000000000011111101000010000000000','0000000000000010000001000000000000000000000001100000010000000000','0000000000011000000001000000000000000000001000110000010000000000','0000000011000011000001000000000000000001000000100000010000000000','0000001000000000000001000000000000000010000000000000010000000000','0000001000000000000001000000000000000000000000000000010000000000','0000000010000000000001000000000000000000000000000000010000000000','0000000001000000000011000000000000000000001111101111000000000000','0000000000000001000000000000000000000000000000000000000000000000','0000000000000000000000000000000000000000000000000000000000000000','0000000000000000000000000000000000000000000000000000000000000000'];

describe("TerraformsZoneDreamer", function () {
  async function deployContract() {
    const [owner, addr1] = await ethers.getSigners();

    // const contractAddress = "0x4E1f41613c9084FdB9E34E11fAE9412427480e56";
    // const terraforms_contract = await hre.ethers.getContractAt("Terraforms", contractAddress);
    const terraforms_contract = new hre.ethers.Contract("0x4E1f41613c9084FdB9E34E11fAE9412427480e56", terraforms_abi, addr1);

    // deploy TerraformsDataHelper
    const TerraformsZoneDreamer = await hre.ethers.getContractFactory("TerraformsZoneDreamer");
    const tfzd = await TerraformsZoneDreamer.deploy();
    await tfzd.deployed();

    // setup impersonateAccount for a terraform holder
    await owner.sendTransaction({to: "0x6F56390c3764C1367Ccb210804Ecf402fE398bB5",
                                  value: ethers.utils.parseEther('5', 'ether')
                                });
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x6F56390c3764C1367Ccb210804Ecf402fE398bB5"],
    }); 
    const terraform_owner = await ethers.getSigner("0x6F56390c3764C1367Ccb210804Ecf402fE398bB5");
    const terraform_owner_matching_tokenId = 1792;
    const terraform_owner_non_matching_tokenId = 1942;

    // setup impersonateAccount for a terraform holder with daydreamt parcel
    await owner.sendTransaction({to: "0x0c2601d4f7f305a1200bc023bf2df39698cd5492",
            value: ethers.utils.parseEther('5', 'ether')
        });
    await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0x0c2601d4f7f305a1200bc023bf2df39698cd5492"],
    }); 
    const daydream_owner = await ethers.getSigner("0x0c2601d4f7f305a1200bc023bf2df39698cd5492");
    const daydream_owner_tokenId = 8387;

    return {terraforms_contract, TerraformsZoneDreamer, tfzd, owner, terraform_owner, terraform_owner_matching_tokenId, terraform_owner_non_matching_tokenId, daydream_owner, daydream_owner_tokenId, addr1 };
  }

  async function transferDaydreamToContract() {
    const {terraforms_contract, TerraformsZoneDreamer, tfzd, owner, terraform_owner, terraform_owner_matching_tokenId, terraform_owner_non_matching_tokenId, daydream_owner, daydream_owner_tokenId, addr1} = await loadFixture(deployContract);

    await terraforms_contract.connect(daydream_owner).approve(tfzd.address, daydream_owner_tokenId);
    await tfzd.connect(daydream_owner).transferOwnershipToContract(daydream_owner_tokenId);

    return {terraforms_contract, TerraformsZoneDreamer, tfzd, owner, terraform_owner, terraform_owner_matching_tokenId, terraform_owner_non_matching_tokenId, daydream_owner, daydream_owner_tokenId, addr1};
  }

  describe("transferOwnershipToContract", function () {
    it("Transfer ownership of token to the contract", async function () {
        const { terraforms_contract, tfzd, daydream_owner, daydream_owner_tokenId } = await loadFixture(deployContract);

        
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(daydream_owner.address);
        await terraforms_contract.connect(daydream_owner).approve(tfzd.address, daydream_owner_tokenId);
        await tfzd.connect(daydream_owner).transferOwnershipToContract(daydream_owner_tokenId);
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(tfzd.address);
        expect(await tfzd.tokenIdOwner(daydream_owner_tokenId)).to.equal(daydream_owner.address);        
    });
  });

  describe("transferOwnershipFromContract", function () {
    it("Transfer ownership of token in contract back to owner", async function () {
        //const { terraforms_contract, tfzd } = await loadFixture(deployContract);
        const { terraforms_contract, tfzd, daydream_owner, daydream_owner_tokenId } = await loadFixture(transferDaydreamToContract);
        // check contract has ownership of token
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(tfzd.address);
        expect(await tfzd.tokenIdOwner(daydream_owner_tokenId)).to.equal(daydream_owner.address);
        // transferOwnershipFromContract using the daydream owner signer
        await tfzd.connect(daydream_owner).transferOwnershipFromContract(daydream_owner_tokenId);
        
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(daydream_owner.address);
        expect(await tfzd.tokenIdOwner(daydream_owner_tokenId)).to.equal("0x0000000000000000000000000000000000000000");
    });

    it("Transfer ownership of token in contract back to owner should fail from non-owner account", async function () {
        //const { terraforms_contract, tfzd } = await loadFixture(deployContract);
        const { terraforms_contract, tfzd, daydream_owner, daydream_owner_tokenId, addr1, terraform_owner } = await loadFixture(transferDaydreamToContract);
        // check contract has ownership of token
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(tfzd.address);
        expect(await tfzd.tokenIdOwner(daydream_owner_tokenId)).to.equal(daydream_owner.address);
        
        // transferOwnershipFromContract using the addr signer
        await expect(tfzd.connect(addr1).transferOwnershipFromContract(daydream_owner_tokenId)).to.be.revertedWith('Not owner of tokenId when submitted to contract');
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(tfzd.address);
        expect(await tfzd.tokenIdOwner(daydream_owner_tokenId)).to.equal(daydream_owner.address);

        // transferOwnershipFromContract using the addr signer
        await expect(tfzd.connect(terraform_owner).transferOwnershipFromContract(daydream_owner_tokenId)).to.be.revertedWith('Not owner of tokenId when submitted to contract');
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(tfzd.address);
        expect(await tfzd.tokenIdOwner(daydream_owner_tokenId)).to.equal(daydream_owner.address);
    });
  });

  describe("commitDreamToCanvas", function () {
    it("validZoneDreamer: Revert if tokenIdDreamer not owned by msg.sender", async function () {
        const { tfzd, addr1, daydream_owner_tokenId } = await loadFixture(transferDaydreamToContract);
        // should fail as addr1 doesnt own token 1
        await expect(tfzd.connect(addr1).commitDreamToCanvas(daydream_owner_tokenId, dream, 1)).to.be.revertedWith("The dreamer (msg.sender) doesn't own tokenIdDreamer");
    });
    it("validZoneDreamer: Revert if tokenIdDreamer is not of same zone", async function () {
        const { tfzd, terraform_owner, terraform_owner_non_matching_tokenId, daydream_owner_tokenId } = await loadFixture(transferDaydreamToContract);
        // should fail as terraform_owner_non_matching_tokenId doesnt have same zone
        await expect(tfzd.connect(terraform_owner).commitDreamToCanvas(daydream_owner_tokenId, dream, terraform_owner_non_matching_tokenId)).to.be.revertedWith("The tokenIdDreamer and tokenIdToDream don't have the same zoneName");
    });
    it("commitDreamToCanvas: Should work if contract owns daydream_owner_tokenId", async function () {
        const { terraforms_contract, tfzd, terraform_owner, terraform_owner_matching_tokenId, daydream_owner_tokenId } = await loadFixture(transferDaydreamToContract);
        
        await tfzd.connect(terraform_owner).commitDreamToCanvas(daydream_owner_tokenId, dream, terraform_owner_matching_tokenId);
        //console.log(await terraforms_contract.tokenHeightmapIndices(daydream_owner_tokenId));
    });
    it("commitDreamToCanvas: Should work if token has contract as authorized dreamer ", async function () {
        const { terraforms_contract, tfzd, daydream_owner, daydream_owner_tokenId, terraform_owner, terraform_owner_matching_tokenId } = await loadFixture(deployContract);
        
        expect(await terraforms_contract.ownerOf(daydream_owner_tokenId)).to.equal(daydream_owner.address);

        await terraforms_contract.connect(daydream_owner).authorizeDreamer(daydream_owner_tokenId, tfzd.address);

        expect(await terraforms_contract.tokenToAuthorizedDreamer(daydream_owner_tokenId)).to.equal(tfzd.address);

        await tfzd.connect(terraform_owner).commitDreamToCanvas(daydream_owner_tokenId, dream, terraform_owner_matching_tokenId);
        //console.log(await terraforms_contract.tokenHeightmapIndices(daydream_owner_tokenId));
    });
    
  });

  describe("enterDream", function () {
    it("If token is owned by contract it should be able to set to dreamed state", async function () {
        const { terraforms_contract, tfzd, terraform_owner, terraform_owner_matching_tokenId, daydream_owner_tokenId, daydream_owner } = await loadFixture(deployContract);
        // give token to contract
        await terraforms_contract.connect(daydream_owner).approve(tfzd.address, daydream_owner_tokenId);
        await tfzd.connect(daydream_owner).transferOwnershipToContract(daydream_owner_tokenId);
        
        // commit dream
        await tfzd.connect(terraform_owner).commitDreamToCanvas(daydream_owner_tokenId, dream, terraform_owner_matching_tokenId);

        // check state is terrain
        expect(await terraforms_contract.tokenToStatus(daydream_owner_tokenId)).to.equal(2);

        // change to dream state
        await tfzd.connect(terraform_owner).enterDream(daydream_owner_tokenId, terraform_owner_matching_tokenId);

        // check state is daydream
        expect(await terraforms_contract.tokenToStatus(daydream_owner_tokenId)).to.equal(1);
    });
    it("If token is not owned by contract it should revert", async function () {
        const { terraforms_contract, tfzd, terraform_owner, terraform_owner_matching_tokenId, daydream_owner_tokenId, daydream_owner } = await loadFixture(deployContract);

        // commit dream
        await expect(tfzd.connect(terraform_owner).enterDream(daydream_owner_tokenId, terraform_owner_matching_tokenId)).to.revertedWith("Token not owned by contract. Only the token owner can set to dream state.");
    });
  });

  describe("getTokenIdZoneName", function () {
    it("Return the token zoneName", async function () {
        const { tfzd, daydream_owner_tokenId } = await loadFixture(deployContract);
        expect(await tfzd.getTokenIdZoneName(daydream_owner_tokenId)).to.equal("Holo");
    });
  });

  describe("readyToCommitDream", function () {
    it("Token doesn't have permission to be dreamt through contract", async function () {
        const { tfzd, daydream_owner_tokenId } = await loadFixture(deployContract);
        await expect(tfzd.readyToCommitDream(daydream_owner_tokenId)).to.revertedWith("Token hasn't been given permission to be dreamt through this contract");
    });
    it("Token not in dream state but contract can be used to put in dream state", async function () {
        const { terraforms_contract, tfzd, terraform_owner, terraform_owner_matching_tokenId } = await loadFixture(deployContract);
        // give token to contract
        await terraforms_contract.connect(terraform_owner).approve(tfzd.address, terraform_owner_matching_tokenId);
        await tfzd.connect(terraform_owner).transferOwnershipToContract(terraform_owner_matching_tokenId);

        await expect(tfzd.readyToCommitDream(terraform_owner_matching_tokenId)).to.revertedWith("Token not in dream state. Can be put into dream state using enterDream");
    });
    it("Token not in dream state but only owner can put in dream state", async function () {
        const { terraforms_contract, tfzd, terraform_owner, terraform_owner_matching_tokenId } = await loadFixture(deployContract);
        // assign contract as authorizedDreamer
        await terraforms_contract.connect(terraform_owner).authorizeDreamer(terraform_owner_matching_tokenId, tfzd.address);

        await expect(tfzd.readyToCommitDream(terraform_owner_matching_tokenId)).to.revertedWith("Token not in dream state. Must be put in dream state by token owner");
    });
    it("Token is owned by contract and can be dreamed", async function () {
        const { terraforms_contract, tfzd, daydream_owner, daydream_owner_tokenId } = await loadFixture(deployContract);
        // give token to contract
        await terraforms_contract.connect(daydream_owner).approve(tfzd.address, daydream_owner_tokenId);
        await tfzd.connect(daydream_owner).transferOwnershipToContract(daydream_owner_tokenId);

        expect(await tfzd.readyToCommitDream(daydream_owner_tokenId)).to.equal(true);
    });
    it("Token is the authorizedDreamer and can be dreamed", async function () {
        const { terraforms_contract, tfzd, daydream_owner, daydream_owner_tokenId } = await loadFixture(deployContract);
        // assign contract as authorizedDreamer
        await terraforms_contract.connect(daydream_owner).authorizeDreamer(daydream_owner_tokenId, tfzd.address);

        expect(await tfzd.readyToCommitDream(daydream_owner_tokenId)).to.equal(true);
    });
  });
});