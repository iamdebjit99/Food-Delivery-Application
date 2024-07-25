import React from "react";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import logo from "../images/logo.webp"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping, faGift, faClipboardQuestion, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header(){

    const navLinkPading = {
        padding: "25px"
    };

    return (
        <div className="fixed-top bg-light">
            <Navbar expand="lg" collapseOnSelect className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt="logo"
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                        eatExpress
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Other" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="/profile">Profile</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className="nav-link" style={navLinkPading} to="/search">
                                <FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />{" "}Search</Link>

                            <Link className="nav-link" style={navLinkPading} to="/">
                                <FontAwesomeIcon size="lg" icon={faHouse} />{" "}Home</Link>

                            <Link className="nav-link" style={navLinkPading} to="/offer">
                                <FontAwesomeIcon size="lg" icon={faGift} />{" "}Offers</Link>

                            <Link className="nav-link" style={navLinkPading} to="/login">
                                <FontAwesomeIcon size="lg" icon={faUser} />{" "}Log In</Link>

                            <Link className="nav-link" style={navLinkPading} to="/Cart">
                                <FontAwesomeIcon size="lg" icon={faBagShopping} />{" "}Cart</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div> 
    );
}

export default Header;
