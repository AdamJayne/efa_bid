import React, { Component } from 'react';

const Home = () => {
    
    return (
        <div id="home">
            <section className="home-banner">
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
            </section>
            <div className="after-box">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <section className="about-me">
                <div className="about-text">
                    <h1 className="about-title">
                        About Me
                    </h1>
                    <hr className="about-hr" />
                    <p className="about-content">
                        Growing up in a small town, I always had my hands on a keyboard, even if I wasn't supposed to.
                        After giving college a try, and finding out it wasn't my learning style, I stumbled upon Eleven Fifty Academy.
                        12 weeks, and a year and a half of working in the industry later, I came back to the school to become an instructor.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;