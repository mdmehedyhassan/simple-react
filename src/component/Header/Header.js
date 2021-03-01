import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Bootstrap/bootstrap.min.css';
import './Header.css'


const Header = () => {
    return (
        <div className="main-header">
            <div>
                <h1><img src="https://i.ibb.co/hfnDDrZ/Indian-Premier-League-svg-e1487713497929.png" alt="" className="logo" /> Indian Premier League 2021 </h1>
            </div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
        </div>

    );
};

export default Header;