import React from 'react'

const Card = (props) => {
  return (
    <div className='resume-card'>
        <div className='card-header'>
          <i className={props.icon}></i>
          <span >{props.year}</span>
        </div>
        <div className="card-title">
          <span>{props.title}</span>
        </div>
        <div className="card-footer">
          <span>{props.desc}</span>
        </div>
    </div>
  )
}

export default Card
