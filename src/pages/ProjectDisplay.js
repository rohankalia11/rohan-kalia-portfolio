import React from 'react'
import {useParams} from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css'
import  Link  from '@material-ui/core/Link'

function ProjectDisplay() {

    const { id }  = useParams();

    const project = projectList[id];

  return (
    <div className='project'>

        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>
        Tech used : {project.techused}
        </p>

       <Link href='https://github.com/rohankalia11' target='_blank'>
       <GitHubIcon/>
          </Link> 
        

    </div>
  )
}

export default ProjectDisplay