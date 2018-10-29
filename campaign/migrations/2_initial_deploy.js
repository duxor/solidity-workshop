var CampaignManager = artifacts.require("./CampaignManager.sol");

module.exports = function (deployer) {
    deployer.deploy(CampaignManager);
};