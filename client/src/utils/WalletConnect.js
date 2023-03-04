import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3"
// import { ethers } from "ethers" ;

// import { handleAuth  } from './WalletConnect';

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, 
      options: {
        infuraId: "", 
        rpc: {
          5: "https://goerli.infura.io/v3/298ba66b8db34d9a8cfc2e279fc3c7eb"
          },
      }
    }
  };

const web3modal = new Web3Modal(
    {
        network : "goerli",
        theme : "dark",
        cacheProvider : false,
        providerOptions
    } 
);

export const handleConnectWallet = async function connectWallet({setAccount,setWeb3modal,setProvider, setCanMint, canMint}) {
  try {
    var provider = await web3modal.connect()

    await provider.enable();
    var web3 = new Web3(provider)
    const acc = await web3.eth.getAccounts(); 
    
    setAccount(acc[0]);
    setWeb3modal(web3modal);
    setProvider(provider);

    var userNetworkId = await web3.eth.net.getId();
    console.log(userNetworkId);

    if ( userNetworkId !== 5) {
      setCanMint(false);
    } else {
      setCanMint(true);
    }
    console.log(canMint);

  } catch (error) {
    console.log(error);
  }
};