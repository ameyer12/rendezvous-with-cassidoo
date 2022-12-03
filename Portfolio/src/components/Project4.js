import React from "react";
import './project4.css';

function Project4() {
    return (
      <div id="project4-body" className="animate__animated animate__fadeInDown">
          <h4>Guessing Game</h4>
          <p id="project4-description">
            A guessing game web app. Users have 5 guesses to guess a random number betweeen 1 and 100. Tech stack: HTML, CSS, JavaScript.
          </p>
          <div>
            <ul id="project4-links-ul">
                <li id="project4-link1"><a id="project4-link1" href="https://guessinggame1to100.netlify.app">View Site</a></li>
                <li id="project4-link2"><a id="project4-link2" href="https://github.com/ameyer12/guessing-game">GitHub</a></li>
            </ul>
          </div>
      </div>
    )
  }

export default Project4;