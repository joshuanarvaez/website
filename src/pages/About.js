import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Info from '../components/Info';
import Resume from '../components/Resume';


import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import '../styles/about.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    <Box
                        sx={{ flexGrow: 1, display: 'flex', height: 200 }}
                    >
                        <Tabs
                            className="tabs"
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 3, borderColor: '#fff', width: "290px" }}
                        >
                            <Tab className="info-tab" label="Info" {...a11yProps(0)} />
                            <Tab className="resume-tab" label="Resume" {...a11yProps(1)} />
                        </Tabs>

                        <TabPanel value={value} index={0}> < Info /> </TabPanel>
                        <TabPanel value={value} index={1}> < Resume /> </TabPanel>
                    </Box>
            </div>
        </ThemeProvider>
    );
}












