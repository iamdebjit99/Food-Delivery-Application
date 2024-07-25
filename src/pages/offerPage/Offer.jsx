import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { Container, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import OfferCard from '../../components/OfferCard';

function Offer() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  
    const apiUrl = `http://localhost:9020/restaurants/getoffer`;
    useEffect(() => {
        axios.get(apiUrl)
        .then((res)=>{
            console.log(res.data);
            setSearchResults(res.data);
        })
        .catch(err => console.error(err));
    }, [])

    return (
        <div class="container mt-4">

          <Header />
          <div style={{height: "200px", width: "1000px", margin: "auto", paddingTop: "70px"}}>
            <MDBCard>
              <MDBCardHeader>Grab the best offer with eatExpress...</MDBCardHeader>
              <MDBCardBody>
                <MDBTypography blockquote className='mb-0'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className='blockquote-footer'>
                    Someone famous in <cite title='Source Title'>Source Title</cite>
                  </footer>
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div class="row mb-5" style={{marginTop: "30px"}}>
            <div class="col-lg-10 mx-auto">
                {/* <h5 class="font-weight-light mb-4 font-italic text-white">Custom rounded search bars with input group</h5> */}
                <div class="p-5 rounded shadow">
                    {searchResults.length > 0 && (
                      <div class="row justify-content-around">
                      {searchResults.map((restaurant) =>  (
                          <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}  className="nav-link" style={{padding: "20px"}}>
                            <OfferCard
                              key={restaurant.id} 
                              name={restaurant.name} 
                              rating={restaurant.avgRating} 
                              description={restaurant.offer}
                              street={restaurant.street} 
                              city={restaurant.city} 
                              state={restaurant.state} 
                              restaurantImgUrl={restaurant.restaurantImgUrl} 
                            />
                          </Link>
                      ))}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
      );
}

export default Offer;