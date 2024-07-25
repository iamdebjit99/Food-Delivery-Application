import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./details.css"


function Details() {

    const [userDetails, setUserDetails] = useState({});
    const [info, setInfo] = useState({});
    const navigate = useNavigate();

    const jwtToken = localStorage.getItem('jwtToken');
    const id = localStorage.getItem('id');

    const url = `http://localhost:8090/user/details/add/${id}`;

    console.log(id+"   "+jwtToken);

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

    const handleChange = (e) => {
        setInfo((prev)=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
        })
        .then((res) =>{
          return (res.json());
        })
        .then((res)=>{
          console.log(res);
          navigate("/profile")
        })
        .catch((error)=> console.log(error))

      }



  return (
    <div class="container p-4">
        <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="account-settings">
                            <div class="user-profile">
                                <div class="user-avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                </div>
                                <h5 class="user-name">{userDetails.fname}</h5>
                                <h6 class="user-email">{userDetails.email}</h6>
                            </div>
                            <div class="about">
                                <h5>About</h5>
                                <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mb-2 text-primary">Personal Details</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="fName">First Name</label>
                                    <Form.Control
                                        type="text"
                                        placeholder={userDetails.fname}
                                        aria-label="Disabled input example"
                                        disabled
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="lName">Last Name</label>
                                    <Form.Control
                                        type="text"
                                        placeholder={userDetails.lname}
                                        aria-label="Disabled input example"
                                        disabled
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="eMail">Email</label>
                                    <Form.Control
                                        type="text"
                                        placeholder={userDetails.email}
                                        aria-label="Disabled input example"
                                        disabled
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input onChange={handleChange} type="text" class="form-control" name="phoneNo" placeholder="Enter phone number" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="age">Age</label>
                                    <input onChange={handleChange} type="number" class="form-control" name="age" placeholder="Age" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="gender">Gendar</label>
                                    <input onChange={handleChange} type="text" class="form-control" name="gender" placeholder="Gender" />
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mt-3 mb-2 text-primary">Address</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="street">Street</label>
                                    <input onChange={handleChange} type="name" class="form-control" name="street" placeholder="Enter Street" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input onChange={handleChange} type="name" class="form-control" name="city" placeholder="Enter City" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <input onChange={handleChange} type="text" class="form-control" name="state" placeholder="Enter State" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="zip">Zip Code</label>
                                    <input onChange={handleChange} type="text" class="form-control" name="pinCode" placeholder="Zip Code" />
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="text-right">
                                    <button onClick={() => navigate("/profile")} type="button" id="cancel" name="cancel" class="btn btn-outline-secondary sm btn-sm m-2">cancel</button>
                                    <button onClick={handleSubmit} type="button" id="submit" name="submit" class="btn btn-primary btn-sm m-2">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Details;