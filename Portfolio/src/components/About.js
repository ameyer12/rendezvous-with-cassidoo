import React from "react";
import './about.css'

function About() {
    return (
      <div id='about-body' >
          <h3>About Me</h3>
          <p className="about-me-paragraph">My name is Austin Meyer. I’m 23 years old, and I live in Fort Worth, Texas.
            <br></br>
            I attended The University of Texas at Austin and received my Bachelor of Arts in English
            <br></br>
            in 2021. Since then, I've been working full-time while attending Fullstack Academy
            <br></br>
            to learn web development and UI design. </p>
            <img id="about-image" src="https://i.postimg.cc/J0XB42wS/IMG-0955.jpg" alt="Graduation Photo"></img>
          <h3 className="about-skills-section">Skills</h3>
          <p className="skills-bullets">
            » JavaScript (ES6+) <span className="right-bullet">» React</span>
            <br></br>
            » Node.js <span className="right-bullet">» Express.js</span>
            <br></br>
            » HTML <span className="right-bullet">» CSS</span>
            <br></br>
            » Bootstrap <span className="right-bullet">» Figma</span>
            <br></br>
            » Git <span className="right-bullet">» GitHub</span>
            </p>
      </div>
    )
  }

export default About;