import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from "./Nav";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import axiosInstance from "../apiConfig/axoisSetup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/createshop.css';

const Createshop = () => {

    const auth = JSON.parse(localStorage.getItem('user'));
    const [formData, setFormData] = useState({ userid: auth.id, Name: "", image: "", location: "", city: "", password: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            const render = new FileReader();
            render.onload = () => {
                if (render.readyState === 2) {
                    // setImage(render.result);
                    formData.image = render.result;
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }

    }

    const { id } = useParams();

    const { Name, image, location, city, password } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/createshops`, formData, {});
                let data = response.data;
                if (data.success) {
                    toast.success("Added Successfully");
                    setTimeout(() => { navigate("/") }, 1000);
                } else {
                    toast.error(data.message);
                }

            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error("No response received from the server. Please try again later.");
                } else {
                    toast.error("An error occurred. Please try again later.");
                }
            }
        } else {

        }
    };

    const validateForm = (data) => {
        const errors = {};
        const {Name, image, location, city, password } = data;
        if (!Name) { errors.Name = 'This field is required';}

        if (!image) { errors.image = 'This field is required';} 

        if (!location) {errors.location = 'This field is required';} 

        if (!city) {errors.city = 'This field is required';} 

        if (!password) {
            errors.password = 'This field is required';
        }else if(!(password.length>5)){
            errors.password = "Password length must be atleast 6 characters";
        }

        return errors;
    }


    console.log(formData);
    // console.log(image);
    return (
        <>
            <Navbar />
            {/* <ToastContainer /> */}

            <div className='signup-container'>

                <div className='signSection'>
                    <div className='row py-5'>
                        <div className='col-5'>
                            <div className='shopImg'>
                                <img src={shop12} width="100%" alt='' />
                            </div>
                            <div className='shopRound'>
                                <img src={shop11} width="100%" alt='' />
                            </div>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-5'>
                            <div className='signupForm'>
                                <h4 className='text-white'>Create Shop</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>


                                <div className="sign-input">
                                    <TextField type='text' name='Name' value={Name} label="Shop Name" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.Name}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='file' className='inputFile' name='image' variant="outlined" accessKey='.jpg,.pmg.jpeg' size="small" onChange={handleChange} />
                                    <div className='error'>{errors.image}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='location' value={location} label="Location" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.location}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='city' value={city} label="City" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.city}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name='password' value={password} label="Password" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.password}</div>
                                </div>
                                <div className='f14 text-end mt-3 mx-4 px-2'>
                                    <div>Have an account?<Link className='colr' to="/adminlogin"> Admin Login</Link></div>

                                </div>

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5' onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div>Createshop</div>
            <div className="createshop-form-1">
                <form onSubmit={(e) => createshop(e)} className="createshop-form-input-1">
                    <input className="createshop-field-1" onChange={onChangeHandler} type="text" placeholder="shop name" value={Name} name='Name' /><br />
                    <input className="createshop-field-1" accept='image/*' type="file" files={image} multiple onChange={onChangeHandler} name='image' /><br />
                    <input className="createshop-field-1" onChange={onChangeHandler} type="text" placeholder="location" value={location} name='location' required /><br />
                    <input className="createshop-field-1" onChange={onChangeHandler} type="text" placeholder="city" value={city} name='city' required /><br />
                    <input className="createshop-field-1" onChange={onChangeHandler} type="password" placeholder="password" value={password} name='password' required /><br />

                    <button className="createshop-button-" type='submit'>Create Shop</button>
                    <p> Have an account?</p><li><Link to="/adminlogin">Admin Login</Link></li>

                </form>
            </div> */}
        </>
    );
};

export default Createshop;
