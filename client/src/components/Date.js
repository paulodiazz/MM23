import React from "react";
import golf from '../assets/images/Swing.gif';
import "../assets/styles/main.css"
import "../assets/styles/date.css"

const Date = () => {
    return(
        <div className="container-fluid bg-blue">
            <div className='row'>
                <div className='col-md-6' id="golf">
                    <img src={golf} alt="Muy playing golf" className="img-fluid" />
                </div>
                <div className='col-md-6 text-light'>
                    <div className="container d-flex align-items-center" id="right-golf">
                        <div className="d-flex flex-column text-left">
                            <div>
                                <h3 className="text-yellow text-uppercase pt-2">2022 Inicio de la experiencia</h3>
                            </div>
                            <div className="pb-4">
                                <p className="pb-2">Para los holders, entradas a partidos, Meet&greet Moises Muñoz, Eventos y conciertos Pepsi center, Experiencias únicas con la Fórmula 1 y la NFL.</p>                                
                            </div>
                            <div>
                                <h3 className="text-yellow text-uppercase">2022 Reunión</h3>
                            </div>
                            <div>
                                <p>Primera reunión de holders.</p>
                                <p className="pb-5">Artista invitado sorpresa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Date;