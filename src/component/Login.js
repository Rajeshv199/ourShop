import React, { useState,useEffect } from 'react';
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


const Login = () => {

    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [forgotPassForm, setforgotPassForm] = useState({ email: "", newPassword: "", confirmNewPassword: "" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [forgotPass, setForgotPass] = useState(false);
    const [allShop, setAllShop] = useState([]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
        if (forgotPass) {
            setforgotPassForm({ ...forgotPassForm, [name]: value });
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(loginForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/login`, loginForm, {})
                const data = response.data.result;
                if (data.name) {
                    localStorage.setItem("user", JSON.stringify({ id: data._id, name: data.name, email: data.email }));
                    navigate("/");

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

    const handleForgotPass = async (e) => {
        e.preventDefault();
        const newErrors = validateForm2(forgotPassForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/user/forgot-password`, forgotPassForm, {});
                const data = response.data.result;
                if (data.name) {

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
        const { email, password } = data;
        if (!email) {
            errors.email = 'This field is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'This field is required';
        } else if (!(password.length > 5)) {
            errors.password = "Password length must be atleast 6 characters";
        }
        return errors;

    }
    const validateForm2 = (data) => {
        const errors = {};
        const { email, newPassword, confirmNewPassword } = data;
        if (!email) {
            errors.email = 'This field is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!newPassword) {
            errors.newPassword = 'This field is required';
        } else if (!(newPassword.length > 5)) {
            errors.newPassword = "Password length must be atleast 6 characters";
        }
        if (!confirmNewPassword) {
            errors.confirmNewPassword = 'This field is required';
        } else if (newPassword !== confirmNewPassword) {
            errors.confirmNewPassword = "Passwords did not match";
        }
        return errors;

    }

    const getAllshop = async () => {
        try {
            const response = await axiosInstance.get(`/highest-rated-shop`, {});
            let data = response.data;
            if (data.success) {
                setAllShop(data.highestRatedShop.shops);
            }
        } catch (err) {
            const { data } = err.response;
            alert(data.message);
            console.error('An error occurred :', data);
        }
    };


    let imgArr = ["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: allShop.length <= 5 ? allShop.length : 5,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    };

    // const { email, password } = loginForm;

    const users = [
        { id: 1, purchasedProducts: [1, 2, 3], },
        { id: 2, purchasedProducts: [2, 3, 4], },
        { id: 3, purchasedProducts: [3, 4, 5], },
    ];

    useEffect(() => {
        getAllshop();

    },[]);

    const user = users.find((user) => user.id === 1);

    const relatedProducts = users.filter((otherUser) => {
        const intersection = user.purchasedProducts.filter((product) => otherUser.purchasedProducts.includes(product));
        return intersection.length > 0;
    }).map((user) => user.purchasedProducts).reduce((a, b) => a.concat(b), []);
    const { email, newPassword, confirmNewPassword } = forgotPassForm;

    return (
        <div className="">
            <Nav />
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
                        {!forgotPass ? (
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
                                    {!forgotPass &&
                                        <div className='d-flex f14 justify-content-between mt-3 mx-4 px-2'>
                                            <div><button className='border-0  colr' onClick={() => setForgotPass(true)}>Forgot password?</button></div>
                                            <div>Create a account?<Link className='colr' to="/signup"> Sign up</Link></div>
                                        </div>
                                    }

                                    <div >
                                        <button className='btn btn-primary text-center w-75 my-5' onClick={handleLogin}>Login</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
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
                                        <TextField type='password' name="confirmNewPassword" value={confirmNewPassword} label="Confrm Password *" variant="outlined" size="small" onChange={handleChange} />
                                        <div className='error'>{errors.confirmNewPassword}</div>
                                    </div>


                                    <div >
                                        <button className='btn btn-primary text-center w-75 my-5' onClick={handleForgotPass}>Submit</button>
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