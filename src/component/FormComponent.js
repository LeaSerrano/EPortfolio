import "../style/css/form-component.css";
import github from "../style/picture/github.png";
import linkedin from "../style/picture/linkedin.png";
import github_hover from "../style/picture/githubHover.png";
import linkedin_hover from "../style/picture/linkedinHover.png";
import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animatedArrow from '../style/gif/Animation_arrow.json';
import QR from "../style/CV/QRcode.png"
import CV from "../style/CV/Serrano Lea - CV.pdf"

const FormComponent = () => {
    const [isGithubHovered_contact, setIsGithubHovered_contact] = useState(true);
    const [isLinkedinHovered_contact, setIsLinkedinHovered_contact] = useState(true);
    const [isCopiedMail, setIsCopiedMail] = useState(false);
    const [isCopiedPhone, setIsCopiedPhone] = useState(false);

    const handleGithubHover_contact = () => {
        setIsGithubHovered_contact(true);
    };

    const handleGithubLeave_contact = () => {
        setIsGithubHovered_contact(false);
    };

    const handleLinkedinHover_contact = () => {
        setIsLinkedinHovered_contact(true);
    }

    const handleLinkedinLeave_contact = () => {
        setIsLinkedinHovered_contact(false);
    }

    const email = "leaserrano1119@gmail.com";
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
        setIsCopiedMail(true);
        setTimeout(() => {
            setIsCopiedMail(false);
        }, 2000);
    };

    const phoneNumber = "+0681961084";
    const copyPhoneNumberToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber);
        setIsCopiedPhone(true);
        setTimeout(() => {
            setIsCopiedPhone(false);
        }, 2000);
    };

    return (
        <div className="form-component">
            <div id="contactAndSocial">
                <div id="contact">
                    <h1 className="PageTitle"> Contact</h1>
                    <h4 id="Touch">Get in touch</h4>
                </div>

                <div id="emailAdress">
                    <h4 className="WhiteH4Title">Email adress</h4>
                    <a><h5 className="GreyH5Text" onClick={copyEmailToClipboard}>{email}</h5>
                        {isCopiedMail && <h5 className={"GreyH5Text"}>Copied to clipboard!</h5>}</a>
                </div>

                <div id="phoneNumber">
                    <h4 className="WhiteH4Title">Phone number</h4>
                    <a><h5 className="GreyH5Text" onClick={copyPhoneNumberToClipboard}>{phoneNumber}</h5>
                        {isCopiedPhone && <h5 className={"GreyH5Text"}>Copied to clipboard!</h5>}</a>
                </div>

                <div>
                    <div id="socialIcons">
                        <a href={"https://github.com/LeaSerrano"} target="_blank" rel="noreferrer">
                            <img src={isGithubHovered_contact ? github : github_hover} onMouseEnter={handleGithubLeave_contact}
                                 onMouseLeave={handleGithubHover_contact} alt="github" id="github-logo" height="50px" width="50px" />
                        </a>
                        <a href={"https://www.linkedin.com/in/l%C3%A9a-serrano-6486a9193/"} target="_blank" rel="noreferrer">
                            <img src={isLinkedinHovered_contact ? linkedin : linkedin_hover} onMouseEnter={handleLinkedinLeave_contact}
                                 onMouseLeave={handleLinkedinHover_contact} alt="github" id="linkin-logo" height="50px" width="50px" />
                        </a>
                    </div>
                </div>
            </div>

            <div id="cv">
                <h4 className="WhiteH4Title">CV</h4>

                <div id="cvContent">
                    <h5 id="LittleSubtitle">Scan the QR code to download my CV : </h5>
                    <img src={QR} alt="qrcode" id="qrcode" />
                </div>

                <div id="cvContent">
                    <h5 id="LittleSubtitle">Or clic on the link to download it here : </h5>
                    <a href={CV} download="CV-Léa_Serrano.pdf"><h5 className="GreyH5Text">CV.pdf</h5></a>
                </div>

            </div>

            <div id="playerAnimation">
            <Player
                    loop autoplay src={animatedArrow}
                    className="player" id="animationArrow" speed={0.75}
                />
            </div>

        </div>
    );
};

export default FormComponent;
