import Box from '@mui/material/Box'
import picOfMe from '../assets/picOfMe.png';
import '../styles/interests.css'
const Interests = () => {
    return (
        <div className="interests-container">
            <Box sx={{ width: 330 }}>
            <h3 className="interests-list-heading"> Interests</h3>
                <ul className="interests-list">
                    <li>UI/UX Design</li>
                    <li>Full Stack Development</li>
                    <li>Video Game Design & Development</li>
                    <li>Internet of Things</li>
                    <li>Blockchain & Web3</li>
                    <li>Artificial Intelligence</li>
                    <li>Cloud Computing</li>
                    <li>Robotics</li>
                </ul>
                <h3 className="hobbies-list-heading"> Hobbies</h3>
                <ul className="hobbies-list">
                            <li>Fitness</li>
                            <li>Traveling</li>
                            <li>Golf</li>
                            <li>DIY Projects</li>
                            <li>The Outdoors</li>
                            <li>Food</li>
                            <li>Music</li>
                            <li>Halo</li>
                            <li>Basketball</li>
                        </ul> 
            </Box>
            <div className="pic-box">
                        <img src={picOfMe} alt="me" className="about-page-pic" />
        </div>
        </div>

    )
}
export default Interests;

