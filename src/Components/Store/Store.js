import React from 'react'
import StoreData from '../travel_data/StoreData'
import './Store.css'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import{Link} from 'react-router-dom'

function Store() {    
    const row2 = StoreData.filter((value) => value.item >=3)
    const row3 = StoreData.filter((value) => value.item >=6)
  return (
    <div className='store-page'>
        <div className='store'>
        <div className='store-nav'>
            <div className='store-input'>
                <label><CiSearch/></label>
                <input type='text' placeholder='Search.............'/>
            </div>
            <div className='cart-div'>
            <Link to='/'><CiShoppingCart className='store-icon'/>{}</Link>
            </div>

        </div>
        <div className='store-comp'>
            {
                row2?.map((value)=>(
                    <div className='row1' key={value.item}>
                        <img src={value.img} alt='' className='store-image'/>
                        <p>{value.name}</p>
                        <p>Rs/-{value.Price}</p>
                        
                        <button>Add To Cart</button>
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
        <div className='cart-details'>
            <h1>Your Cart </h1>
            
        </div>
        </div>
        

    </div>
  )
}

export default Store