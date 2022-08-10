import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, ListGroup } from 'react-bootstrap'
import picOfMe from '../assets/picOfMe.png';
import '../styles/about.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function About() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const customTheme = createTheme({
        palette: {
            primary: {
                light: "#fffff",
                main: "#2d87c8",
                dark: "#778899",
                contrastText: "#fff"
            }
        }
    });


    return (
        <ThemeProvider theme={customTheme}>
            <div className="about-container">
                <div className="pic-box">
                <Box sx={{ width: 330 }}>
                        <img src={picOfMe} alt="me" className="about-page-pic" />
                </Box>
                </div>
               
                <Box sx={{ width: 600 }}>
                    <div className="app-bar">
                        <AppBar position="static">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="inherit"
                                textColor="inherit"
                                variant="fullWidth"
                            >
                                <Tab className="bio-tab" label="Bio"  {...a11yProps(0)} />
                                <Tab className="hobbies-tab"label="Hobbies" {...a11yProps(1)} />
                                <Tab className="soft-skills-tab"label="Soft Skills" {...a11yProps(2)} />
                                <Tab className="interests-tab"label="Interests" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                    </div>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >

                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className="bio-card">
                                <Card style={{ width: '60rem' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            Born and raised on the southwest side of Chicago!
                                            I grew up playing soccer and basketball but now I mostly play golf. I'm not very
                                            good but that's what makes it fun! I love challenges and trying new things - 
                                            especially new restaurants. Please send recommendations on my Contact Page. Thanks for stopping by! 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </TabPanel>

                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className="hobbies-card">
                                <Card style={{ width: '35rem' }}>
                                        <ListGroup>
                                            <ListGroup.Item>Fitness</ListGroup.Item>
                                            <ListGroup.Item>Traveling</ListGroup.Item>
                                            <ListGroup.Item>Golf</ListGroup.Item>
                                            <ListGroup.Item>DIY Projects</ListGroup.Item>
                                            <ListGroup.Item>Outdoors</ListGroup.Item>
                                            <ListGroup.Item>Food</ListGroup.Item>
                                            <ListGroup.Item>Music</ListGroup.Item>
                                            <ListGroup.Item>Halo Infinite</ListGroup.Item>
                                            <ListGroup.Item>Basketball</ListGroup.Item>
                                        </ListGroup>
                                </Card>
                            </div>
                        </TabPanel>

                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div className="soft-skills-card">
                                <Card style={{ width: '35rem' }}>
                                        <ListGroup>
                                            <ListGroup.Item>Verbal & Written Communication</ListGroup.Item>
                                            <ListGroup.Item>People & Interpersonal Skills</ListGroup.Item>
                                            <ListGroup.Item>Professionalism</ListGroup.Item>
                                            <ListGroup.Item>Adaptability</ListGroup.Item>
                                            <ListGroup.Item>Problem Solving & Critical Thinking</ListGroup.Item>
                                            <ListGroup.Item>Teamwork</ListGroup.Item>
                                            <ListGroup.Item>Self-Awareness</ListGroup.Item>
                                            <ListGroup.Item>Self-Learning</ListGroup.Item>
                                            <ListGroup.Item>Time Management</ListGroup.Item>
                                        </ListGroup>
                                </Card>
                            </div>
                        </TabPanel>

                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <div className="interests-card">
                                <Card style={{ width: '35rem' }}>
                                        <ListGroup>
                                            <ListGroup.Item>UI/UX Design</ListGroup.Item>
                                            <ListGroup.Item>Full Stack Development</ListGroup.Item>
                                            <ListGroup.Item>Video Game Design & Development</ListGroup.Item>
                                            <ListGroup.Item>Internet of Things</ListGroup.Item>
                                            <ListGroup.Item>Blockchain & Web3</ListGroup.Item>
                                            <ListGroup.Item>Artificial Intelligence</ListGroup.Item>
                                            <ListGroup.Item>Cloud Computing</ListGroup.Item>
                                            <ListGroup.Item>Robotics</ListGroup.Item>
                                            <ListGroup.Item>Strategy</ListGroup.Item>
                                        </ListGroup>
                                </Card>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </ThemeProvider>
    );
}

























// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';


// const About = () => {
//     return (
//         <div className="section-cards">
//             <div className="soft-skills-card">
//                 <Card style={{ width: '18.5rem' }}>
//                     <Card.Body>
//                         <Card.Title>Soft Skills</Card.Title>
//                         <ListGroup variant="flush">
//                             <ListGroup.Item>Verbal & Written Communication</ListGroup.Item>
//                             <ListGroup.Item>People & Interpersonal Skills</ListGroup.Item>
//                             <ListGroup.Item>Professionalism</ListGroup.Item>
//                             <ListGroup.Item>Adaptability</ListGroup.Item>
//                             <ListGroup.Item>Problem Solving & Critical Thinking</ListGroup.Item>
//                             <ListGroup.Item>Teamwork</ListGroup.Item>
//                             <ListGroup.Item>Leadership</ListGroup.Item>
//                             <ListGroup.Item>Self-Awareness</ListGroup.Item>
//                             <ListGroup.Item>Self-Learning</ListGroup.Item>
//                             <ListGroup.Item>Time Management</ListGroup.Item>
//                         </ListGroup>
//                     </Card.Body>
//                 </Card>
//             </div>
//             <div className="professional-interests-card">
//             <Card style={{ width: '18rem' }}>
//                     <Card.Body>
//                         <Card.Title>Professional Interests</Card.Title>
//                         <ListGroup variant="flush">
//                             <ListGroup.Item>UI/UX Design</ListGroup.Item>
//                             <ListGroup.Item>Full Stack Development</ListGroup.Item>
//                             <ListGroup.Item>Video Game Design & Development</ListGroup.Item>
//                             <ListGroup.Item>Internet of Things</ListGroup.Item>
//                             <ListGroup.Item>Blockchain & Web3</ListGroup.Item>
//                             <ListGroup.Item>Artificial Intelligence</ListGroup.Item>
//                             <ListGroup.Item>Cloud Computing</ListGroup.Item>
//                             <ListGroup.Item>Robotics</ListGroup.Item>
//                             <ListGroup.Item>Strategy</ListGroup.Item>
//                             <Button className='cv-button' href="https://standardresume.co/r/YknRSFGKufmU5vUbSsiXn" target="_blank" variant="outline-info">resume</Button>
//                         </ListGroup>
//                     </Card.Body>
//                 </Card>
//             </div>
//             <div className="personal-interests-card">
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Body>
//                         <Card.Title>Personal Interests</Card.Title>
//                         <ListGroup variant="flush">
//                             <ListGroup.Item>Fitness</ListGroup.Item>
//                             <ListGroup.Item>Traveling</ListGroup.Item>
//                             <ListGroup.Item>Golf</ListGroup.Item>
//                             <ListGroup.Item>DIY Projects</ListGroup.Item>
//                             <ListGroup.Item>Outdoors</ListGroup.Item>
//                             <ListGroup.Item>Food</ListGroup.Item>
//                             <ListGroup.Item>Music</ListGroup.Item>
//                             <ListGroup.Item>Halo Infinite</ListGroup.Item>
//                             <ListGroup.Item>Watching TV</ListGroup.Item>
//                             <ListGroup.Item>Anything Tech</ListGroup.Item>
//                             <ListGroup.Item>Caffeine</ListGroup.Item>
//                         </ListGroup>
//                     </Card.Body>
//                 </Card>
//             </div>  

//         </div>
//     );
// }
// export default About;




{/* <body>
            <main>
                <h1 className="about-heading">My Interests:</h1>
            <section className="activities">
                <div className="activity-cards">
                    <h3 className="activity-card-h">Fitness</h3>
                    <p className="activity-card-p">
                        I do my best to stay active in my free time. Weightlifting is my favorite type of exercise. Cardio
                        isn't my favorite but I do enjoy cycling outdoors and indoors - I have a Peloton. I sometimes trick
                        myself into running by playing basketball but I would prefer to go on a long hike.</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">Traveling</h3>
                    <p className="activity-card-p">I have been to many different places around the world but have yet to visit Europe. I'm hoping to
                        cross that off my bucket list soon! My favorite vacation so far has been my recent trip to Tulum,
                        Mexico.</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">Music</h3>
                    <p className="activity-card-p">I listen to all different kinds of music but my favorites at the moment have to be hip hop and house music.
                        Hip hop gets me pumped up and I love house music because I enjoy dancing.</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">Golf</h3>
                    <p className="activity-card-p">Golfing is a new hobby of mine. I am not a great golfer but I'm excited to say I purchased my first
                        set of clubs! I look forward to improving my game and having fun along the way. Tips and tricks are greatly appreciated!</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">Food</h3>
                    <p className="activity-card-p">Exploring new bars and restaurants might be my favorite thing to do. I love food! Chicago is such a diverse
                        city with so much to offer. My favorite kinds of food are Italian and Mexican but I will try almost anything. Please send food recommendations!</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">TV</h3>
                    <p className="activity-card-p">I don't watch much TV but when I do it's usually YouTube videos - I have learned so much from YouTube! My favorite
                        movie genres are action, comedy, and horror. Fun fact, I haven't been to the movies since 2015. I am a huge fan of the show Breaking Bad and currently
                        hooked on Better Call Saul.</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">DIY Projects</h3>
                    <p className="activity-card-p">I enjoy DIY projects because it's fun to build things with your hands the way you want them to be built! I have renovated
                        a kitchen, several bathrooms and even built my own kitchen banquette with storage. DIY projects are a good opportunity to get in touch with my creative
                        side, spend time with my dad and friends and challenge myself by doing something new.</p>
                        </div>
                <div className="activity-cards">
                    <h3 className="activity-card-h">Gaming</h3>
                    <p className="activity-card-p">I am a Halo fanatic. Halo 2 is my favorite video game of all time. If I have some
                        spare time, you can find me on Xbox Live @JTrainV2.</p>
                </div>
            </section>
            </main>
            </body> */}