import "../style/css/timeline-component.css";
import { Stepper, Step, StepLabel, StepConnector} from '@mui/material';
import * as React from 'react';
import TimeLineArrow from "./TimeLineArrow";

const TimelineComponent = () => {
    const steps = [
        { title: 'Scientific Baccalaureate SVT - ISN (Computer Science and Digital Sciences) Option, European English Section', date: '2017/2019', description: 'Lycée Jean Jaurès - Saint Clément de Rivière', position: "stepLabelBottom", positionTop: false, topLabel: '', topDate: '', topDescription: '', heightPercentage: 0},
        { title: 'D.U.T - Specialized in Computer Sciences', date: '2019/2021', description: 'I.U.T Montpellier ', position: "stepLabelBottom", 
        positionTop: true, topLabel: 'Development in C/C++ of a tool for manipulating 3D plant models', topDate: '2021', topDescription: 'Cirad', heightPercentage: 0},
        { title: 'Licence 3 - Specialized in Computer Sciences ', date: '2021/2022', description: 'Montpellier University of Science', position: "stepLabelBottom", positionTop: false, topLabel: ' ', topDate: '', topDescription: '', heightPercentage: 0},
        { title: 'Master IMAGINE', date: '2022/2024', description: 'Montpellier University of Science', position: "stepLabelBottom", 
        positionTop: true, topLabel: 'Development of an occlusion culling method in OpenGL C++ for optimizing 3D models', topDate: '2024', topDescription: 'Emersya', heightPercentage: 0},
    ];
    const [scrollPosition, setScrollPosition] = React.useState(0);

    const handleScroll = (scrollOffset) => {
        const newPosition = scrollPosition + scrollOffset;
        setScrollPosition(newPosition);
        const container = document.getElementById('timelineScrollContainer');
        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    };

    const calculateStepHeights = () => {
        const windowHeight = window.innerHeight;
        steps.forEach((step, index) => {
            const element = document.getElementById(`step-${index}`);
            if (element) {
                const height = element.offsetHeight;
                const heightPercentage = (height / windowHeight) * 100;
                steps[index].heightPercentage = heightPercentage;
                if (heightPercentage > 22) {
                    element.classList.add('large-height');
                } else {
                    element.classList.remove('large-height');
                }
            }
        });
    };

    React.useEffect(() => {
        calculateStepHeights();
        window.addEventListener('resize', calculateStepHeights);
        return () => {
            window.removeEventListener('resize', calculateStepHeights);
        };
    }, []);

    return (
        <div className="timeline-component">

            <div id="timelineTitle">
                <h1 className="PageTitle"> Studies and experiences</h1>
            </div>

            <div className="horizontal-scroll" id="timelineScrollContainer">
                <Stepper className="horizontal-stepper" alternativeLabel activeStep={0} connector={<StepConnector />}>
                    {steps.map((step, index) => (
                        <Step key={index} id={`step-${index}`}>
                            <StepLabel>
                                <div className={step.position}>
                                    <h4 className="stepTitleStudies">{step.title}</h4>
                                    <h4 className="stepDateStudies">{step.date}</h4>
                                    <h4 className="stepDescriptionStudies">{step.description}</h4>
                                </div>
                                {step.positionTop && (
                                    <div className="stepLabelTop">
                                        <h4 className="stepTitleExperiences">{step.topLabel}</h4>
                                        <h4 className="stepDateExperiences">{step.topDate}</h4>
                                        <h4 className="stepDescriptionExperiences">{step.topDescription}</h4>
                                    </div>
                                )}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div className="scroll-buttons">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handleScroll(-500)}> <TimeLineArrow  idArrow={"gauche"}/></a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handleScroll(500)}><TimeLineArrow  idArrow={"droite"}/></a>

            </div>
        </div>
    );
};

export default TimelineComponent;