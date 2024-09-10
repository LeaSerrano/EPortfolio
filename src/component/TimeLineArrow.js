import React, { useState } from 'react';
import back_to_top_button_hover from "../style/picture/back-to-top_button_hover.png";
import back_to_top_button from "../style/picture/back-to-top_button.png";
import "../style/css/TimeLineArrow.css";

const TimeLineArrow = ({idArrow}) => {
    const [isBackToTopHovered, setIsBackToTopHovered] = useState(false);

    const handleBackToTopHover = () => {
        setIsBackToTopHovered(true);
    }

    const handleBackToTopLeave = () => {
        setIsBackToTopHovered(false);
    }



    return (
        <div id={idArrow}>
            <img
                onMouseLeave={handleBackToTopLeave}
                onMouseEnter={handleBackToTopHover}

                src={isBackToTopHovered ? back_to_top_button_hover : back_to_top_button}
                alt="back-to-top"
                id={idArrow}
            />
        </div>
    );
}

export default TimeLineArrow;