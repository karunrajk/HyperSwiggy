import React from 'react'
import './RestaurantPage.css'
import Header from '../../components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { useParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import Navbar from '../../components/navbar/navbar'

const RestaurantPage = () => {

    const {restaurantName} = useParams();
  
    const handleSearch = (searchTerm) => {
        // Handle the search logic here
        console.log('Searching for:', searchTerm);}
        
  
    console.log("testing restaurant name123", restaurantName);
    

  
  return (
    <div>
      {/* <Header></Header> */}
      {/* <Navbar></Navbar> */}
      <SearchBar onSearch={handleSearch}></SearchBar>
      <FoodDisplay restName={restaurantName}></FoodDisplay>
    </div>
  )
}

export default RestaurantPage
