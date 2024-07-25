import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = 'http://localhost:9020/restaurants/find';
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("restaurant data ->")
        console.log(data);
        setRestaurants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div class="container mt-4">
      <div class="row mb-5">
        <div class="col-lg-12 mx-auto" style={{backgroundColor: "white"}}>
            {/* <h5 class="font-weight-light mb-4 font-italic text-white">Custom rounded search bars with input group</h5> */}
            <div class="row row-cols-1 row-cols-md-2">
              <Carousel />
              {isLoading && <p>Loading restaurants...</p>}
              {error && <p>Error: {error}</p>}
              {!isLoading && !error && restaurants.length > 0 && (
                <div class="row justify-content-around">
                {restaurants.map((restaurant) =>  (
                    <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}  className="nav-link" style={{padding: "20px"}}>
                      <RestaurantCard
                        key={restaurant.id} 
                        name={restaurant.name} 
                        rating={restaurant.avgRating} 
                        description="This is a greate place for chill"
                        street={restaurant.street} 
                        city={restaurant.city} 
                        state={restaurant.state} 
                        restaurantImgUrl={restaurant.restaurantImgUrl} 
                      />
                    </Link>
                ))}
                </div>
              )}
              {!isLoading && !error && restaurants.length === 0 && <p>No restaurants found.</p>}
            </div>
          </div>
        </div>
      </div>
  );
}

export default RestaurantList;
