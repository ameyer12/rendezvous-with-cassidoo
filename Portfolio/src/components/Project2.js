import React from "react";
import './project2.css';

function Project2() {
    return (
      <div id="project2-body" className="animate__animated animate__fadeInDown">
          <h4>Fitness Tracker</h4>
          <p id="project2-description">
            A REACT app that allows users to register an account, build fitness routines, create custom workouts, and browse routines and activities created by other users. Tech stack: REACT, JSON, HTML, REST API, HTML/CSS, Bootstrap, Node, Express, and PostgreSQL.
          </p>
          <div>
            <ul id="project2-links-ul">
                <li id="project2-link1"><a id="project2-link1" href="https://wonderful-baklava-d81c60.netlify.app">View Site</a></li>
                <li id="project2-link2"><a id="project2-link2" href="https://github.com/ameyer12/FitnessTrackrFrontEnd">GitHub</a></li>
            </ul>
          </div>
      </div>
    )
  }

export default Project2;