import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"

import  Link  from '@material-ui/core/Link'

function Home() {
  return (
    <div className='home'>
     
      <div className='about'>
        <h2>ROHAN KALIA</h2>
        <div className='prompt'>
          <p>Experienced engineer with a strong background in Python development and AWS. With over 3 years of experience, I have successfully delivered projects on time and within budget and collaborated with cross-functional teams.</p>
          
          <Link href='http://linkedin.com/in/rohan-kalia-a80bba138' target='_blank'>
          <LinkedInIcon></LinkedInIcon>
          </Link>

          <Link style={{cursor: 'pointer'}} onClick={() => window.location = 'mailto:rohankalia1110@gmail.com'} target='_blank'>
          
          
          <EmailIcon></EmailIcon>
          </Link>
          <Link href='https://github.com/rohankalia11' target='_blank'>
          <GithubIcon></GithubIcon>
          </Link>
        </div>
      </div>
      
      <div className='skills'>
        <h1>SKILLS</h1>
        <ol className='list'>
        <li className='item'>
        <h2>FrontEnd</h2>
        <span>React</span>
        </li>
        <li className='item'>
        <h2>BackEnd</h2>
        <span>Python, Flask Framework, Javascript</span>
        </li>
        <li className='item'>
        <h2>Python libraries</h2>
        <span>pandas, numpy, pyspark, boto3, requests, mock, unittest</span>
        </li>
        <li className='item'>
        <h2>Database </h2>
        <span>postgreSQL</span>
        </li>
        <li className='item'>
        <h2>Data Structures and Algorithm</h2>
        <span></span>
        </li>
        <li className='item'>
        <h2>Object oriented programming</h2>
        <span>C++, python</span>
        </li>
        <li className='item'>
        <h2>AWS cloud services</h2>
        <span>lambda, ECS, EC2, EMR, SNS, SQS, S3, Cloudwatch log, Cloudwatch rule</span>
        </li>
        <li className='item'>
        <h2>DevOps  </h2>
        <span>Jenkins, Terraform, Docker,SonarQube</span>
        </li>
        <li className='item'>
        <h2>Agile </h2>
        <span></span>
        </li>
      
        </ol>
      </div>
    </div>
  )
}

export default Home
 