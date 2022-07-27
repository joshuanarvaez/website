import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaLinkedin, FaLinkedinIn, FaGithub, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom"
import { social } from "../data";
import logo from '../logo.jpg';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    // Here we are checking the height of the links container. We do this to
    // adjust the sizing of links depending on how many we have.
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        console.log(linksContainerRef.current.getBoundingClientRect())
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} classname="logo" alt="logo" />
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                {/* React Router to navigate Navbar. We still ref them so we could pull urls
            from data.js if we wanted - better for larger sites with many updates.  */}
                <div className="links-container" ref={linksContainerRef}>
                    <div className="links" ref={linksRef}>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/portfolio">Portfolio</Link>
                    </div>
                </div>
                <ul className="social-icons">
                    {/* Pull social links array from data.js and map*/}
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;