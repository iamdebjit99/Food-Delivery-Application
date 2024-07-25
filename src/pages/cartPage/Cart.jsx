import React, { useState, useEffect, useContext } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { faCcAmex, faCcMastercard, faCcVisa, faGooglePay, faPaypal } from "@fortawesome/free-brands-svg-icons";


import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "../../components/EmptyCart";
import { toast, Toaster } from "react-hot-toast";
  
export default function Basic() {

  const {user, setUser} = useContext(AuthContext)
 
  const navigate = useNavigate()

  const { cart, setCart } = useContext(CartContext);

  const deleteItemDetails = (id, itemPrice) => {

    setCart(prevCart => {
      const updatedList = prevCart.itemList.filter(item => item.itemId !== id)

      const updatedPrice = prevCart.total - itemPrice;

      return {
        ...prevCart,
        itemList: updatedList, 
        total: updatedPrice
      };
    });

    toast.success("Deleted from Cart")
  }

  const checkOut = () => {
    setCart({
      itemList : [], 
      total : 0
    })
    toast.success("Placed Order");
  }


  return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                  <MDBCard>
                    <MDBCardBody className="p-4">
                      <MDBRow>
                        <MDBCol lg="7">
                          <MDBTypography tag="h5">
                            <a onClick={() => navigate("/")} className="text-body">
                              <FontAwesomeIcon icon={faArrowLeft} />{" "}Continue shopping 
                            </a>
                          </MDBTypography>
          
                          <hr />
          
                          <div className="d-flex justify-content-between align-items-center mb-4">
                        
                            <h3 className="mb-1">Shopping cart</h3>
                            <p className="mb-0">You have {cart.itemList.length} items in your cart</p>
                          
                          </div>
    
                          <div>
                            {cart && cart.itemList.length > 0 ? (
                              <div>
                                {cart.itemList.map((item) =>  (
                                    <MDBCard className="mb-3" style={{backgroundColor: "#F6F5F2"}}>
                                      {console.log("the items")}
                                      {console.log(item)}
                                      <MDBCardBody style={{backgroundColor: "#F6F5F2"}}>
                                        <div className="d-flex justify-content-between">
                                          <div className="d-flex flex-row align-items-center">
                                            <div className="pr-3">
                                              <MDBCardImage
                                                src={item.imageUrl}
                                                fluid className="rounded-3" style={{ width: "100px" }}
                                                alt="Shopping item" />
                                            </div>
                                            <div className="ms-3">
                                              <MDBTypography tag="h5">
                                                {item.itemName}
                                              </MDBTypography>
                                              <p className="small mb-0">{item.description}</p>
                                            </div>
                                          </div>
                                          <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: "80px" }}>
                                              <MDBTypography tag="h5" className="mb-0">
                                                {item.price}
                                              </MDBTypography>
                                            </div>
                                              <a onClick={() => deleteItemDetails(item.itemId, item.price)} href="#!" style={{ color: "#cecece" }}>
                                                <MDBIcon fas icon="trash-alt" />
                                              </a>
                                            </div>
                                          </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                ))}
                              </div>) : (
                                <div>No Cart items</div>
                              )
                            }
                          </div>
                        </MDBCol>
          
                        <MDBCol lg="5">
                          
                          <MDBCard style={{marginTop:"100px"}} className="rounded-3">
                        
                            <button type="button" class="btn btn-dark">
                              <FontAwesomeIcon size="2x" icon={faGooglePay} />
                            </button>
                        
                            <hr />
                            <MDBCardBody>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBTypography tag="h5" className="mb-0">
                                  Card details
                                </MDBTypography>
                              </div>
    
                              <div class="row justify-content-around">
                                <div class="col-2">
                                <FontAwesomeIcon size="3x" icon={faCcMastercard} style={{color: "#F79E1B",}}/>
                                </div>
                                <div class="col-2">
                                <FontAwesomeIcon size="3x" icon={faPaypal} style={{color: "#00457C",}}/>
                                </div>
                                <div class="col-2">
                                <FontAwesomeIcon size="3x" icon={faCcAmex} style={{color: "#006BA6",}}/>
                                </div>
                                <div class="col-2">
                                <FontAwesomeIcon size="3x" icon={faCcVisa} style={{color: "#1A1F71",}} />
                                </div>
                              </div>
    
                              <form className="mt-3">
                              <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                              </div>
                              <div class="form-group">
                                <label for="cardholder">Cardholder's Name</label>
                                <input type="text" class="form-control" name="cardholder" aria-describedby="cardHolderHelp" placeholder="Cardholder's Name" />
                              </div>
    
                              <div class="form-group">
                                <label for="cardnumber">Card Number</label>
                                <input type="text" class="form-control" name="cardnumber" aria-describedby="cardNumberHelp" placeholder="Card Number" />
                                <small id="cardNumberHelp" class="form-text text-muted">never share with anyone</small>
                              </div>
          
                                <MDBRow className="mb-4">
                                  <MDBCol md="6">
                                    <div class="form-group">
                                      <label for="expiration">Card Number</label>
                                      <input type="text" class="form-control" name="expiration" aria-describedby="expirationHelp" placeholder="MM/YYYY" contrast/>
                                      <small id="expirationHelp" class="form-text text-muted">Enter your card's Expiration Date</small>
                                    </div>
                                    {/* <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                      minLength="7" maxLength="7" placeholder="MM/YYYY" contrast /> */}
                                  </MDBCol>
                                  <MDBCol md="6">
                                    <div class="form-group">
                                      <label for="cvv">CVV</label>
                                      <input type="text" class="form-control" name="cvv" aria-describedby="cvvHelp" placeholder="&#9679;&#9679;&#9679;" contrast/>
                                      <small id="cvvHelp" class="form-text text-muted">Enter your 3 digit cvv</small>
                                    </div>
                                  </MDBCol>
                                </MDBRow>
                              </form>
          
                              <hr />
          
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Subtotal</p>
                                <p className="mb-2">Rs. {cart.total}</p>
                              </div>
          
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Shipping</p>
                                <p className="mb-2">Rs. {(cart.itemList.length === 0) ? 0 : 20.00}</p>
                              </div>
          
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Total(Incl. taxes)</p>
                                <p className="mb-2">Rs. {(cart.itemList.length === 0) ? 0 : cart.total+20}</p>
                              </div>
                                <button type="button" onClick={checkOut} class="btn btn-secondary btn-lg btn-block">
                                  <div className="d-flex justify-content-between">
                                    <span>{(cart.itemList.length === 0) ? 0 : cart.total+20}</span>
                                      <span>
                                        Checkout{" "}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                      </span>
                                  </div>
                                </button>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </section>
  );
}