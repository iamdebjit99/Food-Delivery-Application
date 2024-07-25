import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Login from "./pages/loginPage/LogIn";
import HomePage from "./pages/homePage/HomePage";
import Cart from "./pages/cartPage/Cart";
import Restaurant from "./pages/restaurantPage/Restaurant";
import Profile from "./pages/profilePage/Profile";
import AuthContext from "./context/AuthContext";
import Search from "./pages/searchingPage/Searching";
import Offer from "./pages/offerPage/Offer";
import Details from "./pages/userDetailsPage/Details";
import Registration from "./pages/regitrationPage/Registration";

function App() {
  const {user} = useContext(AuthContext)

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offer" element={<Offer /> } />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/profile" element={user? <Profile /> : <Login />} />
        <Route path="/details" element={<Details />} />
        {/* Add a catch-all route for unmatched paths */}
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
  );
}

export default App;
