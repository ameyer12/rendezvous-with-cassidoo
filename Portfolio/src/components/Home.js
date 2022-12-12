import React from "react";
import "./home.css";
import { Typewriter } from 'react-simple-typewriter';
import 'animate.css';

function Home() {
  return (
    <div id='home-body'>
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
        <p className="animate__animated animate__fadeInDown home-paragraph">I lorem ipsum lorem ipsum lorem ipsum hi this is cool lorem ipsum lorem
        <br></br>
        hi this is cool  lorem ipsum lorem ipsum lorem ipsum lorem ipsum hi this
        <br></br>
        ipsum lorem ipsum lorem ipsum hi this is cool lorem ipsum cool</p>
    </div>
  )
}

export default Home;