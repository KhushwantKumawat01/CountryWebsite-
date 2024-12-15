// eslint-disable-next-line no-unused-vars
import React from "react";
import {NavLink} from "react-router-dom";
export default function Headers() {
    return <header className="Header">
        <div className={"container"}>
             <div className={"grid navbar-grid"}>
                 <div className={"Logo"}>
                     <NavLink to={"/"}>
                         <h1>WorldAtlas</h1>
                     </NavLink>
                 </div>
                 <nav>
                     <ul>
                         <li><NavLink to={"/"}>Home</NavLink></li>
                         <li><NavLink to={"/about"}>About</NavLink></li>
                         <li><NavLink to={"/country"}>Country</NavLink></li>
                         <li><NavLink to={"/contact"}>Contact</NavLink></li>
                         <li><NavLink to={"/"}>Home</NavLink></li>
                     </ul>
                 </nav>
             </div>
        </div>
    </header>
}