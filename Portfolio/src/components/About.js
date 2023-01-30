import React from "react";
import './about.css';
import { DiReact, DiCss3, DiGithubBadge, DiJavascript1, DiHtml5, DiBootstrap, DiGit } from 'react-icons/di';
import { SiExpress, SiFigma, SiNodedotjs } from 'react-icons/si'

function About() {
    return (
      <div id='about-body'>
        <h3 id="about-h3">About Me</h3>
        <section className="about-grid-container">
          <div className="card" id="about-card2">
            <img id="about-image" src="https://i.postimg.cc/J0XB42wS/IMG-0955.jpg" alt="Graduation Photo"></img>
            <h3 className="about-skills-section">Skills</h3>
            <table className="skills-bullets">
              <tr>
                <td>» JavaScript (ES6+) <DiJavascript1 /></td>
                <td>» React <DiReact /></td>
              </tr>
              <tr>
                <td>» Node.js <SiNodedotjs /></td>
                <td>» Express.js <SiExpress /></td>
              </tr>
              <tr>
                <td>» HTML <DiHtml5 /></td>
                <td>» CSS <DiCss3 /></td>
              </tr>
              <tr>
                <td>» Bootstrap <DiBootstrap /></td>
                <td>» Figma <SiFigma /></td>
              </tr>
              <tr>
                <td>» Git <DiGit /></td>
                <td>» GitHub <DiGithubBadge /></td>
              </tr>
            </table>
          </div>
          <div className="card" id="about-card1">
            <p className="about-me-paragraph">I’m 23 years old, and I live in Fort Worth, Texas. I graduated with an English degree from The University of Texas at Austin in 2021. During college, my goal was to become a lawyer, but it wasn’t until graduating and preparing to apply for law school that I realized that wasn’t the path I wanted to take. 
            I majored in English because I am passionate about researching and writing about complex topics, but I was never sure how I would turn that passion into a career until I started coding.
            <br></br>
            <br></br>
            I started coding in 2022, and I fell in love with how it allows me to express my passion for writing in such a tangible way. After self-learning HTML and CSS, I enrolled in a web development bootcamp at Fullstack Academy to build foundational programming skills while learning the latest technologies. 
            I graduated from the bootcamp in December 2022, and my goal is to become a junior developer to contribute to real-world projects and continue growing as a programmer.
            <br></br>
            <br></br>
            Outside of web development, I enjoy playing soccer, collecting vinyl records, going to the gym, and hanging out with friends and family.
            </p>
          </div>
        </section>
      </div>
    )
  }

export default About;