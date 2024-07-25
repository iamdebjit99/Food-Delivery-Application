import { faRupeeSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import image from "../images/restaurants/restaurant3.avif"
import { toast } from "react-hot-toast";


function MenuItem(props){

    const image = props.itemImageUrl;

    const card = {
        flexDirection: "row",
        maxHeight:"12em",
        maxWidth:"45em",
        border: "0",
        backgroundColor: "696969",
        color: "#fff",
        boxShadow: "0 7px 7px rgba(0, 0, 0, 0.18)"
    }

    const cardImg = {
        maxWidth: "25%",
        maxHeight:"10em",
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

    const ctaSection={
        maxWidth: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flexEnd",
        justifyContent: "spaceBetween",
        maxWidth: "30em"
      }
    const ctaSectionBtn={
      padding: "0.2em 0.5em",
      fontSize: "1em",
      color: "#696969",
      width: "100px"
    }
    const cardText={
      letterSpacing: "0.1em"
    }

    const { setCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
      setCart(prevCart => ({
        ...prevCart,
        itemList: [...prevCart.itemList, item],
        total: prevCart.total + item.price
      }));
      toast.success("Added to cart!!")
    }
  
    const item = {
      "itemId": props.id,
      "itemName": props.name,
      "description": props.description,
      "price": props.price,
      "imageUrl": props.itemImageUrl    
    }


    return (
        <div className="justify-content-around card dark bg-dark mt-3" style={card}>
            <img src={image} style={cardImg} className="card-img-top" alt="..." />
            <div className="card-body" style={cardBody}>
                <div className="text-section" style={textSection}>
                    <h5 className="card-title fw-bold">{item.itemName}</h5>
                    {/* <FontAwesomeIcon icon={faStar} />{" "+props.rating} */}
                    <p className="card-text" style={cardText}>{item.description}</p>
                </div>
                <div className="cta-section" style={ctaSection}>
                    <div><FontAwesomeIcon icon={faRupeeSign} />{" "+item.price}</div>
                    <a href="#" onClick={() => handleAddToCart(item)} className="btn btn-light" style={ctaSectionBtn}>Add to Cart</a>
                </div>
            </div>
        </div>
    )

}

export default MenuItem;