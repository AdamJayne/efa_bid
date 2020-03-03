import React, { Component } from 'react';

const Home = () => {

    return (
        <div id="home">
            <section className="home-banner">
                <div className="innerBox">
                    <div className="home-intro">
                        <div className="home-intro-textbox">
                            <h1>Hello there!</h1>
                            <h1>My name is Adam Jayne</h1>
                            <h1>I am an Instructor at Eleven Fifty Academy</h1>
                        </div>
                    </div>
                    <div className="home-image">
                        <div className="my-face" />
                    </div>
                </div>
            </section>
            <div className="after-box">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <section id="aboutMe" className="about-me container">
                <div className="about-text">
                    <h1 className="about-title">
                        About Me
                    </h1>
                    <hr className="about-hr" />
                    <p className="about-content">
                        Growing up in a small town, I always had my hands on a keyboard, even if I wasn't supposed to.
                        With my grandfather's guidance, I helped manage a herd of Angus cattle, even going as far as winning Champion Angus Heifer at my county fair.
                        After giving college a try, and discovering it didn't fit my learning style, I stumbled upon Eleven Fifty Academy through family.
                        12 weeks, and a year and a half of working in the industry later, I came back to the school to become an instructor.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;