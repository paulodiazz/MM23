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
        <div className="row bg-black py-5">
            <div className="col-md-2"></div>
            <div className="col-md-4">
                <div className="container">
                    <div className="row w-50 mx-auto pb-5 d-flex justify-content-around">
                        <a href="https://discord.com" className="social-media" id="twitter"> </a>
                        <a href="https://discord.com" className="social-media" id="discord"> </a>
                        <a href="https://discord.com" className="social-media" id="youtube"> </a>
                        <a href="https://discord.com" className="social-media" id="instagram"> </a>
                    </div>
                    <div className="container w-75 pb-5">
                        <img src={MuyLogo} alt="Logo Muy Muñoz 23" id='muyLogo' className='mx-auto'/>
                    </div>
                    { account?
                        <>
                            <button className="btn-wallet p-1" onClick={
                                async ()=>{
                                await web3modal.clearCachedProvider();
                                window.localStorage.clear();
                                setAccount(undefined);
                                setProvider();}
                                }>Disconnect</button>
                            </>:
                        <>
                            <button className="btn-wallet p-1" onClick={
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
            <div className="col-md-4">
                <img src={require('../assets/images/change5.gif').default} alt="Carrusel NFT" className="mx-auto flyman" />
            </div>
            <div className="col-md-2"></div>
        </div>        
    );
}
export default Hero;
