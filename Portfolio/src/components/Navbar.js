import React from "react";
import "./navbar.css"
import logoImage from "./Austin Meyer Logo.png";
import resumePDF from "./Austin Meyer Resume - 2022.pdf"

function Navbar({navigate}) {

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <a id="navbar-brand-name" class="navbar-brand" href="/"><img src={logoImage} alt="Austin Meyer Logo" width="80" height="80"/></a>
            <button id="mobile-button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a id="about-link" class="nav-link" href="#about-body">About</a>
            </li>
            <li class="nav-item">
                <a id="projects-link" class="nav-link" href="#projects-body">Projects</a>
            </li>
            <li class="nav-item">
                <a id="contact-link" class="nav-link" href="#contact-body">Contact</a>
            </li>
            <a id="resume-button" type="button" class="btn btn-outline-dark btn-sm" href={resumePDF} target="_blank" rel="noreferrer">Resume</a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;


