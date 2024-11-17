import React, { useRef, useState } from 'react'
import StoreData from '../travel_data/StoreData'
import './Store.css'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import{Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Store() {    
    const row2 = StoreData.filter((value) => value.item >=3)
    const row3 = StoreData.filter((value) => value.item >=6)
    const [count,setCount] = useState(0);
    // const [disable,setDisable] = useState(false);
    const hand = (item)=>{
        setCount(count+1)
        console.log("clicked",item)
    }
    const [cartDisplay,setCartDisplay] = useState(false);
    const cartClick =()=>{
        setCartDisplay(!cartDisplay)
    }
    const scroll =useRef();
  return (
    <div className='store-page'>
        <div className='store'>
        <div className='store-nav'>
            <div className='store-input'>
                <label><CiSearch/></label>
                <input type='text' placeholder='Search.............'/>
            </div>
            <div className='cart-div'>
            <Link to='' onClick={cartClick} ><CiShoppingCart className='store-icon'/><span>{count}</span></Link>
            </div>

        </div>
        <div className='store-comp' ref={scroll}>
            {
                row2?.map((value)=>(
                    <div className='row1' key={value.item}>
                        <img src={value.img} alt='' className='store-image'/>
                        <p>{value.name}</p>
                        <p>Rs/-{value.Price}</p>
                        
                        <button onClick={()=>hand(value.name)} className='button-store' >Add To Cart</button>
                    </div>
                ))

            }
        </div>
        <div className='store-comp'>
            {
                row3?.map((value)=>(
                    <div className='row1' key={value.item}>
                        <img src={value.img} alt='' className='store-image'/>
                        <p>{value.name}</p>
                        <p>Rs/-{value.Price}</p>
                        <button>Add To Cart</button>
                    </div>
                ))

            }
        </div>
        {cartDisplay && <div className='cart-details'>
            <h1>Your Cart </h1>
            
        </div>}
            <button className='cart-scroll-button-1'><FaArrowRight/></button>
            <button className='cart-scroll-button-2'><FaArrowRight/></button>
        </div>
        

    </div>
  )
}

export default Store