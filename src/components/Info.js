import Box from '@mui/material/Box';
import '../styles/info.css'

const Info = () => {
    return (
        <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    paddingTop: 1,
                    paddingBottom: 12,
                }}
            >
                <div className="bio-column">
                    <h2 className="column-header"> Bio </h2>
                    <h5> Born and raised on the southwest side of Chicago!
                        I grew up playing soccer and basketball but now I mostly play golf. I'm not very
                        good but that's what makes it fun! I love challenges and trying new things -
                        especially new restaurants. Please send recommendations on my Contact Page.
                        Thanks for stopping by!</h5>
                </div>

                <ul className="hobbies-column">
                    <h2 className="column-header"> Hobbies</h2>
                    <li>Weightlifting</li>
                    <li>Cycling</li>
                    <li>Golf</li>
                    <li>Basketball</li>
                    <li>Bean Bag Toss</li>
                    <li>DIY Projects</li>
                    <li>Traveling</li>
                    <li>YouTubing</li>
                    <li>Video Games</li>
                </ul>

                <ul className="interests-column">
                    <h2 className="column-header"> Interests </h2>
                    <li>UI/UX Design</li>
                    <li>Full Stack Development</li>
                    <li>Internet of Things</li>
                    <li>Blockchain & Web3</li>
                    <li>Artificial Intelligence</li>
                    <li>Cloud Computing</li>
                    <li>Robotics</li>
                    <li>Game Design & Development</li>
                </ul>

                <ul className="soft-skills-column">
                    <h2 className="column-header"> Soft Skills </h2>
                    <li>Communication</li>
                    <li>People & Interpersonal Skills</li>
                    <li>Professionalism</li>
                    <li>Adaptability</li>
                    <li>Problem Solving</li>
                    <li>Critical Thinking</li>
                    <li>Teamwork</li>
                    <li>Self-Awareness</li>
                    <li>Self-Learning</li>
                    <li>Time Management</li>
                </ul>
                <ul className="front-end-column">
                    <h2 className="column-header"> Front End Skills </h2>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>MaterialUI</li>
                    <li>NPM & Yarn</li>
                </ul>
                <ul className="back-end-column">
                    <h2 className="column-header"> Back End Skills</h2>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>AWS S3</li>
                </ul>
            </Box>
        

    )
}
export default Info;





           