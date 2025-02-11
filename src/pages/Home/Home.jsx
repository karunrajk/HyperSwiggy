import React, { useState } from 'react'
import './Home.css'
import Restaurant from '../../components/Restaurant/Restaurant'
import Header from '../../components/Header/Header';
import Navbar from '../../components/navbar/navbar';
export default function Home() {
    const [restaurant, setRestaurant] = useState("All");
  return (
    <div className='Home'>
        {/* <Home></Home> */}
        {/* <Header></Header> */}
        {/* <Navbar></Navbar> */}
        <Restaurant restaurant={restaurant} setRestaurant={setRestaurant}></Restaurant>
    </div>
  )
}
