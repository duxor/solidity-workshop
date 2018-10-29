'use strict';

var ERC20Mock = artifacts.require("./ERC20.sol");

const initalSupply = '1000000000000000';
const creator_address = '0xf25799D0818dA14beFC49bCa5460A128802D7e16';

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    ERC20Mock,
    accounts[0],
    initalSupply
  );
};
