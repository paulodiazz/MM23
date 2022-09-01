import React from "react";
import "../assets/styles/main.css"
import "../assets/styles/stand.css"


const Stand = () => {
    return(
        <div className="parent bg-black">
            <img src={require("../assets/images/UI/bgStand.png").default} alt="" className="img" />
            <div className="top-left">
                <div className="container">
                    <h2 className='font-weight-bold text-left text-yellow'>21-22 DESARROLLO</h2>
                    <p className="text-left pb-4">El inicio de una familia apasionada de los deportes alrededor del mundo</p>
                    <h2 className='font-weight-bold text-left text-yellow'>22 MINT</h2>
                    <p className="text-left">JULIO 2022.</p>
                    <p className="text-left">(Más información en nuestro discord)</p>
                </div>
            </div>
        </div>
    );
}
export default Stand;
