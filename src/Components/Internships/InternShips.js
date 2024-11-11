import React from 'react'
import InternStudy from '../travel_data/InternStudy'
import '../Programs/Programstyle.css'
import { FaArrowRight } from 'react-icons/fa'

function InternShips() {
    const pf1= InternStudy.filter(
        (value)=>value.id <5
    )
    const pf2 = InternStudy.filter(
        (value)=>value.id >=5 
    )
  return (
    <div className="internship">
        <div className="program-1">
            <div className="main-list-program">
                <h3>
                    InternShip
                </h3>
                <h4>
                    Programs
                </h4>
                <p>Working Holidays accross the Countries! In NewYork,Japan,Germany,China. Try Something different!</p>
                <label><button><FaArrowRight/></button> EXPLORE ALL PROGRAMS</label>
            </div>
            <div className="data">
                {
                    pf1?.map((value) => (
                        <div key={value.id} className='data-main'>
                            
                            <img 
                                src={value.img} 
                                alt='' className='img'
                            />
                            <label>{value.work}</label>
                        </div>
                        )
                    )
                }
            </div>

        </div>
        <div className="program-2">
            <div className="main-list-program">
                <h3>
                    Courses & Study
                </h3>
                <h4>
                    ABROAD
                </h4>
                <p>A wide of range of meaningul Voluntering options with Charitable Organizations World Wide!</p>
                <label><button><FaArrowRight/></button> EXPLORE ALL PROGRAMS</label>
            </div>
            <div className="data">
                {
                    pf2?.map((value) => (
                        <div key={value.id} className='data-main'>
                            
                            <img 
                                src={value.img} 
                                alt='' className='img'
                            />
                            <label>{value.work}</label>
                        </div>
                        )
                    )
                }
            </div>

        </div>
    </div>
  )
}

export default InternShips