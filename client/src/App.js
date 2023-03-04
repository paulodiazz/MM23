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
import "animate.css/animate.min.css";

const collection_add = "0x899aF4E1340035D01E295FF2511Af41B313118e2";

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
  const [canMint, setCanMint] = React.useState(true);

  const mint = async () => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = await ethersProvider.getSigner();
    const collection = new ethers.Contract (collection_add, abi_, signer);
    console.log(signer);
    collection.mint(1);
  }

  return (
    <div className="App">
      <Hero account={account} setAccount={setAccount} web3modal={web3modal} setWeb3modal={setWeb3modal} provider={provider} setProvider={setProvider} mint={mint} setCanMint={setCanMint} canMint={canMint} />
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
                  setProvider,
                  setCanMint,
                  canMint
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
