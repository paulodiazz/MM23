import React, { useState } from "react";
import { handleConnectWallet } from "../utils/WalletConnect";
import WhiteListForm from "./WhiteListForm";
import Button from "./Button";
import "../assets/styles/main.css"
import "../assets/styles/hero.css"
import MuyLogo from '../assets/images/moymulogo.svg';

const Hero = ({ account, setAccount, web3modal, setWeb3modal, provider, setProvider, mint }) => {

    const [whitelistState, changeWhitelist] = useState(false);

    return(
        <div className="hero bg-black">
            <div className="container-fluid w-75">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="container muy-left">
                            <div className="row mx-auto pb-4 d-flex justify-content-around social-media-container text-center">
                                <div className="col-3 p-0">
                                    <a href="https://discord.com" className="social-media" id="twitter"> </a>
                                </div>
                                <div className="col-3 p-0">
                                    <a href="https://discord.com" className="social-media" id="discord"> </a>
                                </div>
                                <div className="col-3 p-0">
                                    <a href="https://discord.com" className="social-media" id="youtube"> </a>
                                </div>
                                <div className="col-3 p-0">
                                    <a href="https://discord.com" className="social-media" id="instagram"> </a>
                                </div>
                            </div>
                            <div className="container pb-4">
                                <img src={MuyLogo} alt="Logo Muy Muñoz 23" id='muyLogo' className='mx-auto'/>
                            </div>
                            <div>
                                { account?
                                    <>
                                        <button className="yellow-button gradient-button-2 text-uppercase" onClick={
                                            async ()=>{
                                            await web3modal.clearCachedProvider();
                                            window.localStorage.clear();
                                            setAccount(undefined);
                                            setProvider();}
                                            }>Disconnect</button>
                                        </>:
                                    <>
                                        <button className="yellow-button gradient-button-2 text-uppercase" onClick={
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
                    </div>
                    <div className="col-md-6">
                        <img src={require('../assets/images/change5.gif').default} alt="Carrusel NFT" className="mx-auto flyman" />
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-6 pb-4 no-padding'>
                        { account?
                            <>
                                <button className="blue-button gradient-button-3 text-uppercase" onClick={mint}>Mint NFT</button>
                                </>:
                            <>
                                <button className="blue-button gradient-button-3 text-uppercase" id="connect-to-mint" disabled={true}>Connect your wallet to Mint!</button>
                            </>
                        }
                    </div>
                    <div className='col-md-6 pb-4 no-padding'>
                        <Button text="Whitelist" onClick={() => changeWhitelist(!whitelistState)}/>
                        <WhiteListForm state={whitelistState} changeWhitelist={changeWhitelist} />
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default Hero;
