import React from "react";
import './projects.css'

function Projects({setCurrentProject, currentProject}) {

    return (
      <div id="projects-body">
          <h3 id="projects-h3">Projects</h3>
          <ul  className="projects-list">
            <li id="project1"
                onClick={() => { 
                  const project1Body = document.getElementById("project1-body");
                  const project2Body = document.getElementById("project2-body");
                  const project3Body = document.getElementById("project3-body");
                  const project4Body = document.getElementById("project4-body");
                  const project5Body = document.getElementById("project5-body");
                  
                    project2Body.style.display = "none";
                    project3Body.style.display = "none";
                    project4Body.style.display = "none";
                    project5Body.style.display = "none";

                  if(project1Body.style.display === "" || project1Body.style.display === "none" || project1Body.style.display === "undefined" || project1Body.style.display === "null") {
                    project1Body.style = "display:block"
                  } else if(project1Body.style.display !== ""){
                    project1Body.style = "display:none"
                    }
                  }
                }
            > » Stranger's Things</li>
            <li id="project2"
                  onClick={() => {

                    const project1Body = document.getElementById("project1-body");
                    const project2Body = document.getElementById("project2-body");
                    const project3Body = document.getElementById("project3-body");
                    const project4Body = document.getElementById("project4-body");
                    const project5Body = document.getElementById("project5-body");

                    project1Body.style.display = "none";
                    project3Body.style.display = "none";
                    project4Body.style.display = "none";
                    project5Body.style.display = "none";

                    if(project2Body.style.display === "" || project2Body.style.display === "none") {
                      project2Body.style = "display:block"
                    } else if(project2Body.style.display !== ""){
                      project2Body.style = "display:none"
                    }
                  }
                }           
            > » Fitness Tracker</li>
            <li id="project3"
                  onClick={() => {
                 
                    const project1Body = document.getElementById("project1-body");
                    const project2Body = document.getElementById("project2-body");
                    const project3Body = document.getElementById("project3-body");
                    const project4Body = document.getElementById("project4-body");
                    const project5Body = document.getElementById("project5-body");

                    project1Body.style.display = "none";
                    project2Body.style.display = "none";
                    project4Body.style.display = "none";
                    project5Body.style.display = "none";
          
                    if(project3Body.style.display === "" || project3Body.style.display === "none") {
                      project3Body.style = "display:block"
                    } else if(project3Body.style.display !== ""){
                      project3Body.style = "display:none"
                      }
                    }
                  }           
            > » The Closet</li>
            <li id="project4"
                  onClick={() => {

                    const project1Body = document.getElementById("project1-body");
                    const project2Body = document.getElementById("project2-body");
                    const project3Body = document.getElementById("project3-body");
                    const project4Body = document.getElementById("project4-body");
                    const project5Body = document.getElementById("project5-body");

                    project1Body.style.display = "none";
                    project2Body.style.display = "none";
                    project3Body.style.display = "none";
                    project5Body.style.display = "none";
          
                    if(project4Body.style.display === "" || project4Body.style.display === "none") {
                      project4Body.style = "display:block"
                    } else if(project4Body.style.display !== ""){
                      project4Body.style = "display:none"
                      }
                    }
                  }                
            > » Guessing Game</li>
            <li id="project5"
                onClick={() => {

                  const project1Body = document.getElementById("project1-body");
                  const project2Body = document.getElementById("project2-body");
                  const project3Body = document.getElementById("project3-body");
                  const project4Body = document.getElementById("project4-body");
                  const project5Body = document.getElementById("project5-body");

                  project1Body.style.display = "none";
                  project2Body.style.display = "none";
                  project3Body.style.display = "none";
                  project4Body.style.display = "none";
  
                if(project5Body.style.display === "" || project5Body.style.display === "none") {
                  project5Body.style = "display:block"
                } else if(project5Body.style.display !== ""){
                  project5Body.style = "display:none"
                  }
                }
            }                
            
            
            > » Across The Pond Soccer</li>
          </ul>
      </div>
    )
  }

export default Projects;