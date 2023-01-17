import React from "react";
import {link } from "react-router-dom";
function Navbar() {
    return (
        <ul>
            <li><link to='/'>Home</link></li>
            <li><link to='/About'>About</link></li>
            <li><link to='/Service'>Service</link></li>


        </ul>
    )

}
export default Navbar;