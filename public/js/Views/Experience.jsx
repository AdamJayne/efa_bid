import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <div className="header">
                <h2 className="header-title">
                    Experience
                </h2>
            </div>
            <div className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <p>I have worked at several startups, using cutting edge front-end technologies.</p>
            <div className="tech">
                <p>Python</p>
                <p>Javascript</p>
                <p>Swift</p>
            </div>
        </div>
    );
}
 
export default Experience;