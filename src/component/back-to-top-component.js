import React, { useState } from 'react';
import back_to_top_button_hover from "../style/picture/back-to-top_button_hover.png";
import back_to_top_button from "../style/picture/back-to-top_button.png";
import "../style/css/back-to-top-component.css";

const BackToTopComponent = () => {
    const [isBackToTopHovered, setIsBackToTopHovered] = useState(false);

    const handleBackToTopHover = () => {
        setIsBackToTopHovered(true);
    }

    const handleBackToTopLeave = () => {
        setIsBackToTopHovered(false);
    }

    const handleClick = () => {
    }

    return (
        <div id="back-to-top-section">

            <img
                onMouseLeave={handleBackToTopLeave}
                onMouseEnter={handleBackToTopHover}
                onClick={handleClick}
                src={isBackToTopHovered ? back_to_top_button_hover : back_to_top_button}
                alt="back-to-top"
                id="back-to-top-button"
            />
        </div>
    );
}

export default BackToTopComponent;