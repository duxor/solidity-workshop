pragma solidity ^0.4.24;

interface IChainCampaign {

    event LogCampaignStarted
    (
        address indexed campaignAddress,
        uint256 startTs,
        uint256 endTs
    );
    event LogCampaignEnded
    (
        address indexed campaignAddress,
        bool succeded,
        uint256 raisedAmount
    );
    event LogProjectBacked
    (
        address indexed backerAddress,
        uint256 backedAmount
    );

    function getInfo() external view returns
    (
        bytes32 _name,
        uint256 _startTs,
        uint256 _endTs,
        uint256 _totalBackers,
        uint256 _totalRaised,
        uint256 _goal
    );

    function startCampaign() external returns (bool);
    function endCampaign() external returns (bool);
    function backTheProject() external payable;
    function collectFunds() external;
}
