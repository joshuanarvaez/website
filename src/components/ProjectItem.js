import React from 'react';
import { useNavigate } from "react-router-dom"

const ProjectItem = ({ image, name, id}) => {
    const navigate = useNavigate();
    return (
        <div 
        className="project-item" 
        onClick={() => {
            navigate("/project/" + id);
        }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bg-image"/>
            <h1> { name } </h1>
        </div>
    );
}

export default ProjectItem;