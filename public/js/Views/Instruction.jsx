import React from 'react';

const Instruction = () => {

    return (
        <div>
            <div className="header">
                <h1 className="header-title">
                    Instruction
                </h1>
            </div>
            <div className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <div className="instruction-content">
                <div className="image-box instruction-image" />
                <div className="instruction-description">
                    <div className="description-content container">
                        <p>
                            I have strived for efficiency when presenting topics to students.
                        </p>
                        <p>
                            Every moment is a lesson, every mind is different, and molding your understanding to match another's thought patterns increases your understanding of material.
                        </p>
                        <p>
                            It's incredibly exciting and satisfying watching individuals go from knowing very little about development to near complete independence.
                        </p>
                    </div>
                </div>
            </div>
            <div id="redAngle" className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#EC494B" points="0,0 100,0 100,100" />
                </svg>
            </div>
            <div className="feedback-section container">
                <div className="feedback-title">
                    <h1>Student Feedback</h1>
                </div>
                <hr className="about-hr"/>
                <div className="feedback-reviews">
                    <div className="feedback">
                        <p>
                            <i>
                                "Adam is an incredible teacher who goes above and beyond with helping students when they don't understand things. Adam takes the time to sit down and makes sure you understand the issue rather than moving forward."
                            </i>
                        </p>
                        <p>
                        Python Student
                        </p>
                    </div>
                    <div className="feedback">
                        <p>
                            <i>
                                "Adam went above and beyond to make sure we were prepared."
                            </i>
                        </p>
                        <p>
                            Javascript Student
                        </p>
                    </div>
                </div>
            </div>
            <div className="instruction-experience container">
                <div className="feedback-title">
                    <h1>Instructional Experience</h1>
                </div>
                <hr className="about-hr"/>
                <p>
                    With 3 Python cohorts and several drop-in's with Javascript cohorts under my belt, I feel confident in teaching both the Web Development and Python curriculum from beginning to end.
                </p>
            </div>
        </div>
    );
}
 
export default Instruction;