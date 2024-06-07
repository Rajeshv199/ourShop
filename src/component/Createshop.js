import React, { useEffect, useState } from 'react';
import { useNavigate, Link,useLocation } from 'react-router-dom';
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
    const [formData, setFormData] = useState({ userId: auth.id, Name: "",email:"",mobileNo:"", image: "",pincode:"", location: "", city: "", password: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const { state } = useLocation();

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

    const { Name,email,mobileNo, image,pincode, location, city, password } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/createshops`, formData, {});
                let data = response.data;
                if (data.success) {
                    let shopdata = data.shopData
                    alert(data.message);
                    localStorage.setItem("admin", JSON.stringify({ id: shopdata._id, name: shopdata.Name }));
                    setTimeout(() => { navigate("/shopList") }, 1000);
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
    const handleUpdate = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.put(`/editshop/${state._id}`, formData, {});
                let data = response.data;
                if (data.success) {
                    alert(data.message);
                    setTimeout(() => { navigate("/shopList") }, 1000);
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
        const {Name,email,mobileNo, image, location, city,pincode, password } = data;
        if (!Name) {errors.Name = 'This field is required';}
        else if(!(/^[A-Za-z\s]*$/.test(Name))){
            errors.Name = 'Enter a valid Name';
        }
        if (!email) {
            errors.email = 'This field is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }
        if (!mobileNo) {
            errors.mobileNo = 'This field is required';
        } else if(!/^\d{10}$/.test(mobileNo)){
            errors.mobileNo = 'Enter a valid MobileNo';
        }
        if (!image) { errors.image = 'This field is required';} 

        if (!location) {errors.location = 'This field is required';} 

        if (!city) {errors.city = 'This field is required';}
        if (!pincode) {errors.pincode = 'This field is required';} 
        else if(!/^\d{6}$/.test(pincode)){
            errors.pincode = 'Enter a valid Pincode';
        }

        if(!state){
            if (!password) {
                errors.password = 'This field is required';
            }else if(!(password.length>5)){
                errors.password = "Password length must be atleast 6 characters";
            }
        }

        return errors;
    }

    useEffect(()=>{
        if(state){
            let json={userId: auth.id,Name:state.Name,email:state.email,mobileNo:state.mobileNo,image:state.image.url,location:state.location,city:state.city,pincode:state.pincode};
            setFormData(json);
          
        }
    },[]);

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
                                <h4 className='text-white'>{state?"Update Shop":"Create Shop"}</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>


                                <div className="sign-input">
                                    <TextField type='text' name='Name' value={Name} label="Shop Name *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.Name}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='email' value={email} label="Email *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.email}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='mobileNo' value={mobileNo} label="Mobile No. *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.mobileNo}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='file' className='inputFile' name='image' variant="outlined" accessKey='.jpg,.pmg.jpeg' size="small" onChange={handleChange} />
                                    <div className='error'>{errors.image}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='location' value={location} label="Location *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.location}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='city' value={city} label="City *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.city}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' name='pincode' value={pincode} label="Pin code *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.pincode}</div>
                                </div>
                                <div className="sign-input" >
                                    <TextField type='password' className={state?'input-disble':""} disabled={state?true:false} name='password' value={password} label="Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.password}</div>
                                </div>

                                <div className='f14 text-end mt-3 mx-4 px-2'>
                                    {!state&&
                                    <div>Have an account?<Link className='colr' to="/shoplogin"> Shop Login</Link></div>
                                    }
                                </div>

                                <div >
                                {state?(
                                    <button className='btn btn-primary text-center w-75 my-5' onClick={handleUpdate}>Update</button>
                                ):
                                <button className='btn btn-primary text-center w-75 my-5' onClick={handleSubmit}>Submit</button>
                                }
                                    
                                    
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
                    <p> Have an account?</p><li><Link to="/shoplogin">Admin Login</Link></li>

                </form>
            </div> */}
        </>
    );
};

export default Createshop;
