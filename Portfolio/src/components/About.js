import React from "react";
import './about.css'

function About() {
    return (
      <div id='about-body'>
        <section className="practice">
          <div className="card" id="about-card1">
            <h3 id="about-h3">About Me</h3>
            <p className="about-me-paragraph">My name is Austin Meyer. I’m 23 years old, and I live in Fort Worth, Texas.
            I attended The University of Texas at Austin and received my Bachelor of Arts in English
            in 2021. Since then, I've been working full-time while attending Fullstack Academy
            to learn web development and UI design.</p>
          </div>
          <div className="card" id="about-card2">
            <h3 className="about-skills-section">Skills</h3>
            <table className="skills-bullets">
              <tr>
                <td>» JavaScript (ES6+)</td>
                <td>» React</td>
              </tr>
              <tr>
                <td>» Node.js</td>
                <td>» Express.js</td>
              </tr>
              <tr>
                <td>» HTML</td>
                <td>» CSS</td>
              </tr>
              <tr>
                <td>» Bootstrap</td>
                <td>» Figma</td>
              </tr>
              <tr>
                <td>» Git</td>
                <td>» GitHub</td>
              </tr>
            </table>
          </div>
          <div className="card" id="about-card3">
            <img id="about-image" src="https://i.postimg.cc/J0XB42wS/IMG-0955.jpg" alt="Graduation Photo"></img>
          </div>
        </section>
      </div>
    )
  }

export default About;