import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import Nav from './Nav';
import axiosInstance from "../apiConfig/axoisSetup";



// import Signup from './Signup';

const Login = () => {

    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [forgotPassForm, setforgotPassForm] = useState({email: "", newPassword: "", confrmPassword: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [forgotPass, setForgotPass] = useState(false);



    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let loginForm1 = { ...loginForm };
        loginForm1[input.name] = input.value
        setLoginForm(loginForm1);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(loginForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/login`, loginForm, {})
                const data = response.data.result;
                console.log(data);
                if (data.name) {
                    localStorage.setItem("user", JSON.stringify({ id: data._id, name: data.name,email:data.email  }));
                    navigate("/")

                } else {
                    alert('Please enter a valid details');
                }
            } catch (err) {
                const data = err.response.data;
                alert(data.message);
                console.error('An error occurred :', data.message);
            }
        } else {
        }
    }

    
    const validateForm = (data) => {
        const errors = {};
        const{email, password} = data;
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
        return errors;

    }


    let imgArr = ["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplaySpeed: 500,
    };

    // const { email, password } = loginForm;

    const users = [
        { id: 1, purchasedProducts: [1, 2, 3],},
        {id: 2, purchasedProducts: [2, 3, 4],},
        {id: 3,purchasedProducts: [3, 4, 5],},
      ];


      const user = users.find((user) => user.id === 1);

        const relatedProducts = users.filter((otherUser) => {
        const intersection = user.purchasedProducts.filter((product) => otherUser.purchasedProducts.includes(product));
        return intersection.length > 0;
        }).map((user) => user.purchasedProducts).reduce((a, b) => a.concat(b), []);
        const{email, newPassword, confrmPassword} = forgotPassForm;

    return (
        <div className="">
            <Nav />
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
                                <img src={shop12} width="100%" alt='' />
                            </div>
                            <div className='shopRound'>
                                <img src={shop11} width="100%" alt='' />
                            </div>
                        </div>
                        <div className='col-2'></div>
                        {!forgotPass?(
                        <div className='col-5'>
                            <div className='signupForm'>
                                <h4 className='text-white'>Login</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                                <div className="sign-input">
                                    <TextField type='email' name="email" value={loginForm.email} label="Email *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.email}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name="password" value={loginForm.password} label="Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.password}</div>
                                </div>
                                {!forgotPass&&
                                <div className='d-flex f14 justify-content-between mt-3 mx-4 px-2'>
                                    <div><button className='border-0  colr' onClick={()=>setForgotPass(true)}>Forgot password?</button></div>
                                    <div>Create a account?<Link className='colr' to="/signup"> Sign up</Link></div>
                                </div>
                                }

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5' onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                        ):(
                            <div className='col-5'>
                            <div className='signupForm'>
                                <h4 className='text-white'>Forgot Password</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                                <div className="sign-input">
                                    <TextField type='email' name="email" value={email} label="Email *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.email}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name="newPassword" value={newPassword} label="New Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.newPassword}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name="confrmPassword" value={confrmPassword} label="Confrm Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.confrmPassword}</div>
                                </div>
                                

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5'>Submit</button>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                </div>

            </div>






        </div>
    )
}
export default Login;