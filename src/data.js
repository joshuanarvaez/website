// Good practice to create an array of key: value pairs so that if
// we need to update anything, we only have to do it in one place.

import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

// We could have done this instead of React Router. Unnecessary for our app.

// export const links = [
//     { id: 1, url: './components/Home.js', text: 'home' },
//     { id: 2, url: './components/About.js', text: 'about' },
//     { id: 3, url: './components/Contact.js', text: 'contact' },
//     { id: 4, url: './components/Portfolio..js', text: 'portfolio'}
// ] 


export const social = [
    { id: 1, url: "https://github.com/joshuanarvaez", icon: <FaGithubSquare /> },
    { id: 2, url: "https://linkedin.com/in/joshua-narvaez", icon: <FaLinkedin /> },
    { id: 3, url: "https://twitter.com", icon: <FaTwitter /> }
]

