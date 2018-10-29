/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('truffle-wallet-provider');
// const INFURA_API_KEY = 'dbff69ac3dfa4fa3b53c698c942b5c1f';
// const INFURA_API_SECRET = 'e41e4c2ccda6480ba5556522d4b946db';
const INFURA_API_ENDPOINT = 'https://ropsten.infura.io/v3/dbff69ac3dfa4fa3b53c698c942b5c1f';
const MNEMONIC = 'city negative account travel boat tape online fee pluck stock height earn';

const WEB3_PROVIDER = "http://127.0.0.1:7545";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
            provider: new Web3.providers.HttpProvider(WEB3_PROVIDER)
        },
        ropsten: {
            provider: new HDWalletProvider(MNEMONIC, INFURA_API_ENDPOINT),
            network_id: 3,
        }
    },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
