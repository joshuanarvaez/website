import React from 'react';
import Button from 'react-bootstrap/Button';
import resume from '../assets/resume.pdf'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Box from '@mui/material/Box';
import '../styles/about.css'




const Projects = () => {
    return (
        <Box sx={{ width: 330 }}>
                        <a href={resume} download="MyResume" target='_blank' rel="noreferrer">
                            <Button variant="contained" className="resume-button" ><PictureAsPdfIcon />View my Resume</Button>
                        </a>
                   
                </Box>
    )
}
export default Projects;
