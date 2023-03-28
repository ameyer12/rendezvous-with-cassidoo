import React from "react";
import swal from "sweetalert";
import './projects.css';
import theClosetImage from "./The Closet.png";
import acrossThePondSoccerImage from "./Across The Pond Soccer.png";
import fitnessTrackerImage from "./Fitness Tracker.png";
import strangersThingsImage from "./Stranger's Things.png";
import guessingGameImage from "./Guessing Game.png";
import toDoAppImage from "./To Do App.png";
import informationalWebsiteImage from "./Informational Website.png";
import underConstructionImage from "./Under Construction.png";
import "animate.css";

function Projects() {

    return (
      <div id="projects-body">  
      <div id="h3-container">
       <h3 id="projects-h3">Projects</h3>
        <div className="projects-container">
          <div class="card project-card">
            <img class="card-img-top" src={theClosetImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">The Closet</h5>
              <p class="card-text"> A full stack e-commerce clothing application.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and PostgreSQL
              </p>
              <a href="https://thecloset12.netlify.app" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/grace-shopper-starter" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={acrossThePondSoccerImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">Across The Pond Soccer</h5>
              <p class="card-text"> A web application for users to view the top scorers and assisters in Europe's top 5 soccer leagues.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, Bootstrap, JavaScript, and REST API
              </p>
              <a href="https://acrossthepondsoccer.netlify.app" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/AcrossThePondSoccer" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={fitnessTrackerImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">Fitness Tracker</h5>
              <p class="card-text"> A web app for users to build fitness routines and create custom workouts.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and PostgreSQL
              </p>
              <a href="https://wonderful-baklava-d81c60.netlify.app" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/FitnessTrackrFrontEnd" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={strangersThingsImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">Stranger's Things</h5>
              <p class="card-text"> A React CRUD app that allows users to register an account and buy and sell items on the marketplace.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> React, HTML, CSS, JavaScript, Material UI
              </p>
              <a href="https://sparkling-cranachan-ed1fb9.netlify.app" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/StrangersThings" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={guessingGameImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">Guessing Game</h5>
              <p class="card-text"> A guessing game web app. Users have 5 guesses to guess a random number between 1 and 100.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span>  HTML, CSS, JavaScript
              </p>
              <br></br>
              <a href="https://guessinggame1to100.netlify.app" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/guessing-game" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={toDoAppImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">To-Do List</h5>
              <p class="card-text">A web app that allows users to create and edit a to-do list with persistent data stored in a Firebase back-end.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> JavaScript, HTML, CSS, Bootstrap, Firebase
              <br></br>
              </p>
              <a href="https://todochecklistapp.netlify.app" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/to-do-app" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={informationalWebsiteImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">Informational Website</h5>
              <p class="card-text">My goal with this project was to further improve my design and UI optimization skills. All images were designed by me.
              <br></br>
              <br></br>
              <span id="project-bold-text">Tech stack:</span> JavaScript, React, HTML, CSS, Bootstrap, Canva
              <br></br>
              </p>
              <a href="https://losangelesmountains123.netlify.app/" class="btn btn-primary project-button visit-site-button">Visit Site</a>
              <a href="https://github.com/ameyer12/informational-website" class="btn btn-primary project-button">GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <img class="card-img-top" src={underConstructionImage} alt="Project"></img>
            <div class="card-body">
              <h5 class="card-title">DFW Sports Scanner</h5>
              <p id="under-construction-card-p" class="card-text">This app will help users identify upcoming DFW area professional sports games and locate the stadium/arena utilizing Google Maps.
              <br></br>
              <br></br>
              <br></br>
              </p>
              <a 
                href="/" class="btn btn-primary project-button visit-site-button" 
                onClick={(ev) => {
                  ev.preventDefault();
                  swal({
                    title: "Development in progress",
                    text: "Check back later!",
                    customClass: "swal-alert"
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
                    text: "Check back later!",
                    customClass: "swal-alert"
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

