import React from 'react'
import {VerticalTimeline,
VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css"


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      
      <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date='2021-Present'
      iconStyle={{background: '#e9d35b',color:'#fff'}}
      icon={<WorkIcon/>}>
      <h3 className='vertical-timeline-element-title'>Tata Consultancy Services</h3>
      <h4 className='vertical-timeline-element-subtitle'>System Engineer</h4>
      <p><ul>
        
        <li>
        Domain ‐ Retail
        </li>
        <li>
        Pyspark development
          Worked on developing the code for EMR for processing the large dataset files using Pyspark with AWS SNS for alerting.
          Result : Processed the large file within given SLA time.
        </li>
        <li>
        Python web development (Backend)
Ordering System : Web backend development using python-flask in AWS-lambda for placing orders which is consumed by the frontend. 
Result : Automated the process of creating the orders manually and completed the project within the given SLA.
        </li>
      </ul>
</p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date='2021-Present'
      iconStyle={{background: '#e9d35b',color:'#fff'}}
      icon={<WorkIcon/>}>
      <h3 className='vertical-timeline-element-title'>Tata Consultancy Services</h3>
      <h4 className='vertical-timeline-element-subtitle'>Assitant System Engineer</h4>
      <p><ul>
        <li>
        Domain ‐ Retail
        </li>
        <li>
        Python development
Develop microservices for s3 file movement , file conversion ,data manipulation and data merging.
Result : Able to build concurrent services and deliver them within a given SLA.
        </li>
      </ul>
</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className='vertical-timeline-element--education'
      date='2010-2014'
      iconStyle={{background: '#3e497a',color:'#fff'}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Amritsar College of Engg. & Tech, Amritsar</h3>
      <p>Bachelor of Technology, Computer Science - 7.5 CGPA</p>
      </VerticalTimelineElement>


      <VerticalTimelineElement
      className='vertical-timeline-element--education'
      date='2010-2014'
      iconStyle={{background: '#3e497a',color:'#fff'}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Fatima Sr. Sec. School, Gonda</h3>
      <p>Class 12 - 80.4 %</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className='vertical-timeline-element--education'
      date='2010-2014'
      iconStyle={{background: '#3e497a',color:'#fff'}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Fatima Sr. Sec. School, Gonda</h3>
      <p>Class 10 - 8.8 CGPA</p>
      </VerticalTimelineElement>
      
      </VerticalTimeline>
      </div>
  )
}

export default Experience