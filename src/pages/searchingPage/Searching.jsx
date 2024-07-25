import axios from 'axios';
import React, { useState } from 'react';
import { Container, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Header from '../../components/Header';

function Search() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  
    const apiUrl = `http://localhost:9020/restaurants/searchrestaurant/${query}`;
    const handleClick = (e)=>{
        e.preventDefault();
        axios.get(apiUrl)
        .then((res)=>{
            console.log(res.data);
            setSearchResults(res.data);
        })
        .catch(err => console.error(err));
    }

    return (
        <div class="container mt-5">
            <div class="row mb-5">
                <div class="col-lg-8 mx-auto">
                    {/* <h5 class="font-weight-light mb-4 font-italic text-white">Custom rounded search bars with input group</h5> */}
                    <div class="bg-white p-5 rounded shadow">
                        <form action="">
                            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                <div class="input-group">
                                    <input type="search" 
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="What're you searching for?" 
                                        aria-describedby="button-addon1" 
                                        class="form-control border-0 bg-light" />
                                    <div class="input-group-append">
                                        <button onClick={handleClick} class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            {searchResults.length === 0 ? (
                                <p>No results found.</p>
                            ) : (
                                <div>
                                    {searchResults.map((restaurant) =>  (
                                        <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}  className="nav-link" style={{padding: "20px"}}>
                                            <Card
                                                key={restaurant.id} 
                                                name={restaurant.name} 
                                                rating={restaurant.avgRating} 
                                                description="This is a greate place for chill"
                                                street={restaurant.street} 
                                                city={restaurant.city} 
                                                state={restaurant.state}  
                                            />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;