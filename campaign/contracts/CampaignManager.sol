pragma solidity ^0.4.24;

import "./ICampaignManager.sol";
import "./ChainCampaign.sol";

contract CampaignManager is ICampaignManager {

    address[] private campaigns;

    function createNew(bytes32 _name, bytes32 _description, uint256 _weekDuration, uint256 _goal) external {
        address newCampaign = new ChainCampaign(msg.sender, _name, _description, _goal, _weekDuration);

        campaigns.push(newCampaign);

        emit LogCampaignCreated(campaigns.length - 1, newCampaign);
    }

    function getCampaignAddress(uint256 _campaignId) external view returns (address) {
        if (_campaignId < campaigns.length) {
            return campaigns[_campaignId];
        }

        return 0x0;
    }
}
