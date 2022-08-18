import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import resume from '../assets/resume.pdf'
import '../styles/resume.css'


const Resume = () => {
    return (
        <div className="resume-container">
            <a href={resume} download="MyResume" target='_blank' rel="noreferrer">
                <Button variant="contained" className="resume-button" ><PictureAsPdfIcon />Download My Resume</Button>
            </a>
            <div className="inner-resume-container">
                <div className="work-container">
                    <h4 className="company-name"> McMaster Carr Supply Company </h4>
                    <h6 className="role-info"> Distribution Generalist | Apr 2018 - Apr 2022</h6>
                    <ul className="work-bullets">
                        <li>Assembled and packaged over 90,000 customer orders while maintaining a 99% accuracy rate.</li>
                        <li>Assisted management in boosting productivity and reducing customer errors by 20 per month by suggesting
                            improvements in the packing stations and training employees on best practices to create a streamlined
                            packing process.</li>
                        <li> Regularly audited and maintained technology such as computers, monitors, scanners, printers, sensors, etc. to
                            ensure peak performance in a fast-paced environment. </li>
                        <li> Supported management in training warehouse employees to effectively use tools such as Workday and Slack.
                            Primary contact in the department for troubleshooting technical issues with these tools as well as production
                            applications. </li>
                    </ul>
                    <h4 className="company-name"> Lagunitas Brewing Company </h4>
                    <h6 className="role-info"> Maintenance & Engineering Intern | Oct 2016 - Oct 2017</h6>
                    <ul className="work-bullets">
                        <li>First successful intern to address and organize over $950,000 of inventory in our warehouse which significantly
                            improved our engineering department's ability to source the parts required quickly.</li>
                        <li> Upgraded inventory recording tool from Microsoft Excel to Maintenance Connection which required a large
                            data migration. This considerably enhanced the company's ability to collaborate more effectively and share
                            data in real-time. </li>
                        <li> Leveraged Maintenance Connection to track assets, locations, equipment, tasks/PMs, electrical prints,
                            operations manuals, etc. Personally built and migrated over 60% of engineering data company wide </li>
                        <li> Automated purchasing intervals which reduced stock-outs, downtime and costs. Successfully maintained an
                            inventory holding cost of below $1,000,000 with over 8,000 parts in stock. </li>
                    </ul>
                    <h4 className="company-name"> Lagunitas Brewing Company </h4>
                    <h6 className="role-info"> Lead Taproom Server | Jul 2014 - Jul 2019</h6>
                    <ul className="work-bullets">
                        <li>Collaborated with management in identifying opportunities to reduce waste, enhance product offering, and
                            cross-train employees which elevated profits by 7%. Personally trained over 20 people for various roles.</li>
                        <li>Supported management in implementing two different POS systems. Worked with vendors to create a userfriendly experience by providing input on design and features.</li>
                        <li>Trained all employees to use POS applications effectively and was responsible for troubleshooting onsite
                            whenever necessary</li>
                        <li>Assisted sales operation in maintaining key accounts and facilitated new business opportunities by engaging
                            people to create a unique and enjoyable experience while providing exceptional customer service.</li>
                    </ul>
                </div>
                <div className="education-container">
                    <h6 className="work-education-heading">Education</h6>

                    <h4 className="school-name"> University of Illinois - Chicago </h4>
                    <h6 className="degree-info"> Professional Certificate - Full Stack Web Development | Aug 2021 - Feb 2022</h6>
                    <p className="project-heading">Major Project:<span className="project-info"> eCommerce Web App</span></p>
                    <p className="courses-heading">Languages and Tools:<span className="course-info"> HTML, CSS, Javascript, ReactJS, Bootstrap, Material UI, NodeJS, ExpressJS, SQL, Git & GitHub</span></p>

                    <h4 className="school-name"> Elmhurst University </h4>
                    <h6 className="degree-info"> M.S. Computer Information Systems | Jun 2017 - Dec 2019</h6>
                    <p className="project-heading">Major Project:<span className="project-info"> Internetworking Technologies</span></p>
                    <p className="courses-heading">Major Courses:<span className="course-info"> Cloud Computing, Virtualization, Web Development, Windows Application Programming, Database
                        Management & Data Warehousing, IT Project Management, Local Area Networks, Wide Area Networks, Computer
                        Network Concepts, Internetworking Technologies </span></p>

                    <h4 className="school-name"> Elmhurst University </h4>
                    <h6 className="degree-info"> B.S. Operations Management | Aug 2015 - May 2017</h6>
                    <p className="project-heading">Major Project:<span className="project-info"> Strategic Management of a Startup Company</span></p>
                    <p className="courses-heading">Major Courses:<span className="course-info"> Logistics & Supply Chain Management, Financial Accounting, Management Accounting,
                        Management Theory & Practice, Marketing, Global Business, Microeconomics, Business Law, Business Finance,
                        Cultural Diversity in Organizations </span></p>

                    <h4 className="school-name"> Amazon Web Services </h4>
                    <h6 className="degree-info"> AWS Certified Cloud Practitioner | Mar 2020 - Apr 2020</h6>
                </div>
            </div>

        </div>


    )
}
export default Resume;