import React, { useState } from "react";
import { handleConnectWallet } from "../utils/WalletConnect";
import "../assets/styles/main.css"
import "../assets/styles/hero.css"
import MuyLogo from '../assets/images/moymulogo.svg';


const Hero = () => {

    const [account, setAccount] = useState(undefined);
    const [web3modal, setWeb3modal] = useState();
    const [provider, setProvider] = useState();

    return(
        <div className="row bg-black">
            <div className="col-md-5 pb-2">
                <div className="container muy-left">
                    <div className="row mx-auto pb-4 d-flex justify-content-around social-media-container">
                        <div className="col">
                            <a href="https://discord.com" className="social-media" id="twitter"> </a>
                        </div>
                        <div className="col">
                            <a href="https://discord.com" className="social-media" id="discord"> </a>
                        </div>
                        <div className="col">
                            <a href="https://discord.com" className="social-media" id="youtube"> </a>
                        </div>
                        <div className="col">
                            <a href="https://discord.com" className="social-media" id="instagram"> </a>
                        </div>
                    </div>
                    <div className="container w-75 pb-5">
                        <img src={MuyLogo} alt="Logo Muy Muñoz 23" id='muyLogo' className='mx-auto'/>
                    </div>
                    { account?
                        <>
                            <button className="btn-wallet p-1 text-uppercase font-weight-bold" onClick={
                                async ()=>{
                                await web3modal.clearCachedProvider();
                                window.localStorage.clear();
                                setAccount(undefined);
                                setProvider();}
                                }>Disconnect</button>
                            </>:
                        <>
                            <button className="btn-wallet p-1 text-uppercase font-weight-bold" onClick={
                                () => {
                                handleConnectWallet({
                                    setAccount,
                                    setWeb3modal,
                                    setProvider
                                })
                                }
                            } >Connect</button>
                        </>
                    }
                </div>
            </div>
            <div className="col-md-5">
                <img src={require('../assets/images/change5.gif').default} alt="Carrusel NFT" className="mx-auto flyman" />
            </div>
            <div className="col-md-2"></div>
        </div>        
    );
}
export default Hero;
