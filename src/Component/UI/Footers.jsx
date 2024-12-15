// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footerData from "../../API/footerData.json";
import {NavLink} from "react-router-dom";

export default function Footers() {
    // Create a mapping for the icon names to React icons
    const iconMapping = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <footer className="footer-section">
            <div className="container footer-cards ">
                {footerData.map(({ icon, title, details }, index) => (
                    <div className="footer-contact " key={index}>
                        <div className="icon">
                            {/* Use the icon mapping to get the correct icon */}
                            {iconMapping[icon]}
                        </div>
                        <div className="footer-contact-text">
                            <p>{title}</p>
                            <p>{details}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"copyright-area"}>
                <div className={"container"}>
                    <div className={"grid grid-two-cols"}>
                        <div className={"copyright-text"}>
                            <p>
                                Copyright &Copy; 2024, All rights reserved
                                <NavLink to="https://portfolio-mu-kohl-29.vercel.app/">
                                    Khushwant Kumawat
                                </NavLink>
                            </p>
                        </div>
                        <div className={"footer-menu"}>
                            <ul>
                                <li>
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/country"}>Country</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
