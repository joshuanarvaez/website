import React from 'react';
import '../styles/projects.css';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from '../helpers/ProjectList';



const Projects = () => {
    return (
<div className="projects">
    <h1 className='project-title'>My personal projects</h1>
    <div className="project-list">
        {/* <ProjectItem name="Calculator" image={proj1} />
        <ProjectItem name="Tic Tac Toe" image={proj2}/> */}
        {ProjectList.map((project, idx) => {
            return (
            <ProjectItem id={idx} name={project.name} image={project.image}/>
            )
        })}
    </div>
</div>
    );
}
export default Projects;
