import React from 'react';

export default function LifelongLearning () {
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Learning</h1>
      </div>
      <div className="after-header">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="black" points="0,0 100,0 0,100" />
          </svg>
      </div>
      <div className="learning-content">
        <div className="image-box learning-image" />
        <div className="learning-description">
          <div className="description-content container">
            <p>An old friend once told me to pursue lifelong learning. Since that day, I have taken it to heart, and pushed myself to never stop learning.</p>
            <p id="final-line">Keeping up with the pace in which technology innovates is a challenge that I am excited to face.</p>
          </div>
        </div>
        <div id="redAngle" className="after-header">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="#EC494B" points="0,0 100,0 100,100" />
            </svg>
        </div>
        <div className="learning-inner container">
          <div className="about-text">
              <h1 className="about-title">
                  Certifications
              </h1>
              <hr className="about-hr" />
              <p className="about-content">
                I currently hold two industry certifications, and am actively pursuing further professional certifications.
              </p>
              <div className="certification-list">
                <div className="certification-item">
                  <div id="networkPlus" className="certification-image" />
                  <div className="certification-title">
                    <p>CompTIA Network +</p>
                  </div>
                </div>
                <div className="certification-item">
                  <div id="javascriptSpecialist" className="certification-image" />
                  <div className="certification-title">
                    <p>CIW Javascript Specialist</p>
                  </div>
                </div>
              </div>
              <p className="about-content">
                <i>
                  I am actively in pursuit of further professional certifications.
                </i>
              </p>
          </div>
          <div className="events-section">
            <h1 className="about-title">
                Events
            </h1>
            <hr className="about-hr" />
            <div className="defCon">
              <div className="defConPhoto" />
              <div className="defConInfo">
                <p>
                  The summer of 2019 was incredible. My first visit to Las Vegas, and attending the legendary hacker convention.
                </p>
                <p>
                  Surrounded by security professionals and everyday hackers, I gained important perspectives into the future of technology.
                </p>
                <p>
                  I will forever remember watching teams from across the world duke it out in the CTF finals, and the generosity and patience of everyday people teaching a developer a thing or two about security.
                </p>
                <p>
                  DefCon 27 was my first, and will surely not be my last!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}