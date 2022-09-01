import React from "react";
import "../assets/styles/main.css"

const Date = () => {
    return(
        <div className='row bg-black'>
            <div className='col-md-6'>
                <img className="img-fluid" src={require("../assets/images/Swing.gif").default} alt="Muy playong golf" />
            </div>
            <div className='col-md-6 bg-black text-light'>
                <div className=" container w-75 mx-auto h-100 d-flex justify-content-center align-items-center">
                    <div className="text-left">
                        <h3 className="text-yellow text-uppercase pt-2">2022 Inicio de la experiencia</h3>
                        <p className="pb-2">Para los holders, entradas a partidos, Meet&greet Moises Muñoz, Eventos y conciertos Pepsi center, Experiencias únicas con la Fórmula 1 y la NFL.</p>
                        <h3 className="text-yellow text-uppercase">2022 Reunión</h3>
                        <p>Primera reunión de holders. Artista invitado sorpresa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Date;
