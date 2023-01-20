import React, { useEffect } from "react";
import swal from 'sweetalert';
import './project3.css';

function Project3() {

  function resetProject3Section() {
    const project3Body = document.querySelector("#project3-body");
    project3Body.style.display = "none";
  }

  useEffect(() => {
    resetProject3Section();
  })

    return (
      <div id="project3-body" className="animate__animated animate__fadeInDown">
          <h4>The Closet</h4>
          <p id="project3-description">
            A full stack e-commerce clothing application. This project was developed as a group project, utilizing agile development practices. Tech stack: REACT, HTML/CSS, Bootstrap, Node, Express, PostgreSQL, Render.
          </p>
          <div>
            <ul id="project3-links-ul">
                <li id="project3-link1"><a id="project3-link1" href="https://thecloset12.netlify.app">View Site</a></li>
                <li id="project3-link2"><a id="project3-link2" href="https://github.com/ameyer12/grace-shopper-starter">GitHub</a></li>
            </ul>
          </div>
      </div>
    )
  }

export default Project3;