import React from "react";
import "../assets/styles/main.css"
import "../assets/styles/team.css"

const TeamCard = (props) => {
    return(
        <div>
            <img src={require('../assets/images/team/chamo.png').default} className="team-img" alt="team" />
            <div>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}
export default TeamCard;