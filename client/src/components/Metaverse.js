import React from "react";
import "../assets/styles/metaverse.css"


const Metaverse = () => {
    return(
        <div className="metaverse">
            <img src={require("../assets/images/flymanMetaverse.png").default} id="flyman-metaverse" alt="flyman" />
        </div>
    );
}
export default Metaverse;
