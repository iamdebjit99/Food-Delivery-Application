import React from "react";
import image from "../images/restaurants/cart2.jpg"

function EmptyCart(){

    const myStyle = {
        backgroundImage: {image},
        // height: "100vh",
        // marginTop: "-70px",
        // fontSize: "50px",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
    };

    return <div style={myStyle}>
        <div>
            <img src="https://i.pinimg.com/564x/22/aa/a9/22aaa90f2934372be18913b7eb1e8394.jpg" alt="not found" srcset="" />
        </div>
        <div>
            <h4>Your Cart is Empty</h4>
            <p>You can go to home page to view more restaurants</p>
        </div>
        <button>SEE RESTAURANTS NEAR YOU</button>
    </div>

}

export default EmptyCart;