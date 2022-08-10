import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/home.css'


export const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <h2>Hi, my name is Josh!</h2>
                <div className="prompt">
                    <p>A former distribution pro and aspiring web developer with a passion for learning.</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Dev Skills</h1>
                <ol className="list">
                    <li className="item1">
                        <h2> Front-End</h2>
                        <span> HTML, CSS, Javascript, ReactJS, BootStrap, MaterialUI, NPM, Yarn   </span>
                    </li>
                    <li className="item2">
                        <h2> Back-End</h2>
                        <span> NodeJS, ExpressJS, SQL, AWS S3, MS SQL </span>
                    </li>
                </ol>
            </div>
        </div>

    );
}
