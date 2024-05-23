import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import Nav from './Nav';
import axiosInstance from "../apiConfig/axoisSetup";


const ForgotPassword = () => {
    const [forgotPass, setForgotPass] = useState({shopId: "", newPassword: "", confrmPassword: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForgotPass({...forgotPass,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(forgotPass);
        setErrors(newErrors);
        // if (Object.keys(newErrors).length === 0) {
        //     try {
        //         const response = await axiosInstance.post(`/signup`, forgotPass, {});
        //         let data = response.data;
        //         if (data.name && data.email && data.password) {
        //             alert('Signup Successfully');
        //             navigate("/");
        //             localStorage.setItem("user", JSON.stringify({ id: data._id, name: data.name,email:data.email}));
        //         } else {
        //             alert("please enter a valid data")
        //         }

        //     } catch (err) {
        //         console.error('An error occurred :', err);
        //     }
        // } else {

        // }

    }
    const validateForm = (data) => {
        const errors = {};
        
        const{shopId, newPassword, confrmPassword} = data;
        
        if (!shopId) {
            errors.shopId = 'This field is required';
        } 

        if (!newPassword) {
            errors.newPassword = 'This field is required';
        }else if(!(newPassword.length>5)){
            errors.newPassword = "Password length must be atleast 6 characters";
        }

        if (!confrmPassword) {
            errors.confrmPassword = 'This field is required';
        }else if(newPassword!==confrmPassword){
            errors.confrmPassword ="Passwords did not match";
        }
        return errors;

    }

   
    

    const { shopId, newPassword, confrmPassword } = forgotPass;


    return (
        <div className="">
            <Nav />
            
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
                                <h4 className='text-white'>Forgot Password</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                                <div className="sign-input">
                                    <TextField type='text' label="Shop ID *" name="shopId" value={shopId} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.shopId}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' label="New Password *" name="newPassword" value={newPassword} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.newPassword}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' label="Confirm Password *" name='confrmPassword' value={confrmPassword} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.confrmPassword}</div>
                                </div>

                                {/* <div className='f14 text-end mt-3 mx-4 px-2'>Already have an account? <Link className='colr' to="/login">Login</Link></div> */}

                                <div className='mt-3'>
                                    <button className='btn btn-primary text-center w-75 my-4' onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            
        </div>

    )
}
export default ForgotPassword;

