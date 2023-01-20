/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import swal from "sweetalert";
import './project5.css';

function Project5() {

  function resetProject5Section() {
    const project5Body = document.querySelector("#project5-body");
    project5Body.style.display = "none";
  }

  useEffect(() => {
    resetProject5Section();
  }, [])

    return (
      <div id="project5-body" className="animate__animated animate__fadeInDown">
          <h4 id="project5-h4">Across The Pond Soccer</h4>
          <p id="project5-description">
            A React web application for users to view the top scorers and assisters in Europe's top 5 soccer leagues. Tech stack: React, HTML/CSS, Bootstrap, JavaScript, and REST API.
          </p>
          <div>
            <ul id="project5-links-ul">
                <li id="project5-link1">
                    <a 
                    id="project5-link1"
                    onClick={() => {
                        swal("Development still in progress. Check back later!")
                        }
                    }                   
                    >View Site</a></li>
                <li id="project5-link2"><a id="project5-link2" href="https://github.com/ameyer12/AcrossThePondSoccer">GitHub</a></li>
            </ul>
          </div>
      </div>
    )
  }

export default Project5;