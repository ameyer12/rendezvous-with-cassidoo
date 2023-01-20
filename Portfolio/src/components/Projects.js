import React, {useEffect} from "react";
import swal from "sweetalert";
import './projects.css'

function Projects({setCurrentProject, currentProject}) {

    return (
      <div id="projects-body">
        <div id="h3-container">
          <h3 id="projects-h3">Projects</h3>
        </div>
          <ul className="projects-list">
            <li id="project1"
                onClick={() => { 

                  if(window.innerWidth > 400) {
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
                    } else if(window.innerWidth < 400){
                        const el = document.createElement('div')
                        el.innerHTML = "<a href='https://github.com/ameyer12/StrangersThings'>GitHub<br><br><a href='https://sparkling-cranachan-ed1fb9.netlify.app'>Website</a></a>"

                        swal({
                          title: "Check it out!",
                          content: el,
                        })
                    }
                  }
                }
            > » Stranger's Things</li>
            <li id="project2"
                  onClick={() => {

                    if(window.innerWidth > 400) { 
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
                    } else if(window.innerWidth < 400){
                        const el = document.createElement('div')
                        el.innerHTML = "<a href='https://github.com/ameyer12/FitnessTrackrFrontEnd'>GitHub<br><br><a href='https://wonderful-baklava-d81c60.netlify.app'>Website</a></a>"

                        swal({
                          title: "Check it out!",
                          content: el,
                        })
                    }
                  }
                }         
            > » Fitness Tracker</li>
            <li id="project3"
                  onClick={() => {
                    if(window.innerWidth > 400) { 
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
                      } else if(window.innerWidth < 400){
                          const el = document.createElement('div')
                          el.innerHTML = "<a href='https://github.com/ameyer12/grace-shopper-starter'>GitHub<br><br><a href='https://thecloset12.netlify.app'>Website</a></a>"

                          swal({
                            title: "Check it out!",
                            content: el,
                          })
                      }
                    }
                  }          
            > » The Closet</li>
            <li id="project4"
                  onClick={() => {
                    if(window.innderWidth > 400) {
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
                      } else if(window.innerWidth < 400){
                          const el = document.createElement('div')
                          el.innerHTML = "<a href='https://github.com/ameyer12/guessing-game'>GitHub<br><br><a href='https://guessinggame1to100.netlify.app'>Website</a></a>"
  
                          swal({
                            title: "Check it out!",
                            content: el,
                          })
                        }
                      }
                    }            
            > » Guessing Game</li>
            <li id="project5"
                onClick={() => {

                  if(window.innerWidth > 400) {
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
                  } else if(window.innerWidth < 400) {
                      const el = document.createElement('div')
                      el.innerHTML = "<a href='https://github.com/ameyer12/AcrossThePondSoccer'>GitHub<br><br><a href='http://google.com'>Website</a></a>"

                      swal({
                        title: "Check it out!",
                        content: el,
                      })
                    }
                  }
                }         
            
            
            > » Across The Pond Soccer</li>
          </ul>
      </div>
    )
  }

export default Projects;