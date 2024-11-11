import React, {useRef}from 'react'
import './InspirationStyle.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import User1 from '../Images/User1.jpg'
import User2 from '../Images/User2.jpg'
import User3 from '../Images/User3.jpg'
import User4 from '../Images/User4.avif'
function Inspiration() {
  const slider = useRef();
  let tx=0;
  const forWard = ()=>{
        if (tx > -50){
          tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
  }
  const backWard =()=>{
    if (tx < 0){
      tx+=25;
    }
     slider.current.style.transform=`translateX(${tx}%)`
  }
  return (
    <div className="inspiration">
        <h1>Inspirational Stories</h1>
        <h2>FROM OUR PARTICIPANTS</h2>
        <div className='travelers'>
        <button className='left' onClick={backWard}><FaArrowLeft /></button>
        <button className='right' onClick={forWard}><FaArrowRight/></button>
        </div>
        <div className='slider'>
            <ul ref={slider}>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                  <img src={User1} alt='' className='img'/>
                  <div>
                    <h3>Jack Daniels</h3>
                    <span>NewYork,USA</span>

                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                  <img src={User2} alt='' className='img'/>
                  <div>
                    <h3>Jack Daniels</h3>
                    <span>NewYork,USA</span>

                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                  <img src={User3} alt='' className='img'/>
                  <div>
                    <h3>Jack Daniels</h3>
                    <span>NewYork,USA</span>

                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                  <img src={User4} alt='' className='img'/>
                  <div>
                    <h3>Jack Daniels</h3>
                    <span>NewYork,USA</span>

                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Inspiration