import React from "react";
import swal from "sweetalert";
import './projects.css';
import theClosetImage from "./The Closet.png";
import acrossThePondSoccerImage from "./Across The Pond Soccer.png";
import fitnessTrackerImage from "./Fitness Tracker.png";
import strangersThingsImage from "./Stranger's Things.png";
import guessingGameImage from "./Guessing Game.png";
import underConstructionImage from "./Under Construction.png";
import "animate.css";

function Projects() {

    return (
      <div id="projects-body">  
      <div id="h3-container">
       <h3 id="projects-h3">Projects</h3>
        <div className="projects-container">
          <div class="card" id="project-card">
            <img class="card-img-top" src={theClosetImage} alt="Project Image"></img>
            <div class="card-body">
              <h5 class="card-title">The Closet</h5>
              <p class="card-text"> A full stack e-commerce clothing application.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and PostgreSQL
              </p>
              <a href="https://thecloset12.netlify.app" class="btn btn-primary project-button" id="visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/grace-shopper-starter" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card" id="project-card">
            <img class="card-img-top" src={acrossThePondSoccerImage} alt="Project Image"></img>
            <div class="card-body">
              <h5 class="card-title">Across The Pond Soccer</h5>
              <p class="card-text"> A web application for users to view the top scorers and assisters in Europe's top 5 soccer leagues.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, Bootstrap, JavaScript, and REST API
              </p>
              <a href="https://acrossthepondsoccer.netlify.app" class="btn btn-primary project-button" id="visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/AcrossThePondSoccer" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card" id="project-card">
            <img class="card-img-top" src={fitnessTrackerImage} alt="Project Image"></img>
            <div class="card-body">
              <h5 class="card-title">Fitness Tracker</h5>
              <p class="card-text"> A web app for users to build fitness routines and create custom workouts.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and PostgreSQL
              </p>
              <a href="https://wonderful-baklava-d81c60.netlify.app" class="btn btn-primary project-button" id="visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/FitnessTrackrFrontEnd" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card" id="project-card">
            <img class="card-img-top" src={strangersThingsImage} alt="Project Image"></img>
            <div class="card-body">
              <h5 class="card-title">Stranger's Things</h5>
              <p class="card-text"> A React CRUD app that allows users to register an account and buy and sell items on the marketplace.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, JavaScript, Material UI
              </p>
              <a href="https://sparkling-cranachan-ed1fb9.netlify.app" class="btn btn-primary project-button" id="visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/StrangersThings" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card" id="project-card">
            <img class="card-img-top" src={guessingGameImage} alt="Project Image"></img>
            <div class="card-body">
              <h5 class="card-title">Guessing Game</h5>
              <p class="card-text"> A guessing game web app. Users have 5 guesses to guess a random number between 1 and 100.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span>  HTML, CSS, JavaScript
              </p>
              <br></br>
              <a href="https://guessinggame1to100.netlify.app" class="btn btn-primary project-button" id="visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/guessing-game" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card" id="project-card">
            <img class="card-img-top" src={underConstructionImage} alt="Project Image"></img>
            <div class="card-body">
              <h5 class="card-title">To-Do List</h5>
              <p class="card-text"> A web app that allows users to create and edit a to-do list. Develpment is currently in progress.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span>  HTML, CSS, JavaScript
              </p>
              <br></br>
              <a 
              href="/" class="btn btn-primary project-button" 
              id="visit-site-button"
              onClick={(ev) => {
                ev.preventDefault();
                swal({
                  title: "Development in progress",
                  text: "Check back later!"
                });
              }}
              >
              Visit Site</a>
              <a 
              href="/" 
              class="btn btn-primary project-button"
              onClick={(ev) => {
                ev.preventDefault();
                swal({
                  title: "Development in progress",
                  text: "Check back later!"
                });
              }}
              >
              GitHub</a>
            </div>
          </div>
          </div>     
        </div>
      </div>             
    )
  }

export default Projects;

