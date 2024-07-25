import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';



function OfferCard(props) {

    const image = props.restaurantImgUrl;
    console.log("image url :"+image)

    const card = {
        flexDirection: "row",
        maxHeight:"12em",
        maxWidth:"28em",
        border: "0",
        backgroundColor: "#696969",
        color: "#fff",
        boxShadow: "0 7px 7px rgba(0, 0, 0, 0.18)"
    }

    const cardImg = {
        height: "200px",
        width: "200px",
        maxWidth: "40%",
        maxHeight:"12em",
        margin: "auto",
        padding: "0.5em",
        borderRadius: "0.7em"
    }

    const cardBody={
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween"
    }

    const textSection={
        maxWidth: "60"
    }
    
    const cardText={
      letterSpacing: "0.1em"
    }


    return (
        <div className="justify-content-around card dark mt-3" style={card}>
            <img src={image} style={cardImg} className="card-img-top" alt="..." />
            <div className="card-body" style={cardBody}>
                <div className="text-section" style={textSection}>
                    <h5 className="card-title fw-bold">{props.name}</h5>
                    <FontAwesomeIcon icon={faStar} />{" "+props.rating}
                    <p className="card-text" style={cardText}>
                        {props.description} <br />
                        {props.street}, {props.city}, {props.state}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default OfferCard;