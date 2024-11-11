import React from 'react'
import './Bg2Style.css'
import bg2 from '../Images/BG3.jpg'
function Bg2() {
  return (
    <div>
      <div className="BG-2">
        <img src={bg2} alt=''/>
        <div className='text'>
          <h1>Learn & Give Back</h1>
          <h2>With Our Conservation Camp</h2>
          <p>
          Volunteering across countries is an amazing way to gain new experiences, build cultural understanding, and make a positive impact globally. Opportunities for international volunteering are available through many organizations and platforms
          </p>
          <button href="/">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Bg2