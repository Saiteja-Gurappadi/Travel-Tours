import React, { useState } from 'react'
import './AllProgramStyle.css'
import DestinyData from '../travel_data/DestinyData'
const AllPrograms = () => {
const d1 = DestinyData.filter((value)=> value.id >=20 & value.id <24)
const [show,setShow] = useState(false);
const display =()=>{
  setShow(!show)
}
  return (
    <div className='main-program'>
      <div className='page-programs'>
        <h1>All Programs</h1>
        <div className='btns-programs'>
          <button className='button-programs' onClick={display}>Working Holiday Programs</button>
          <button className='button-programs'>Volunteer Abroad</button>
          <button className='button-programs'> InternShip Programs</button>
          <button className='button-programs'>Courses & Study Abroad</button>
        </div>
        </div>
        {show && <div className='programs-details'>
          { d1.map((value)=>(<div className="details" key={value.id}>
              <img src={value.img} alt='' className='details-image'/>
              <p>{value.city}</p>
              <p className='matter'>Explore and learn everything</p>
          </div>
          ))
          }
        </div>}
      </div>
  )
}

export default AllPrograms