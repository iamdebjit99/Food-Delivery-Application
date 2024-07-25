import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import logo from "../images/logo.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";


function Footer(){

    const iconPadding = {
        padding : "0 20px"
    }

    return (
        <MDBFooter bgColor="dark" className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-around p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>
                        <h6>For Better Experience Download the App Now</h6>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-around">
                            <Button variant="outline-light" size="sm">
                                <FontAwesomeIcon icon={faApple} />  App Store
                            </Button>
                            <Button variant="outline-light" size="sm">
                                <FontAwesomeIcon icon={faGooglePlay} />  Google Play
                            </Button>
                        </div>
                    </span>
                </div>
        
                <div className="d-flex align-items-center">

                    <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" style={iconPadding}/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" style={iconPadding}/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" style={iconPadding}/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" style={iconPadding}/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" style={iconPadding}/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" style={iconPadding}/>
                    </a>
                </div>
            </section>
  
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                            <img alt="logo"
                                src={logo}
                                width="50"
                                height="50"
                                className="d-inline-block me-3"
                                />{' '}
                                eatExpress
                                {/* <MDBIcon icon="gem" className="me-3" /> */}
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>
        
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Careers</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Team
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    eatExpress One
                                </a>
                            </p>
                        </MDBCol>
        
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Learn More</h6>
                            <p>
                            <a href='#!' className='text-reset'>
                                Privacy
                            </a>
                            </p>
                            <p>
                            <a href='#!' className='text-reset'>
                                Security
                            </a> 
                            </p>
                            <p>
                            <a href='#!' className='text-reset'>
                                Partner with us
                            </a>
                            </p>
                            <p>
                            <a href='#!' className='text-reset'>
                                Ride with us
                            </a>
                            </p>
                        </MDBCol>
        
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                            <p>
                            <MDBIcon icon="home" className="me-2" style={iconPadding}/>
                            New Delhi, ND 500001, INDIA
                            </p>
                            <p>
                            <MDBIcon icon="envelope" className="me-3" style={iconPadding}/>
                            info@eatexpress.com
                            </p>
                            <p>
                            <MDBIcon icon="phone" className="me-3" style={iconPadding}/> + 91 234 567 88 89
                            </p>
                            <p>
                            <MDBIcon icon="print" className="me-3" style={iconPadding}/> + 91 234 567 89 90
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
  
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright : <span className='text-reset fw-bold'>Debjit Das</span>
            </div>
        </MDBFooter>
    );
}

export default Footer;