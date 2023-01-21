

import { useState } from "react"
import { Home, Navbar, About, Contact, Sidebar, RightSidebar, Projects, Project1, Project2, Project3, Project4, Project5, MobileFooter } from "./components";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/index.css";

function App() {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  const [currentProject, setCurrentProject] = useState("")

  if(spinner){
    setTimeout(() =>{
      spinner.style.display="none";
      setLoading(false);
    }, 2000)
  }

  const navigate = useNavigate();

  return (
    !loading && (
      <div className="body-container"> 
        <Navbar navigate={navigate} />
        <Home />
        <Sidebar />
        <RightSidebar />
        <About className="about" />
        <Projects className="projects" setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <Project1 setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <Project2 setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <Project3 setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <Project4 setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <Project5 setCurrentProject={setCurrentProject} currentProject={currentProject}/>
        <Contact className="contact" />
        <MobileFooter />
      </div>
    )
  )
}

export default App;