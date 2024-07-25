import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGear, faHouse, faPenToSquare, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./profile.css";
import { Card } from "react-bootstrap";

function Profile(){
    const {user} = useContext(AuthContext)
    const [open, setOpen] = React.useState(true);

    const navigate = useNavigate();

    {console.log("profile page user")}
    {console.log(user)}
    {console.log(user.id)}
    {console.log(user.token)}

    const [userDetails, setUserDetails] = useState({});
    // const { id, token } = user;



    const jwtToken = localStorage.getItem('jwtToken');
    const id = localStorage.getItem('id');
    
    console.log("jwtToken & id")
    console.log(jwtToken+" "+id)

    // {console.log(jwtToken+" :: "+userId)}

    useEffect(() => {
        const fetchUserProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/user/getuser/${id}`, {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
            }
            });
            console.log("the data fom table.......")
            console.log(response.data);
            setUserDetails(response.data);
        } catch (error) {
            console.error('Error fetching user profile:', error);

        }
        };
      
        fetchUserProfile();

    }, []);

    console.log("Data data data")
    console.log(userDetails)
    console.log(userDetails.address)
    // console.log(userDetails.address.street)

    const add= userDetails.address;

    return (
        <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                        <div className="user-heading round">
                            <a href="#">
                                <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                            </a>
                            <h1>{userDetails.fname}</h1>
                            <p>{userDetails.email}</p>
                        </div>

                        <List 
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    More Options
                                </ListSubheader>
                        }>
                            <ListItemButton onClick={() => navigate("/details")}>
                                <ListItemIcon>
                                    <FontAwesomeIcon size="xl" icon={faPenToSquare} />
                                </ListItemIcon>
                                <ListItemText primary="Edit Profile" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FontAwesomeIcon size="xl" icon={faEnvelope} />
                                </ListItemIcon>
                                <ListItemText primary="Sent Mail" />
                            </ListItemButton>
                            <ListItemButton onClick={() => setOpen(!open)}>
                                <ListItemIcon>
                                    <FontAwesomeIcon size="xl" icon={faGear} />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => navigate("/")} sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                        <FontAwesomeIcon size="xl" icon={faHouse} />
                                        </ListItemIcon>
                                            <ListItemText primary="Home" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <FontAwesomeIcon size="xl" icon={faRightFromBracket} />
                                        </ListItemIcon>
                                            <ListItemText primary="Log Out" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </div>
                </div>
                <div className="profile-info col-md-9">
                    <div className="panel">
                        <div className="bio-graph-heading">
                            Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
                        </div>
                        <div className="panel-body bio-graph-info">
                            <Card className="mt-4">
                                <Card.Header as="h4">About Me</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="row">
                                            <div className="bio-row">
                                                <p><span>First Name </span>: {userDetails.fname}</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Last Name </span>: {userDetails.lname}</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Country </span>: India</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Age</span>: {userDetails.age==null ? "--" : userDetails.age}</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Gender </span>: {userDetails.gender==null ? "--" : userDetails.gender}</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Email </span>: {userDetails.email}</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Mobile </span>: {userDetails.phoneNo==null ? "--" : userDetails.phoneNo}</p>
                                            </div>
                                            <div className="bio-row">
                                                <p><span>Phone </span>: {userDetails.phoneNo==null ? "--" : userDetails.phoneNo}</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mt-4">
                                <Card.Header as="h4">Address</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {add==null ? <div></div> : (
                                            <div className="row">
                                                <div className="bio-row">
                                                    <p><span>Street </span>: {add.street}</p>
                                                </div>
                                                <div className="bio-row">
                                                    <p><span>City </span>: {add.city}</p>
                                                </div>
                                                <div className="bio-row">
                                                    <p><span>State </span>: {add.state}</p>
                                                </div>
                                                <div className="bio-row">
                                                    <p><span>Postal Code </span>: {add.pinCode}</p>
                                                </div>
                                                <div className="bio-row">
                                                    <p><span>Country </span>: India</p>
                                                </div>
                                            </div>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Profile;