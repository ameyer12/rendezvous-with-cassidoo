import React from "react";
import "./home.css";
import "./about.css";
import "./contact.css";
import { Typewriter } from 'react-simple-typewriter';
import 'animate.css';

function Home() {

  return (
    <div>
    <section id='home-body'>
        <p className="animate__animated animate__fadeInDown home-p">Hi, my name is</p>
        <h1 className="animate__animated animate__fadeInDown home-h1">Austin Meyer</h1> 
        <h2 className="animate__animated animate__fadeInDown home-h2">
          <span>
            <Typewriter 
                cursor
                cursorStyle= "|"
                typeSpeed={80}
                words={['I build things for the web.']}
              />
          </span>
        </h2>
        <p className="animate__animated animate__fadeInDown home-paragraph">I'm a junior software engineer specializing in front end development,
        and I'm currently looking for junior front-end and full-stack developer positions.
        Welcome to my portfolio. It was built using React, HTML, CSS/Bootstrap, and JavaScript.</p>
    </section>
    </div>
  )
}

export default Home;