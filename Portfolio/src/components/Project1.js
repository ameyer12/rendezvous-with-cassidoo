import React, { useEffect } from "react";
import './project1.css';

function Project1() {

  function resetProject1Section() {
    const project1Body = document.querySelector("#project1-body");
    project1Body.style.display = "none";
  }

  useEffect(() => {
    resetProject1Section();
  })

    return (
      <div id="project1-body" className="animate__animated animate__fadeInDown">
          <h4>Stranger's Things</h4>
          <p id="project1-description">
            A REACT CRUD application that allows users to register an account and buy and sell items on the marketplace. Tech stack: REACT, JSON, HTML, REST API, HTML/CSS, and Material UI.
          </p>
          <div>
            <ul id="project1-links-ul">
                <li id="project1-link1"><a id="project1-link1" href="https://sparkling-cranachan-ed1fb9.netlify.app">View Site</a></li>
                <li id="project1-link2"><a id="project1-link2" href="https://github.com/ameyer12/StrangersThings">GitHub</a></li>
            </ul>
          </div>
      </div>
    )
  }

export default Project1;