const RPC = 'http://localhost:7545';
const MANAGER_ADDRESS = '0xf6beeef2bf39f12a74868d35d7739e97b81a7dba';
const MANAGER_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "campaignId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "campaignAddress",
                "type": "address"
            }
        ],
        "name": "LogCampaignCreated",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_description",
                "type": "bytes32"
            },
            {
                "name": "_weekDuration",
                "type": "uint256"
            },
            {
                "name": "_goal",
                "type": "uint256"
            }
        ],
        "name": "createNew",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_campaignId",
                "type": "uint256"
            }
        ],
        "name": "getCampaignAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const CAMPAIGN_ABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "backers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "campaignData",
        "outputs": [
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "description",
                "type": "bytes32"
            },
            {
                "name": "goal",
                "type": "uint256"
            },
            {
                "name": "durationInWeeks",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_description",
                "type": "bytes32"
            },
            {
                "name": "_goal",
                "type": "uint256"
            },
            {
                "name": "_durationInWeeks",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "campaignAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "startTs",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "endTs",
                "type": "uint256"
            }
        ],
        "name": "LogCampaignStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "campaignAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "succeded",
                "type": "bool"
            },
            {
                "indexed": false,
                "name": "raisedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogCampaignEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "backerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "backedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogProjectBacked",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getInfo",
        "outputs": [
            {
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_startTs",
                "type": "uint256"
            },
            {
                "name": "_endTs",
                "type": "uint256"
            },
            {
                "name": "_totalBackers",
                "type": "uint256"
            },
            {
                "name": "_totalRaised",
                "type": "uint256"
            },
            {
                "name": "_goal",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "startCampaign",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "endCampaign",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "backTheProject",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "collectFunds",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];