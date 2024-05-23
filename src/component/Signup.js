import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import Nav from './Nav';
import axiosInstance from "../apiConfig/axoisSetup";


const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState({ name: "", email: "", password: "", confrmPassword: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const { state } = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({...signUpForm,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(signUpForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/signup`, signUpForm, {});
                let data = response.data;
                if (data.name && data.email && data.password) {
                    alert('Signup Successfully');
                    navigate("/");
                    localStorage.setItem("user", JSON.stringify({ id: data._id, name: data.name,email:data.email}));
                } else {
                    alert("please enter a valid data")
                }

            } catch (err) {
                console.error('An error occurred :', err);
            }
        } else {

        }

    }
    const validateForm = (data) => {
        const errors = {};
        
        const{name, email, password, confrmPassword} = data;
        if (!name) {errors.name = 'This field is required';}

        if (!email) {
            errors.email = 'This field is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }

        if (!password) {
            errors.password = 'This field is required';
        }else if(!(password.length>5)){
            errors.password = "Password length must be atleast 6 characters";
        }

        if (!confrmPassword) {
            errors.confrmPassword = 'This field is required';
        }else if(password!==confrmPassword){
            errors.confrmPassword ="Passwords did not match";
        }
        return errors;

    }

    let imgArr = ["https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1617286647344-95c86d56748a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    };

    useEffect(() => {
        if(state){
            const{user} = state;
            console.log(user);
            setSignUpForm(user);
        }
    })

    const { name, email, password, confrmPassword } = signUpForm;

    return (
        <div className="">
            <Nav />
            {!state &&
            <div className="shopSlick">
                <Slider {...settings}>
                    {imgArr.map((item, index) => (
                        <div key={index}>
                            <div className="slick-cloned">
                                <div className="shopList" ><img width="100%" height="100%" src={item} alt="" /></div>
                                <div className="shopDetails">
                                    <div className='name'>Shop Name</div>
                                    <div className="title">Freeshop Technologies Private Limited, CIN: U74900KA20 </div>
                                    <div className='mt-3'><button>Shop Now</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            }

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
                                <h4 className='text-white'>{state?"Edit Profile":"Join us today👋"}</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                                <div className="sign-input">
                                    <TextField type='text' label="Name *" name="name" value={name} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.name}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='email' label="Email *" name="email" value={email} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.email}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' className={state?'input-disble':""} disabled={state?true:false} label="Password *" name="password" value={password} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.password}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' className={state?'input-disble':""} disabled={state?true:false} label="Confirm Password *" name='confrmPassword' value={confrmPassword} variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.confrmPassword}</div>
                                </div>

                                {!state&&
                                <div className='f14 text-end mt-3 mx-4 px-2'>Already have an account? <Link className='colr' to="/login">Login</Link></div>
                                }
                                <div>
                                    {state?(
                                        <button className='btn btn-primary text-center w-75 my-4'>Update</button>
                                    ):(
                                        <button className='btn btn-primary text-center w-75 my-4' onClick={handleSubmit}>Sign Up</button>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* <h1>SignUp</h1>
            <form className="signup-form">
                <div className="login-inputbox">
                    <input className="inputBox" type="text"
                        value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name..." />

                    <input className="inputBox" type="text"
                        value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email..." />

                    <input className="inputBox" type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password..." />

                    <button onClick={collectData} className="appButton">Sign up</button>
                </div>
            </form> */}
        </div>

    )
}
export default SignUp;

