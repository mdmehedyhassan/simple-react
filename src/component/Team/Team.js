import React from 'react';
import './Team.css'

const Team = (props) => {
    const teamPlayers = props.buyPlayer;
    const totalBudget = teamPlayers.reduce((totalBudget, playerBudget) => totalBudget + playerBudget.salary,0)
    return (
        <div className="main-team">
            <div className="team-image-div">
                <img src="https://i.ibb.co/xDxhSWF/team-logo.png" alt="" />
                <h1 >Team: Mumbai Indians</h1>
                <h3>Selected Team Players: {teamPlayers.length} </h3>
                
                <h2>Total Team Budget: {totalBudget} </h2>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Team;