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
    const [allShop, setAllShop] = useState([]);
    const { state } = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));

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
                let data = response.data.result;
                if (response.status) {
                    alert('Signup Successfully');
                    navigate("/");
                    localStorage.setItem("user", JSON.stringify({ id: data._id, name: data.name,email:data.email}));
                } else {
                    alert("Please enter a valid data")
                }

            } catch (err) {
                const {data} =err.response;
                alert(data.message);
                console.error('An error occurred :', data);
            }
        } else {

        }

    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(signUpForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.put(`/user/${user.id}/edit-profile`, signUpForm, {});
                let data = response.data;
                if (data.success) {
                    alert('Profile updated successfully');
                    navigate("/");
                    localStorage.setItem("user", JSON.stringify({ id: data.user._id, name: data.user.name,email:data.user.email}));
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
        else if(!(/^[a-zA-Z]+$/.test(name))){
            errors.name = 'Enter a valid Name';
        }

        if (!email) {
            errors.email = 'This field is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }
        if(!state){
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
        }
        return errors;

    }

    const getAllshop= async()=>{
        try {
            const response = await axiosInstance.get(`/highest-rated-shop`, {});
            let data = response.data;
            if (data.success) {
                setAllShop(data.highestRatedShop.shops);
            } 
        } catch (err) {
            const {data} =err.response;
            alert(data.message);
            console.error('An error occurred :', data);
        }
    };

    useEffect(() => {
        if(state){
            const{user} = state;
            setSignUpForm(user);
        }

        getAllshop();

    },[]);

    let imgArr = ["https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: allShop.length<=5?allShop.length:5,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    };

    const { name, email, password, confrmPassword } = signUpForm;

    return (
        <div className="">
            <Nav />
            {!state &&
            <div className="shopSlick">
                <Slider {...settings}>
                    {allShop.map((item, index) => (
                        <div key={index}>
                            <div className="slick-cloned">
                                <div className="shopList" ><img width="100%" height="100%" src={item.image.url} alt="" /></div>
                                <div className="shopDetails">
                                    <div className='name'>{item.Name}</div>
                                    {/* <div className="title">Freeshop Technologies Private Limited, CIN: U74900KA20 </div> */}
                                    <div className='mt-5'><Link to={`/${item.Name}/products`} state={{ id: item._id, name: item.Name }}><button>Shop Now</button></Link></div>
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
                                        <button className='btn btn-primary text-center w-75 my-4' onClick={handleUpdate}>Update</button>
                                    ):(
                                        <button className='btn btn-primary text-center w-75 my-4' onClick={handleSubmit}>Sign Up</button>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            
           
        </div>

    )
}
export default SignUp;

