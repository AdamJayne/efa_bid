import React from 'react';

const Curriculum = () => {
    return (
        <div>
            <div className="header">
                <h1 className="header-title">Curriculum</h1>
            </div>
            <div className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <p>
                From concept to implementation
            </p>
            <p>
                Crafting a curriculum is no easy task. I have had the pleasure of taking part in the build of the original Python curriculum, as well as help through the decision making process for overhauling it a second time.
            </p>
            <p>
                Now, as the Python curriculum manager, it is my team and I's duty to iterate on the previous changes, and fine tune the curriculum to meet modern industry needs, and prepare for shifts in industry trends.
            </p>
            <p>Computer Science Concepts</p>
            <p>Back-end First Principle</p>
        </div>
    );
}

export default Curriculum;