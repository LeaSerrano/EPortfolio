import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import CubeEscape from '../style/picture/CubeEscape.png';
import Raytracing from '../style/picture/Raytracing.png';
import GDLJam2022 from '../style/picture/Friendly.png'
import CGJ2023 from '../style/picture/CGJ2023.png';

const ProjectComponent = () => {
    const projects = [
        { title: 'CubeEscape', image: CubeEscape, gridColumn: 1, gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/ProjetCubeEscape'},
        { title: 'Lancer de rayons', image: Raytracing, gridColumn: 1, gridRow: 2, colorTitle: 'white', url  : 'https://github.com/LeaSerrano/M1-IMAGINE-Prog3D-LancerRayon'},
        { title: 'GDL Game Jam', image: GDLJam2022, gridColumn: 1, gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/GDLJam-2022' },
        { title: 'Code Game Jam 2023', image: CGJ2023,  gridColumn: 1, gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/CodeGameJam-2023'},
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

export default ProjectComponent;