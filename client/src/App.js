import React from "react";
import Hero from './components/Hero';
import Footer from './components/Footer';
import Metaverse from './components/Metaverse';
import Stand from './components/Stand';
import Date from './components/Date';
import Team from './components/Team';
import './App.css';
import { handleConnectWallet } from "./utils/WalletConnect";
import './assets/styles/main.css';
import abi_ from './abi.json'
import {ethers} from "ethers"

const collection_add = "0xB0eb034BA19DC2B8BeFc1e9E95220429a0B1D728"

// const connectWallet = async  () => {
//   await window.ethereum.enable()
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   console.log(signer);
// };

const mint = async () => {
    await window.ethereum.enable()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const collection = new ethers.Contract (collection_add, abi_, signer);
    console.log(signer);
    collection.mint(1);
}

var scrollFunc = function() {
  try {
    let myID = document.getElementById("wallet");
    var y = window.scrollY;
    if (y >= 80) {
      myID.className = "cta show"
    } else {
      myID.className = "cta hide"
    }
  } catch (error) {
    
  }
};

window.addEventListener("scroll", scrollFunc);

function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const [account, setAccount] = React.useState(undefined);
  const [web3modal, setWeb3modal] = React.useState();
  const [provider, setProvider] = React.useState();

  return (
    <div className="App">
      <Hero account={account} setAccount={setAccount} web3modal={web3modal} setWeb3modal={setWeb3modal} provider={provider} setProvider={setProvider} mint={mint} />
      <Metaverse />
      <Stand />
      <Date />
      <Team />
      {/* Coming soon gif */}
      <div className="container-fluid p-0">
        <img src={require('./assets/images/comingsoon.gif').default} alt="Coming Soon" className="img-fluid" />
      </div>
      { account?
        <>
          <div></div>
        </>:
        <>
          <button id={"wallet"} onClick={
            () => {
              handleConnectWallet({
                  setAccount,
                  setWeb3modal,
                  setProvider
              })
              }
          }>
            <img src={require('./assets/images/connectWalletCircle.png').default} alt="Boton wallet flotante" className='circle-wallet'/>
          </button>
        </>
      }
      <Footer />
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </div>
  );
}
export default App;
