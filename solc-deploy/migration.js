'use strict';

const RPC                   = 'http://localhost:7545';
const CONTRACT_NAME         = 'ExampleContract';
const CONTRACT_FILE_NAME    = 'ExampleContract.sol';
const OWNER_ADDRESS         = '0xDa47658E5E4B346BcbaE83275dd1C6c94e8058BA';
// const OWNER_ADDRESS = web3.eth.coinbase;

const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

// Connect to Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

// Compile
const input     = fs.readFileSync(CONTRACT_FILE_NAME);
const output    = solc.compile(input.toString(), 1);
const bytecode  = output.contracts[':' + CONTRACT_NAME].bytecode;
const abi       = JSON.parse(output.contracts[':' + CONTRACT_NAME].interface);
const contract  = web3.eth.contract(abi);

// Deploy
contract.new({
    data: '0x' + bytecode,
    from: OWNER_ADDRESS,
    gas: 90000 * 2
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res.transactionHash);

    if (res.address) {
        console.log('Contract address: ' + res.address);
    }
});