import React from "react";
import "./contact.css";


function Contact() {
  return (
    <div id='contact-body'>
        <h4 id='contact-h4'>Get in touch</h4>
        <p id='contact-p'>I am currently open to new opportunities and am looking for Junior Web Developer and Junior Frontend Developer roles. I am also always looking to build new connections, so feel free to say hello!</p>
        <a id="contact-button" type="button" class="btn btn-outline-dark btn-sm" href = "mailto: austinmeyer1106@gmail.com" target="_blank" rel="noreferrer">Shoot me an email</a>
    </div>
  )
}

export default Contact;