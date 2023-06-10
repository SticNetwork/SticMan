const changeChainNetwork = async (e) => {
  let ethereum = window.ethereum;
  if (!ethereum) return false;
  console.log(e);
  const data = [{
    chainId: Web3.utils.numberToHex(e.chainId),
    chainName: e.chainName,
    nativeCurrency: {
      name: e.name,
      symbol: e.symbol,
      decimals: e.decimals,
    },
    rpcUrls: e.rpcUrls,
    blockExplorerUrls: e.blockExplorerUrls,
  }];

  return await ethereum
      .request({method: "wallet_addEthereumChain", params: data});
};

const test = (e) => {
  console.log(e);
}


const addCoinMetaMask = async (address,symbol,decimals) => {
  let ethereum = window.ethereum;
  if (!ethereum) return false;
  const data = {
    type: 'ERC20',
    options: {
      address: address,
      symbol: symbol,
      decimals: decimals,
    },
  }

  return await ethereum.request({
    method: 'wallet_watchAsset',
    params: data,
  })
}

const hiddenAddress = (e) => {
  if (e && e.length > 0) {
    const left = e.substring(0, 4)
    const right = e.substring(e.length - 4, e.length)
    return left + '...' + right
  } else {
    return ''
  }
}

const  parseTime = (time, cFormat) => {
  if (!time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}



const contractAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "presale",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_currentAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "_users",
    "outputs": [
      {
        "internalType": "bool",
        "name": "initial",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "mintTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "inviteCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "claim",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "unclaim",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "refer",
        "type": "address"
      }
    ],
    "name": "startMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "requireSuccess",
        "type": "bool"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "target",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "callData",
            "type": "bytes"
          }
        ],
        "internalType": "struct Multicall2.Call[]",
        "name": "calls",
        "type": "tuple[]"
      }
    ],
    "name": "tryAggregate",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "returnData",
            "type": "bytes"
          }
        ],
        "internalType": "struct Multicall2.Result[]",
        "name": "returnData",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_invites",
    "outputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "datetime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]