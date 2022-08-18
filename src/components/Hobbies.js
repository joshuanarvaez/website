import Box from '@mui/material/Box'
import picOfMe from '../assets/picOfMe.png';
import '../styles/hobbies.css'
const Hobbies = () => {
    return (
        <div className="hobbies-container">

        <Box sx={{ width: 330 }}>
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
export default Hobbies;
