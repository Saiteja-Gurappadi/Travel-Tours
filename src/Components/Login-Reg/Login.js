import React, { useState } from 'react'
import './LoginStyle.css'
function Login() {
    const [display,setDisplay] = useState(false);
    const handler=()=>{
        setDisplay(!display)
    }
    
    const [show,setShow] = useState(true);
    const close =()=>{
        setShow(!show)
    }
    const [details,setDetails] = useState();
    const handlerEmail = (e)=>{
        
    }   
  return (
    <div>
        {show && <div className='form-box' >
            {!display && <div className='login-box'>
                <h1>Login</h1>
                <div className='inputs'>
                    <div className='input'>
                    <label>Email</label>
                    <input type='email' required placeholder='Enter Email' onChange={handlerEmail}/>
                    </div>
                    <div className='input'>
                    <label>Password</label>
                    <input type='password' required placeholder='Enter Password'/>
                    </div>
                    <div className='rem-for'>
                        <label><input type='checkbox'/>Remember me</label>
                        <a href='/'>Forgot Password</a>
                    </div>
                    <div className='button-div'> 
                    <button type='submit' className='button'>Login</button>
                    </div>
                    <div className='reg'>
                        <p>Not Have An Account, <span onClick={handler}>Register</span></p>
                    </div>
                </div>
            </div>}
            {display && <div className='reg-box'>
                <h1>Register</h1>
                <div className='inputs'>
                    <div className='input'>
                    <label>Username</label>
                    <input type='name' required placeholder='Enter Username'/>
                    </div>
                    <div className='input'>
                    <label>Email</label>
                    <input type='email' required placeholder='Enter Email'/>
                    </div>
                    <div className='input'>
                    <label>Password</label>
                    <input type='password' required placeholder='Enter New Password'/>
                    </div>
                    <div className='button-div'> 
                    <button type='submit' className='button'>Register</button>
                    </div>
                    <div className='reg'>
                        <p>Already. Have An Account, <span onClick={handler}>Login</span></p>
                    </div>
                </div>
            </div>}
                <button className='close-btn' onClick={close}>X</button>
        </div>}
        
    </div>
  )
}

export default Login