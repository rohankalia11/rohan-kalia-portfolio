import React from 'react'
import Projectitem from '../components/Projectitem'

import {projectList} from '../helpers/ProjectList'

import "../styles/Projects.css"


function Projects() {
  return (
    <div className='projects'>
      <h1 style={{color:'white'}}>My personal Projects</h1>
      <div className='projectList'>

        {projectList.map((project,idx) => {
          return <Projectitem id = {idx} name={project.name} image={project.image}/>
        })}
     

      </div>
    </div>
  )
}

export default Projects