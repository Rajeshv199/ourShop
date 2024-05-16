import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import Nav from './Nav';


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const collectData = async (e) => {
        e.preventDefault();
        console.warn(name, email, password);
        // alert('Signup succesfully')

        let result = await fetch('http://localhost:5000/signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result))
        if (result.name && result.email && result.password) {
            alert('signup succesfully')
            navigate("/");
        } else {
            alert("please enter a valid data")
        }

    }

    let imgArr=["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay:{
          delay: 2500,
          disableOnInteraction: false,
        }
      };

    return (
        <div className="">
            <Nav/>
            <div className="shopSlick">
                <Slider {...settings}>
                    {imgArr.map((item, index) => (
                        <div key={index}>
                            <div className="slick-cloned">
                                <div className="shopList" ><img width="100%" height="100%" src={item} alt="" /></div>
                                <div className="shopDetails">
                                    <div className='name'>Shop Name</div>
                                    <div className="title">Freeshop Technologies Private Limited, CIN: U74900KA20 </div>
                                    <div><button>Shop Now</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='signup-container'>

                <div className='signSection'>
                    <div className='row py-5'>
                        <div className='col-5'>
                            <div className='shopImg'>
                                <img src={shop12} width="100%" alt=''/>
                            </div>
                            <div className='shopRound'>
                                <img src={shop11} width="100%" alt=''/>
                            </div>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-5'>
                            <div className='signupForm'>
                                <h4 className='text-white'>Join us today👋</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                                <div className="sign-input">
                                    <TextField type='text' label="Name" variant="outlined" size="small"/>
                                </div>
                                <div className="sign-input">
                                    <TextField type='email' label="Email" variant="outlined" size="small"/>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' label="Password" variant="outlined" size="small"/>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' label="Confirm Password" variant="outlined" size="small"/>
                                </div>
                                
                                <div className='f14 text-end mt-2 mx-4 px-2'>Already have an account? <Link className='colr' to="/login">Login</Link></div>
                              
                                <div>
                                    <button className='btn btn-primary text-center w-75 my-4'>Sign Up</button>
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

