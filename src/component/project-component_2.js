import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import Denoising from '../style/picture/Denoising.png';
import Mapmaker from '../style/picture/Mapmaker.png';
import Moteur from '../style/picture/Moteur.png';
import Lenortini from '../style/picture/Lenortini.png';

const ProjectComponent_2 = () => {
    const projects = [
        { title: 'Lenortini\'s mansion', image: Lenortini,  gridColumn: '1 / span 3', gridRow: '2 / span 1', colorTitle: 'white', url: 'https://github.com/LeaSerrano/Lenortini-s-Mansion'},
        { title: 'Générateur de cartes 2D', image: Mapmaker, gridColumn: '1 / span 3', gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/M1-IMAGINE-ProjetImage' },
        { title: 'Moteur de jeux platformer', image: Moteur, gridColumn: '1 / span 3', gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/ProjetMoteur' },
        { title: 'Débruitage d\'images', image: Denoising, gridColumn: '1 / span 3', gridRow: 1, colorTitle: 'white', url: 'https://github.com/LeaSerrano/M2-IMAGINE-ProjetImage' },
    ];

    return (
        <div className="project-container2">
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
            <div id="project-title-2">Personal <br/>projects</div> {/* Titre placé à droite */}
        </div>
    );
};

export default ProjectComponent_2;