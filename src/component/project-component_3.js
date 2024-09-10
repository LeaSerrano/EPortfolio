import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import Denoising from '../style/picture/Denoising.png';
import Projet3D from '../style/picture/Projet3D.png';
import ProjetVR from '../style/picture/ProjetVR.png';
import Unreal from '../style/picture/Unreal.png';

const ProjectComponent_3 = () => {
    const projects = [
        { title: 'Débruitage d\'images', image: Denoising, gridColumn: 1, gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/M2-IMAGINE-ProjetImage'},
        { title: 'Générateur de terrain 3D', image: Projet3D, gridColumn: 1, gridRow: 2, colorTitle: 'white', url: 'https://github.com/LeaSerrano/Leatina-generation-terrain'},
        { title: 'Simulateur de cuisine en VR', image: ProjetVR, gridColumn: 1, gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/Leatina-cooking-simulator' },
        { title: 'Projet unreal engine', image: Unreal, gridColumn: 1, gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/UnrealEngineProject'},
    ];

    return (
        <div className="project-container">
            <div id="project-title">Personal <br/> projects</div>
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    image={project.image}
                    gridColumn={project.gridColumn}
                    gridRow={project.gridRow}
                    colorTitle={project.colorTitle}
                    url={project.url}
                />
            ))}
        </div>
    );
};

export default ProjectComponent_3;