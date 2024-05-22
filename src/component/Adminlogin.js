import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Nav";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import axiosInstance from "../apiConfig/axoisSetup";



function Adminlogin() {
    const [adminForm, setAdminForm] = useState({ shopId: "", password: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    // const auths = localStorage.getItem('admin');
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let adminForm1 = { ...adminForm };
        adminForm1[input.name] = input.value
        setAdminForm(adminForm1);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(adminForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/adminlogin`, adminForm, {});
                let data = response.data.result;
                if (data.Name) {
                    localStorage.setItem("admin", JSON.stringify({ id: data._id, name: data.Name }));
                    navigate("/admin/listProduct");
                } else {
                    alert('please enter a valid details')
                }

            } catch (err) {
                const data = err.response.data;
                alert(data.message);
                console.error('An error occurred :', data.message);
            }
        }

    }

    const validateForm = (data) => {
        const errors = {};
        const {shopId, password } = data;
        if (!shopId) { errors.shopId = 'This field is required';}

        if (!password) {
            errors.password = 'This field is required';
        }else if(!(password.length>5)){
            errors.password = "Password length must be atleast 6 characters";
        }
        return errors;
    }

    const { shopId, password } = adminForm;
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
                                <h4 className='text-white'>Login to Admin</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>


                                <div className="sign-input">
                                    <TextField type='text' name='shopId' value={shopId} label="Shop ID" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.shopId}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name='password' value={password} label="Password" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.password}</div>
                                </div>
                                <div className='d-flex f14 justify-content-between mt-3 mx-4 px-2'>
                                    <div><button className='border-0  colr'>Forgot password?</button></div>
                                    <div>Create a account?<Link className='colr' to="/createshop"> Create</Link></div>

                                </div>

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5' onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Adminlogin