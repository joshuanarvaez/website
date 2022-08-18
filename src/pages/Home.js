import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/home.css'
import picOfMe from '../assets/picOfMe.png';
{/* <LinkedInIcon /><EmailIcon /> <GithubIcon /> */ }



export const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <h2 className='greet'>Hi, my name is Josh!</h2>

                <div className="intro">
                    <p>I'm an aspiring Web Developer who is passionate, enthusiastic, and resourceful. Formerly, a distribution
                        professional with 8 years of experience optimizing operations in two different industries.</p>
                    <img src={picOfMe} alt="me" className="my-pic" />
                </div>
            </div>

        </div>

    );
}
