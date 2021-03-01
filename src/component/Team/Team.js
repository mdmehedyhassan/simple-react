import React from 'react';
import './Team.css'

const Team = (props) => {
    const teamPlayers = props.buyPlayer;
    const totalBudget = teamPlayers.reduce((totalBudget, playerBudget) => totalBudget + playerBudget.salary, 0)
    const addTeamPlayers = teamPlayers.map(teamNewPlayer => teamNewPlayer.name);
    const newPlayerSalary = teamPlayers.map(playerSalary => playerSalary.salary);
    // const singlePlayer = addTeamPlayers + ',' + newPlayerSalary;
    // const dataPlayer = singlePlayer.map(data => <li>{data}</li>)
    
    return (
        <div className="main-team">
            <div className="team-image-div">
                <img src="https://i.ibb.co/xDxhSWF/team-logo.png" alt="" />
                <h1 >Team: Mumbai Indians</h1>
                <h3>Selected Team Players: {teamPlayers.length} </h3>
                <table className="table-info">
                    <tr>
                        <th>Player Name</th>
                        <th>Annual Salary</th>
                    </tr>
                    <tr>
                        {/* <td>{singlePlayer}</td> */}
                        <td>{addTeamPlayers}</td>
                        <td>₹{newPlayerSalary}</td>
                    </tr>
                    <tr className="total-budget">
                        <td>Total Team Budget:</td>
                        <td>₹{totalBudget}</td>
                    </tr>
                </table>


            </div>
            <div>

            </div>
        </div>
    );
};

export default Team;