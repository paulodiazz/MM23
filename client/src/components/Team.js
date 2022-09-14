import React from "react";
import "../assets/styles/main.css"
import "../assets/styles/team.css"
import data1 from "../assets/teamFirstRow.json"
import data2 from "../assets/team.json"

const teamMembersFirstRow = data1.map(member => {
    return (
        <div className="col-6 col-md-3 text-light pb-3">
            <div className="team-card mx-auto">
                <img src={require('../assets/images/team' + member.img).default} className="mx-auto d-block team-img" alt={"team member" + member.name} />
                <div className="text-center pt-3">
                    <h4>{member.name}</h4>
                    <p className="pb-3">{member.info}</p>
                </div>
            </div>
            
        </div>
    )
});

const teamMembers = data2.map(member => {
    return (
        <div className="col-6 col-md-4 text-light pb-3">
            <div className="team-card mx-auto">
                <img src={require('../assets/images/team' + member.img).default} className="mx-auto d-block team-img" alt="team member" />
                <div className="text-center pt-3">
                    <h4>{member.name}</h4>
                    <p>{member.info}</p>
                </div>
            </div>
        </div>
    )
});

const Team = () => {
    return(
        <div className="container-fluid bg-noise">
            <div className="team-container mx-auto">
                <button className="btn btn-team text-uppercase">Meet the team</button>
                <div className="flyman-container mx-auto">
                <img src={require("../assets/images/flymanMetaverse.png").default} alt="Snow" className="img-fluid" />
                <div class="centered">
                    <h4>Moy Muñoz</h4>
                    <p>Main dev</p>
                </div>
                </div>
                <div className="row">
                    { teamMembersFirstRow }
                </div>
                <div className="row mx-auto second-team">
                    { teamMembers }
                </div>
            </div>
        </div>
    );
}
export default Team;