import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/experience.css'




const Experience = () => {
    return (
        <div className="experience-container">
            <h1 className="vertical-timeline-header"> Educational & Professional Timeline</h1>
      <VerticalTimeline lineColor="#fff">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#2d87c8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Illinois, Chicago, IL
          </h3>

          <p> Professional Certificate - Full Stack Web Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#2d87c8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Elmhurst University, Elmhurst, IL
          </h3>

          <p> Master of Science - Computer Information Systems</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#2d87c8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Elmhurst University, Elmhurst, IL
          </h3>

          <p> Bachelor of Science - Operations Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2014"
          iconStyle={{ background: "#2d87c8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Moraine Valley, Palos Hills, IL
          </h3>

          <p> Associate of Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2010" 
          iconStyle={{ background: "#2d87c8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            De La Salle Institute, Chicago, IL
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            McMaster Carr Supply Company
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Elmhurst, IL
          </h4>
          <p>Distribution Generalist</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lagunitas Brewing Company
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chicago, IL
          </h4>
          <p>Lead Taproom Server</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lagunitas Brewing Company
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chicago, IL
          </h4>
          <p>Maintenance & Engineering Intern</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
    )
}
export default Experience;