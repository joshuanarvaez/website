import Box from '@mui/material/Box'
import picOfMe from '../assets/picOfMe.png';
import '../styles/about.css'
const Skills = () => {
    return (
        <div className="skills-container">
            <Box sx={{ width: 980 }}>
                <div className="skills-lists">
                    <ul className="soft-skills-list">
                    <h3 className="soft-skills-list-heading"> Soft Skills</h3>
                        <li>Verbal & Written Communication</li>
                        <li>People & Interpersonal Skills</li>
                        <li>Professionalism</li>
                        <li>Adaptability</li>
                        <li>Problem Solving & Critical Thinking</li>
                        <li>Teamwork</li>
                        <li>Self-Awareness</li>
                        <li>Self-Learning</li>
                        <li>Time Management</li>
                    </ul>
                    <ul className="front-end-list">
                        <h3 className="front-end-list-heading"> Front End Skills</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>Bootstrap</li>
                        <li>MaterialUI</li>
                        <li>NPM & Yarn</li>
                    </ul>
                    <ul className="back-end-list">
                        <h3 className="back-end-list-heading"> Back End Skills</h3>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MySQL</li>
                        <li>SQL Server</li>
                        <li>AWS S3</li>
                    </ul>
                </div>

            </Box>
        </div>

    )
}
export default Skills;

