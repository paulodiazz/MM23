import React from "react";
import golf from '../assets/images/SwingShort.gif';
import "../assets/styles/main.css"
import "../assets/styles/date.css"

const Date = () => {
    return(
        <div className="container-fluid bg-blue">
            <div className='row' id="golf">
                <div className='col-lg-6 p-0' >
                    <img src={golf} alt="Muy playing golf" id="swing" className="img-fluid" />
                </div>
                <div className='col-lg-6 text-light d-flex no-padding'>
                    <div className="align-self-center justify-content text-justify my-auto">
                        <div className="mx-auto" id="right-golf">
                            <h2 className="text-center text-yellow">
                                60%
                            </h2>
                            <p className="pb-1">
                                Ahora sacaremos una de nuestras joyas, algunas piezas coleccionables icónicas del final de 2013 serán regaladas a los miembros de nuestra comunidad, entre mas NFT´s de la colección tengas, mas posibilidades vas a tener de llevarte algo que estuvo en ese partido.
                            </p>
                            <h2 className="text-center text-yellow">
                                80%
                            </h2>
                            <p className="pb-1">
                                Un poco más avanzando en nuestra colección estamos preparados para entrar de lleno al mundo del espectáculo, donde solo nuestra comunidad podrá vivir una serie de conciertos exclusivos para los holders en el PEPSI CENTER.
                            </p>
                            <h2 className="text-center text-yellow">
                                100%
                            </h2>
                            <p className="pb-1">
                                Moises Muñoz en solo uno de los jugadores que ha marcado historia en el futbol de nuestro país, hay muchos otros momentos que vale la pena enmarcar en una colección, nuestros holders por haber confiado desde el principio en este proyecto, van a tener acceso anticipado a nuestras siguientes colecciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Date;