import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { ethers } from 'ethers';
import { Biconomy } from "@biconomy/mexa";


let config = {
  contract: {
    address: "0xD0c6BcCeC8600abDECc3045fF37d4c79cdD16B97",
    abi: [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name_",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "forwarder_",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "ApprovalCallerNotOwnerNorApproved",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ApprovalQueryForNonexistentToken",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "BalanceQueryForZeroAddress",
        "type": "error"
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
            "name": "quantity",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MintERC2309QuantityExceedsLimit",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "MintToZeroAddress",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "MintZeroQuantity",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OwnerQueryForNonexistentToken",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "OwnershipNotInitializedForExtraData",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "TransferCallerNotOwnerNorApproved",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "TransferFromIncorrectOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "TransferToNonERC721ReceiverImplementer",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "TransferToZeroAddress",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "URIQueryForNonexistentToken",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Attest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "fromTokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "toTokenId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "ConsecutiveTransfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Revoke",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTrustedForwarder",
        "outputs": [
          {
            "internalType": "address",
            "name": "forwarder",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "forwarder",
            "type": "address"
          }
        ],
        "name": "isTrustedForwarder",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  },
  apiKey: {
    test: "77foOID48.d7a1a050-df1f-4b86-99d2-4b2a6f32d25a"

  }
}


let walletProvider, walletSigner;
let contract;
let biconomy, userAddress;

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [metaTxEnabled] = useState(true);
  const [setTransactionHash] = useState("");

  useEffect(() => {
    async function init() {
      if (
        typeof window.ethereum !== "undefined" &&
        window.ethereum.isMetaMask
      ) {
        // Ethereum user detected. You can now use the provider.
        const provider = window["ethereum"];
        await provider.enable();
        console.log("Initializing Biconomy ...");
        // We're creating biconomy provider linked to your network of choice where your contract is deployed
        biconomy = new Biconomy(window.ethereum, {
          apiKey: config.apiKey.test,
          debug: true,
          contractAddresses: [config.contract.address],
        });
        await biconomy.init();
        console.log("Biconomy", biconomy);

        /*
          This provider is linked to your wallet.
          If needed, substitute your wallet solution in place of window.ethereum 
        */
        walletProvider = new ethers.providers.Web3Provider(window.ethereum);
        walletSigner = walletProvider.getSigner();

        userAddress = await walletSigner.getAddress()

        // biconomy.onEvent(biconomy.READY, async () => {

        // Initialize your dapp here like getting user accounts etc
        contract = new ethers.Contract(
          config.contract.address,
          config.contract.abi,
          biconomy.ethersProvider

        );

        //contractInterface = new ethers.utils.Interface(config.contract.abi);
        //getQuoteFromNetwork();
        //  }).onEvent(biconomy.ERROR, (error, message) => {
        // Handle error while initializing mexa
        //  console.log(message);
        // console.log(error);
        //});
      } else {
        console.log("Metamask not installed");
      }
    }
    init();

  }, []);



  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  };

  const mintNftHandler = async () => {

    let url = `https://api.biconomy.io/api/v1/dapp/checkLimits?userAddress=${userAddress}&apiId=52c844e9-744d-4e69-a021-832b923710b3`;
    const requestOptions = {
      method: 'GET',
      headers: { "Content-Type": "application/x-www-form-urlencoded", "x-api-key": "77foOID48.d7a1a050-df1f-4b86-99d2-4b2a6f32d25a" }
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(async data => {
        console.log("Allowed:", data.allowed);
        if (metaTxEnabled && data.allowed === true) {
          sendTransaction(userAddress);
        }
        else {
          alert("Your gasless transaction limit is over. So you will be charged the gas fee!");
          console.log("Sending normal transaction", contract);

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const mycontract = new ethers.Contract(config.contract.address, config.contract.abi, signer);

          let tx = await mycontract.mint(userAddress, 1);
          console.log("Transaction hash : ", tx.hash);
          console.log(`Transaction sent by relayer with hash ${tx.hash}`);

          let confirmation = await tx.wait();
          console.log(confirmation);
          setTransactionHash(tx.hash);

          console.log("Transaction confirmed on chain");
        }
      })
      .catch(error => console.error('Error:', error));

  };

  const sendTransaction = async (userAddress) => {
    if (contract) {
      try {
        console.log(`Sending transaction via Biconomy`);
        const provider = await biconomy.provider;
        console.log("Contract check", contract);

        //let { data } = await contract.populateTransaction.mint(userAddress,1);

        let tx;
        try {
          console.log("contract signer is found here", contract);
          let { data } = await contract.populateTransaction.mint(userAddress, 1);

          let txParams = {
            data: data,
            to: config.contract.address,
            from: userAddress,
            signatureType: "EIP712_SIGN"
          };
          tx = await provider.send("eth_sendTransaction", [txParams])

        }
        catch (err) {

          console.log("handle errors like signature denied here");
          console.log(err);
        }


        console.log("Transaction hash : ", tx);
        console.log(`Transaction sent. Waiting for confirmation ..`)
        console.log(`Transaction sent by relayer with hash ${tx.hash}`);

        if (tx) {
          alert(`You just minted the Free NFT...Congrats`);
        }

        //event emitter methods
        provider.once(tx, (transaction) => {
          // Emitted when the transaction has been mined
          console.log("Transaction confirmed on chain");
          console.log(transaction);
          setTransactionHash(tx);
          //getQuoteFromNetwork();

        })

      } catch (error) {
        console.log(error);
      }


    }
  };



  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='btn'>
        Get access
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button className='btn' onClick={mintNftHandler} >
        Get identity
      </button>
    )
  }


  return (

    <><div className='main-app'>
      <h1 align="center">Taskify</h1>
      <br /><hr />
      <h3>There would be cultural shift in the way we work, every 10 years.
      </h3>
      <p>
        Have you ever felt you've over-worked and under-paid?
        Probably you'd have been getting paid on hourly basis, but what if you get rewarded by the <strong>amount of work</strong> you do!!
      </p>
    </div>

      <div className='main-app'>
        <h3 align="center">Claim you free identity to step into the world where you MATTER</h3>
      </div>

      <div align="center">
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div></>


  )
}

export default App;