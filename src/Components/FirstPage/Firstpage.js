import React,{useState}from 'react'
import '../FirstPage/Firstpage.css'
import Login from '../Login-Reg/Login';
import Inspiration from '../Inspirational/Inspiration';
import Intern from '../Intern/Intern';
import Bg2 from '../BG2/Bg2';
import InternShips from '../Internships/InternShips';
import Programs from '../Programs/Programs';
const Firstpage = () => {
const [show,setShow] = useState(false);
const handler = ()=>{
  setShow(!show)
}
  return (
    <div>
        <div className='main-page'>
            <div className='page-content'>
                <h1>PROVIDING
                    <br/>
                    ABROAD 
                <span>Travels</span>
                </h1>
                {/* <h2>Inspirational</h2> */}
                <p>Giving you the opportunity to give back,learn and grow as you experiance <br/> some of the most amazing places on earth</p>
                <button className='btn' onClick={handler}>Login/Register</button>
            </div>
            
            {show && <Login/>}
            
        </div>
      <Programs/>
      <Bg2/>
      <InternShips/>
      <Intern/>
      <Inspiration/>
        
    </div>
       
  )
}

export default Firstpage