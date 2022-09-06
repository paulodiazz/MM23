import React from "react";
import golf from '../assets/images/Swing.gif';
import "../assets/styles/main.css"
import "../assets/styles/date.css"

const Date = () => {
    return(
        <div className="bg-black">
            <div className="container-fluid">
                <div className='row g-0'>
                    <div className='col-md-6' id="golf">
                        <img src={golf} alt="Muy playing golf" className="img-fluid" />
                    </div>
                    <div className='col-md-6 bg-black text-light'>
                        <div className="container">
                            <div className="text-left">
                                <h3 className="text-yellow text-uppercase pt-2">2022 Inicio de la experiencia</h3>
                                <p className="pb-2">Para los holders, entradas a partidos, Meet&greet Moises Muñoz, Eventos y conciertos Pepsi center, Experiencias únicas con la Fórmula 1 y la NFL.</p>
                                <h3 className="text-yellow text-uppercase">2022 Reunión</h3>
                                <p>Primera reunión de holders.</p>
                                <p className="pb-5">Artista invitado sorpresa.</p>
                                <button className="btn btn-team text-uppercase">Meet the team</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default Date;