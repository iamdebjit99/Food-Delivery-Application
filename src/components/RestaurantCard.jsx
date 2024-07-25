import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./restaurantCard.css"



function RestaurantCard(props){
    // const url = `${props.restaurantImgUrl}`;


    const image = props.restaurantImgUrl;

    return (
            <div class="card">
                <img style={{height: "250px", width: "300px"}} class="card-img-top img-size" src={image} alt="..." />
                <div class="card-body">
                    <h5 class="card-title" /*style={{color: "rgb(0, 91, 228)"}}*/>{props.name}</h5>
                    
                    {/* <p class="card-text">This is a good place for chill</p> */}
                    
                    
                    <h6><FontAwesomeIcon icon={faStar} />{" "+props.rating} </h6>
                    <p style={{color: "black"}} >
                        {props.description} <br />
                        {props.street}, {props.city}, {props.state}
                    </p>
                </div>
            </div>
     
        

    )

}

export default RestaurantCard;