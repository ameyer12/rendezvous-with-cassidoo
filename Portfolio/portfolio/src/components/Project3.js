import React from "react";
import swal from 'sweetalert';
import './project3.css';

function Project3() {
    return (
      <div id="project3-body" className="animate__animated animate__fadeInDown">
          <h4>The Closet</h4>
          <p id="project3-description">
            A full stack e-commerce clothing application. This project was developed as a group project, utilizing agile devlopment practices. Tech stack: REACT, HTML/CSS, Bootstrap, Node, Express, PostgreSQL, Render.
          </p>
          <div>
            <ul id="project3-links-ul">
                <li id="project3-link1">
                    <a 
                        id="project3-link1"
                        onClick={() => {
                            swal("Development still in progress. Check back later!")
                        }
                    }
                    >View Site</a></li>
                <li id="project3-link2"><a id="project3-link2" href="https://github.com/Igein/grace-shopper-starter">GitHub</a></li>
            </ul>
          </div>
      </div>
    )
  }

export default Project3;