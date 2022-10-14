import React from 'react'
import data from '../../assets/data.png'
import './style.css'

export default function ScoreCard(props) {
  return (
    <div class="flex justify-between p-4 px-7 card items-center">
          <div className="score"><span className='emphasys'>{props.score}%</span><span>Score</span></div>
          <div className="numbers"><img src={data} alt="" srcset="" /></div>
          <div className="popular"><span className='emphasys'>{props.popular}º</span><span>Most Popular<br/>Teacher</span></div>
          <div className="classes-given"><span className='emphasys'>{props.classes}</span><span>Classes Given</span> </div>
      </div>
  )
}
