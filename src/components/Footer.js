import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"

import  Link  from '@material-ui/core/Link'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>

        <Link href='http://linkedin.com/in/rohan-kalia-a80bba138' target='_blank'>
        <LinkedInIcon></LinkedInIcon>
          </Link>

            

        </div>
        <p> &copy; 2024 Rohan Kalia</p>
        
        </div>
  )
}

export default Footer