import React from 'react'
import Card from './Card.jsx'

import { data } from '../data/resume.js'
const Resume = () => {
  return (
    <>
      <div className="container">
        <div className="row gy-4 gy-md-0">
          <div className="col-12">
            <h2 className='text-center'>DENEYİM</h2>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className='resume-bg'>
              {data.map((val, id)=>{
                if(val.category ==="education"){
                  return(
                    <Card key={id} 
                    icon={val.icon} 
                    year={val.year}
                    desc={val.desc} 
                    title={val.title}/>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className='resume-bg'>
              {data.map((val, id)=>{
                if(val.category ==="experience"){
                  return(
                    <Card key={id} 
                    icon={val.icon} 
                    year={val.year}
                    desc={val.desc} 
                    title={val.title}/>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Resume
