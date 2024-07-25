import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

import MenuItem from "./MenuItem";

function MenuList(props){

    const id = props.id

    const [menu, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const apiUrl = 'http://localhost:9020/restaurants/items/'+id;
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

    return (
        <Container className="mt-5">
            <Row className="justify-content-around">
                {menu.map((item, index) => {
                    console.log("item details "+index+" "+item.itemName+" "+item.description+" "+item.price);
                    return (
                      <>
                        <MenuItem key={index}
                            id={index}
                            name={item.itemName}
                            description={item.description}
                            price={item.price}
                            itemImageUrl={item.itemImageUrl}
                        />
                        <Toaster
                          position="top-center"
                          reverseOrder={false}
                        />
                        </>
                    )
          
                })}
            </Row>

        </Container>
    )

}

export default MenuList;