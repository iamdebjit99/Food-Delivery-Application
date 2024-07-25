import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantList from "../../components/ReataurantList";


function HomePage(){
    
    return (
        <div >
            <Header />
            <RestaurantList />
            <Footer />
        </div>
    );
}

export default HomePage;