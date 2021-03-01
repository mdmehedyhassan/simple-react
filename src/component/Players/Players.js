import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Players.css';
import '../Bootstrap/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Players = (props) => {
    const {name, salary, age, image, nationality, designated} = props.player;
    return (
        <div className="player-box-div">
            <div >
                <img src={image} alt="" className="player-image" />
            </div>
            <div className="player-details">
                <h2>{name}</h2>
                <h5>designated: {designated}</h5>
                <p>Age: {age}</p>
                <p>Nationality: {nationality}</p>
                <h4>Annual Salary: ₹{salary} (Indian rupee)</h4>
                <Button variant="warning" onClick={()=>props.handlerAddPlayer(props.player)}><FontAwesomeIcon icon={faPlusCircle}  /> Add Player</Button>
            </div>
        </div>
    );
};

export default Players;