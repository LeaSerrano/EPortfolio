import React, {useEffect, useState} from 'react';
import "../style/css/header-component-style.css";
import {TypeAnimation} from "react-type-animation";
import pic from "../style/picture/Lea.png";
import github from "../style/picture/github.png";
import linkedin from "../style/picture/linkedin.png";
import github_hover from "../style/picture/githubHover.png";
import linkedin_hover from "../style/picture/linkedinHover.png";
import mail from "../style/picture/mail.png";
import mailHover from "../style/picture/mailHover.png";
import BackToTopComponent from "./back-to-top-component";

const HeaderComponent = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX * speed) / 50;
                const y = (window.innerHeight - e.pageY * speed) / 50;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const [isGithubHovered, setIsGithubHovered] = useState(true);
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(true);
    const [isMailHovered, setIsMailHovered] = useState(true);
    const handleGithubHover = () => {
        setIsGithubHovered(true);
    };

    const handleGithubLeave = () => {
        setIsGithubHovered(false);
    };
    const handleLinkedinHover = () => {
        setIsLinkedinHovered(true);
    }
    const handleLinkedinLeave = () => {
        setIsLinkedinHovered(false);
    }
    const handleMailHover = () => {
        setIsMailHovered(true);
    }
    const handleMailLeave = () => {
        setIsMailHovered(false);
    }

    return (
        <div className="header-component">
            <div className="Name">
                <h4 id="Hi"> Hey, my name is </h4>
                <h1 id="Lea"> Léa Serrano</h1>
                <h1 id="Texte_animation">
                    <TypeAnimation
                        sequence={[
                            'I am a passionate developer',
                            1000,
                            'I am interested in 3D and video games',
                            1000,
                            'I create video games with Unity and Unreal engine',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{fontSize: '1em', display: 'inline-block', paddingTop: '1.5em'}}
                        repeat={Infinity}
                    />
                </h1>
                <div id="picture_about_me">
                    <img src={pic} className={"layer"} alt="pic" id="pic" height="100%" width="100%" data-speed="2"/>
                </div>

            </div>
            <div id="social">
                <a href={"https://github.com/LeaSerrano"} target="_blank">
                    <img src={isGithubHovered ? github : github_hover} onMouseEnter={handleGithubLeave}
                         onMouseLeave={handleGithubHover} alt="github" id="github-logo" height="50px" width="50px"/>
                </a>
                <a href={"https://www.linkedin.com/in/l%C3%A9a-serrano-6486a9193/"} target="_blank">
                    <img src={isLinkedinHovered ? linkedin : linkedin_hover} onMouseEnter={handleLinkedinLeave}
                         onMouseLeave={handleLinkedinHover} alt="github" id="linkin-logo" height="50px" width="50px"/>
                </a>
                <a href={"mailto:leaserrano1119@gmail.com"} target="_blank">
                    <img src={isMailHovered? mail : mailHover} onMouseEnter={handleMailLeave}
                         onMouseLeave={handleMailHover} alt="github" id="linkin-logo" height="55px" width="55px"/>
                </a>
            </div>

<BackToTopComponent/>
        </div>
    );
};

export default HeaderComponent;
