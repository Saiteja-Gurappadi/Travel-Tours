import React from 'react'
import './Intern.Style.css'
import IT1 from '../Images/IT1.jpeg'
import IT2 from '../Images/IT2.jpeg'
import IT3 from '../Images/IT3.jpg'
import IT4 from '../Images/IT4.jpg'
import { FaArrowRight } from 'react-icons/fa'
function Intern() {
  return (
    <div className='mainbox-intern'>
        <div className='Intern'>
            <img src={IT1} alt='' className='image'/>
            <div className='InternText'>
                <h1>MULTI NATIONAL TEAM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. safansfafj susi  sfjsfaf </p>
                <button><FaArrowRight/></button>
            </div>
        </div>
        <div className='Intern'>
            <img src={IT2} alt=''  className='image'/>
            <div className='InternText'>
                <h1>INTERCULTURAL LEARNING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button><FaArrowRight/></button>
            </div>
        </div>
        <div className='Intern'>
            <img src={IT3} alt='' className='image'/>
            <div className='InternText'>
                <h1>COVID 19 PRECAUTIONS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button><FaArrowRight/></button>
            </div>
        </div>
        <div className='Intern'>
            <img src={IT4} alt=''  className='image'/>
            <div className='InternText'>
                <h1>LATEST NEWS TITLE OF AN ARTICLE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button><FaArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Intern