import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import MenuList from "../../components/MenuList";

function Restaurant() {
    const {id} = useParams();

    const [restaurant, setRestaurants] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const apiUrl = 'http://localhost:9020/restaurants/'+id;
    console.log(apiUrl)
  
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
          console.log("data")
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

    console.log("restaurant object ");
    console.log(restaurant)

    return (
        <div>
            <Header />
            {isLoading && <p>Loading restaurants...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && !error && (
            <Container>
              <div style={{height: "200px", width: "1000px", margin: "auto", paddingTop: "100px"}}>
                <MDBCard>
                  <MDBCardHeader>{restaurant.name}</MDBCardHeader>
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
              {console.log("id :"+restaurant.id)}

              <MenuList id={restaurant.id}/>
              
            </Container>
            )}
            
        </div>

  );
}

export default Restaurant;