import React, { useState } from "react";
import {ethers} from "ethers"
import Hero from './components/Hero';
import Footer from './components/Footer';
import Metaverse from './components/Metaverse';
import Stand from './components/Stand';
import Date from './components/Date';
import './App.css';
import { handleConnectWallet } from "./utils/WalletConnect";
import './assets/styles/main.css';

// const connectWallet = async  () => {
//   await window.ethereum.enable()
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   console.log(signer);
// };

var scrollFunc = function() {
  let myID = document.getElementById("wallet");
  var y = window.scrollY;
  if (y >= 80) {
    myID.className = "cta show"
  } else {
    myID.className = "cta hide"
  }
};

window.addEventListener("scroll", scrollFunc);

function App() {
  const [account, setAccount] = useState(undefined);
  const [web3modal, setWeb3modal] = useState();
  const [provider, setProvider] = useState();

  return (
    <div className="App">
      <Hero />
      <Metaverse />
      <Stand />
      <Date />
      <div className="container-fluid">
        <img src={require('./assets/images/comingsoon.gif').default} alt="Coming Soon" className="img-fluid" />
      </div>
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
      <Footer />
    </div>
  );
}
export default App;
