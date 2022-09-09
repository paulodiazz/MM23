import React from "react";
import "../assets/styles/main.css"
import "../assets/styles/stand.css"


const Stand = () => {
    return(
        <div className="parent bg-black">
            <img src={require("../assets/images/UI/bgStand.png").default} alt="" className="img" />
            <div className="top-left">
                <div className="container text-light text-justify">
                    <h2 className="text-center text-yellow">20%</h2>
                    <p>
                        Después de nuestro día de Mint vamos a contactar a los holders con NFT especiales (NFL, HIR, LUST, JUMP AIR) para que puedan empezar a gozar de los beneficios desde el día uno.
                    </p>
                    <p>
                        FONDO NFL vivirá una experiencia única, incluyendo 2 boletos para ver el partido en el estadio Azteca.
                    </p>
                    <p>
                        FONDO HIR tendrá acceso a una serie de conciertos en el PEPSI CENTER, donde vivirá una experiencia de ALL INCLUSIVE en el mejor palco del lugar.
                    </p>
                    <p>
                        FONDO LUST tendrá la libertad de elegir un próximo drop de sneakers de la tienda y asegurar la posibilidad de comprar un par, en la talla que elija.
                    </p>
                    <p>
                        FONDO JUMP AIR desarrollar un proyecto en conjunto con el equipo que llevo acabo esta colección. Y algunas sorpresas más.
                    </p>
                    <h2 className="text-center text-yellow">40%</h2>
                    <p>
                        Al mismo tiempo para el resto de holders, comenzarán las dinámicas semanales donde cada semana algunos de nuestros holders serán seleccionados para vivir una experiencia única, relacionada con algún deporte o con el mundo del entretenimiento. (Partidos, conciertos, meets & greets, entre algunas otras sorpresas)
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Stand;
