import React, { useState } from 'react'
import './FoodCard.css'
import { assets } from '../../assets/assets'
import AddButton from '../AddButton/AddButton'

const FoodCard = ({id,name,price,description,img}) => {


    const [itemCount, setItemCount] = useState(0);
    const handleClick=()=>{
        console.log("clickedddddd");
    }

  return (
    <div className='FoodItem'>
        <div className='FoodItemContainer'>
            <div className='LeftSection'>
                <img className='VegImage' src={assets.rating} width="20px" height="20px"></img>
                <h3 className='Title'>{name}</h3>
                <p className='price'>{"Rs. "+price}</p>
                <p className='desctiption'>{description}</p>
            </div>
            <div className='RightSection'>
                <div className='image-container'>
                <img className='FoodImage' src={img} alt={name}></img>
                {/* <div className='AddButton'> */}
                <div className='button-overlay'>
                <AddButton 
                    onClick ={handleClick}
                    itemId={id}
                    // onClick= {()=>setItemCount(itemCount+1)}
                    // count={itemCount} 
                    >
                    
                </AddButton>
                </div>
                {/* </div> */}
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default FoodCard
