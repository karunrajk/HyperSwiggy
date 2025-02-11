import React from 'react'
import { assets } from '../../assets/assets'
import './Restaurant.css'
import { menu_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

// export default function Restaurant() {
//   return (

//     <div className='RestaurantList'>

//         {
//             <div className='Restaurant'>
//                 <div>
//                     <div className='RestaurantTop'>
//                         <h1>₹300 OFF ABOVE ₹1699</h1>
//                     </div>
//                     <div className='RestaurantBottom'>
//                         <h2> Pizzahut</h2>
//                         <div className='Rating'>
//                             <img src={assets.rating} className='RatingImg' />
//                             <p>3.8 * 45-55min</p>
//                         </div>
//                         <p> Pizzas & Dosas</p>
//                     </div>

//                 </div>
            
//             </div>
//         }
//     </div>            
//   )
// }

const Restaurant =({restaurant, setRestaurant})=> {

    const navigate = useNavigate();

    // const handleRestaurantClick = (item) => {
    //     setRestaurant(prev => prev === item.menu_name ? "All" : item.menu_name);
    //     navigate(`/restaurantpage/${item.menu_name}`);
    // };

        return (
            <div>
                <div className='RestaurantList' id='RestaurantList'>
                {menu_list.map((item, index)=>{
                    return(
                        <div key={index} className='Restaurant' 
                             onClick={()=>{
                             setRestaurant(prev=> prev===item.menu_name?"All":item.menu_name);
                             const path = `/restaurantpage/${item.menu_name}`;
                             console.log('Navigating to:', path);
                             navigate(`/RestaurantPage/${item.menu_name}`);
                             }}
                             >
                            <div className={restaurant===item.menu_name?"Active":"RestaurantTop"}>
                                {/* <div className={restaurant===item.menu_name?"Active":""}>  */}
                                    <img src={item.menu_image}></img>
                                    <h1>{item.menu_offer}</h1>
                                {/* </div> */}
                            </div>
                            <div className='RestaurantBottom'>
                                <h2> {item.menu_name}</h2>
                                <div className='Rating'>
                                    <img src={assets.rating} className='RatingImg' />
                                    <p>{item.menu_rating}</p>
                                </div>
                                <div className='category-text'> {item.menu_category}</div>
                            </div>
                        </div>    
                    )
                }
                )

                }
                </div>
            </div>
        )
}

export default Restaurant