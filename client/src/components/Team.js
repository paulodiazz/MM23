import React from "react";
import "../assets/styles/main.css"
import "../assets/styles/team.css"
// import TeamCard from "./TeamCard";
import data from "../assets/team.json"

const teamMembers = data.map(member => {
    return (
        <div className="col-6 col-md-3 text-light pb-3">
            <div>
                <img src={require('../assets/images/team' + member.img).default} className="team-img" alt="team member" />
                <div>
                    <h2>{member.name}</h2>
                </div>
            </div>
        </div>
    )
});

const Team = () => {
    return(
        <div className="container-fluid bg-noise">
            <button className="btn btn-team text-uppercase">Meet the team</button>
            <div className="row">
                { teamMembers }
                { teamMembers }
                { teamMembers }
                { teamMembers }
                {/* <div className="col-6 col-md-3 text-light pb-3">
                    <TeamCard name="Chamo" />
                </div>
                <div className="col-6 col-md-3 text-light pb-3">
                    <TeamCard name="Jano" />
                </div>
                <div className="col-6 col-md-3 text-light pb-3">
                    <TeamCard name="Fabo" />
                </div>
                <div className="col-6 col-md-3 text-light pb-3">
                    <TeamCard name="Manny" />
                </div> */}
                {/* <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Mafer" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Oso" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Lobo" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Paulo" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Emiliano" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Alonzo" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Polo" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Octavio" />
                </div>
                <div className="col-6 col-md-4 text-light pb-3">
                    <TeamCard name="Gaby" />
                </div> */}
            </div>
        </div>
    );
}
export default Team;