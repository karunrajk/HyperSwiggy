import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodCard from '../FoodCard/FoodCard'

const FoodDisplay = ({restName}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='FoodDisplay' id='FoodDisplay'>
    {/* <h2> This is my menu byatchhhh</h2> */}
    <div className='FoodListDisplay'>
        {   food_list.map((item, index)=>{
            {/* console.log("Item image:", item.image);  */}
            console.log("testing restaurant name");
            console.log(restName);
            console.log(item.category);
            if (restName === item.category){

            return <FoodCard key={index} price={item.price} id={item._id} name={item.name} description={item.description}  img={item.image}></FoodCard> 
            }
        })
            // return <div></div>

        }

    </div>
      
    </div>
  )
}

export default FoodDisplay
