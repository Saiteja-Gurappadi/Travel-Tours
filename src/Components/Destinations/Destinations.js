import React, { useRef } from 'react'
import './Destinations.css'
import DestinyData from '../travel_data/DestinyData'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Destinations = () => {
  const d1 = DestinyData.filter((value)=> value.id <= 8);
  const d2 = DestinyData.filter((value)=> value.id > 8);
  const d3 = DestinyData.filter((value)=> value.id >= 14);
  const d4 = DestinyData.filter((value)=> value.id >= 20);
  const scroll = useRef();
  let tx=0;
const back = ()=>{
  tx =tx -150;
  scroll.current.style.transform=`translateX(${tx}%)`
}
const front= ()=>{
tx =tx +150;
  scroll.current.style.transform=`translateX(${tx}%)`
}
  return (
    <div className='page'>
        <div className='Conti'>
            <div className='Conti-name'>
                <h1>Asia</h1>
                <p>Some popular destinations in Asia include Japan, Thailand, Vietnam, India, China, Indonesia, and Cambodia…</p>
                <div className='btns'>
                <button className='leftbtn' onClick={back}><FaArrowLeft/></button>
                <button className='rightbtn' onClick={front}><FaArrowRight/></button>
                </div>
            </div>
    
            <div className='Conti-places' ref={scroll}>
            {
                d1?.map((value)=>(
                  <div key={value.id} className='countrys' >
                    <p>{value.city}</p>
                    <img src={value.img} alt='' className='c-image'/>
                    </div>
                ))
            }
            </div>
        </div>
        <div className='Conti'>
            <div className='Conti-name'>
                <h1>Europe</h1>
                <p>Some popular destinations in Asia include Japan, Thailand, Vietnam, India, China, Indonesia, and Cambodia…</p>
                <div className='btns'>
                <button className='leftbtn' onClick={back}><FaArrowLeft/></button>
                <button className='rightbtn' onClick={front}><FaArrowRight/></button>
                </div>
            </div>
            <div className='Conti-places'>
            {
                d2?.map((value)=>(
                  <div key={value.id} className='countrys' ref={scroll}>
                    <p>{value.city}</p>
                    <img src={value.img} alt='' className='c-image'/>
                    </div>
                ))
            }
            </div>
        </div>
        <div className='Conti'>
            <div className='Conti-name'>
                <h1>America</h1>
                <p>Some popular destinations in Asia include Japan, Thailand, Vietnam, India, China, Indonesia, and Cambodia…</p>
                <div className='btns'>
                <button className='leftbtn' onClick={back}><FaArrowLeft/></button>
                <button className='rightbtn' onClick={front}><FaArrowRight/></button>
                </div>
            </div>
            <div className='Conti-places'>
            {
                d3?.map((value)=>(
                  <div key={value.id} className='countrys' ref={scroll}>
                    <p>{value.city}</p>
                    <img src={value.img} alt='' className='c-image'/>
                    </div>
                ))
            }
            </div>
            
        </div>
        <div className='Conti'>
            <div className='Conti-name'>
                <h1>Africa</h1>
                <p>Some popular destinations in Asia include Japan, Thailand, Vietnam, India, China, Indonesia, and Cambodia…</p>
                <div className='btns'>
                <button className='leftbtn' onClick={back}><FaArrowLeft/></button>
                <button className='rightbtn' onClick={front}><FaArrowRight/></button>
                </div>
            </div>
            <div className='Conti-places'>
            {
                d4?.map((value)=>(
                  <div key={value.id} className='countrys' ref={scroll}>
                    <p>{value.city}</p>
                    <img src={value.img} alt='' className='c-image'/>
                    </div>
                ))
            }
            </div>
            
        </div>
        <div className='Conti'>
            <div className='Conti-name'>
                <h1>Australia</h1>
                <p>Some popular destinations in Asia include Japan, Thailand, Vietnam, India, China, Indonesia, and Cambodia…</p>
                <div className='btns'>
                <button className='leftbtn' onClick={back}><FaArrowLeft/></button>
                <button className='rightbtn' onClick={front}><FaArrowRight/></button>
                </div>
            </div>
            <div className='Conti-places'>
            {
                d4?.map((value)=>(
                  <div key={value.id} className='countrys' ref={scroll}>
                    <p>{value.city}</p>
                    <img src={value.img} alt='' className='c-image'/>
                    </div>
                ))
            }
            </div>
            
        </div>
        
    </div>
  )
}

export default Destinations