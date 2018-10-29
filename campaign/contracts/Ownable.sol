pragma solidity ^0.4.24;

contract Ownable {
    address internal owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setOwner(address _owner) internal {
        owner = _owner;
    }
}
