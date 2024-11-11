import React from 'react'
import './Programstyle.css'
import  TravelData  from '../travel_data/TravelData'
import { FaArrowRight } from "react-icons/fa";


const Programs = () => {
    const pf1 = TravelData.filter(
    (value)=>value.id <5
    )
    const pf2 = TravelData.filter(
        (value)=>value.id >=5
        )
  return (
    <div>
        <div className="program-1">
            <div className="main-list-program">
                <h3>
                    Working Holidays
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
                            <label key={value.id}>{value.city}</label>
                        </div>
                        )
                    )
                }
            </div>

        </div>
        <div className="program-2">
            <div className="main-list-program">
                <h3>
                    Voluntering 
                </h3>
                <h4>
                    ABROAD
                </h4>
                <p>A wide of range of meaningul Voluntering options with Charitable Organizations World Wide!</p>
                <label><button><FaArrowRight /></button> EXPLORE ALL PROGRAMS</label>
            </div>
            <div className="data-2">
                {
                    pf2?.map((value) => (
                        <div key={value.id} className='data-main'>
                            
                            <img 
                                src={value.img} 
                                alt='' className='img' 
                            />
                            <label key={value.id}>{value.city}</label>
                        </div>
                        )
                    )
                }
            </div>

        </div>     
    </div>
  )
}

export default Programs