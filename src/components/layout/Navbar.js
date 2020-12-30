import React from "react";
import logo from '../../assets/sw.png';

function Navbar() {
    return (
        <div className="row justify-content-center align-items-center">
            <img src={logo} className="logo" alt="logo" />
            <p className="text-center mb-0 ml-4 font-weight-bold">AWESOME STAR WARS SEARCH</p>
        </div>
    )
}

export default Navbar;
