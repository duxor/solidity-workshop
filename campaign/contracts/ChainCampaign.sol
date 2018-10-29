pragma solidity ^0.4.24;

import "./IChainCampaign.sol";
import "./Ownable.sol";
import "./SafeMath.sol";

contract ChainCampaign is IChainCampaign, Ownable {
    using SafeMath for uint256;

    struct CampaignData {
        bytes32 name;
        bytes32 description;
        uint256 goal;
        uint256 durationInWeeks;
    }

    CampaignData public campaignData;
    uint256 totalBackers = 0;
    uint256 totalRaised = 0;
    uint256 startTs = 0;
    uint256 endTs = 0;

    mapping (address => uint256) public backers;

    bool campaignEnded = false;

    constructor(address _owner, bytes32 _name, bytes32 _description, uint256 _goal, uint256 _durationInWeeks) public {
        setOwner(_owner);
        campaignData = CampaignData({name: _name, description: _description, goal: _goal, durationInWeeks: _durationInWeeks});
    }

    function getInfo() external view returns
    (
        bytes32 _name,
        uint256 _startTs,
        uint256 _endTs,
        uint256 _totalBackers,
        uint256 _totalRaised,
        uint256 _goal
    ) {
        return (campaignData.name, startTs, endTs, totalBackers, totalRaised, campaignData.goal);
    }

    function startCampaign() external onlyOwner returns (bool) {
        require(startTs == 0);

        startTs = block.timestamp;
        endTs = startTs.add(campaignData.durationInWeeks.mul(1 weeks));
        emit LogCampaignStarted(this, startTs, endTs);

        return true;
    }

    function endCampaign() external returns (bool) {
        require(endTs <= block.timestamp && startTs > 0, "error message");

        emit LogCampaignEnded(this, totalRaised >= campaignData.goal, totalRaised);
        campaignEnded = true;

        return true;
    }

    function backTheProject() external payable {
        require(isInProgress() && msg.value > 0);

        if (backers[msg.sender] == 0) {
            totalBackers = totalBackers.add(1);
        }
        backers[msg.sender] = backers[msg.sender].add(msg.value);
        totalRaised = totalRaised.add(msg.value);

        emit LogProjectBacked(msg.sender, msg.value);
    }

    function collectFunds() external {
        require(startTs > 0 && endTs <= block.timestamp && totalRaised >= campaignData.goal);
        owner.transfer(totalRaised);
    }

    function isInProgress() private view returns (bool) {
        return startTs > 0 && endTs > block.timestamp;
    }

    function() public {
        revert();
    }
}
