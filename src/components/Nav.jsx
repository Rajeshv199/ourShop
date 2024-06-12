import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { addToCart } from "../redux/cartActions";
// import { store } from "../redux/store";
// import Singlepage from '../RedirectPage/Singlepage'
import Modal from "./modale";
import axiosInstance from "../services/axoisSetup";
import TextField from '@mui/material/TextField';




const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const location = useLocation();
    const [ratingPop, setRatingPop] = useState(false);
    const [ratingForm, setRatingForm] = useState({ name: "", comment: "", rating: "" });
    const ratingArr = [1, 2, 3, 4, 5]
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRatingForm({ ...ratingForm, [name]: value });

    }

    const RatingPop = () => {
        setRatingPop(!ratingPop);
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/login");

    }

    const handleRate = async () => {
        const newErrors = validateForm(ratingForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log(ratingForm);
            try {
                const response = await axiosInstance.post(`/review`, ratingForm, {});
                console.log(response);
                const data = response.data;
                if (data.success) {
                    RatingPop();
                    setRatingForm({ name: "", comment: "", rating: "" });
                } else {
                    alert('Please enter a valid details');
                }
            } catch (err) {
                console.log(err);
                const data = err.response.data;
                // alert(data.message);
                console.error('An error occurred :', data.message);
            }
        }
    }
    const validateForm = (data) => {
        const errors = {};
        const { name, comment, rating } = data;
        if (!name) {
            errors.name = 'This field is required';
        }
        if (!comment) {
            errors.comment = 'This field is required';
        }
        if (!rating) {
            errors.rating = 'This field is required';
        }
        
        return errors;

    }

    const { name, comment, rating } = ratingForm;

    return (
        <div>
            <div className="Navbar">
                <div className='d-flex mt-1'>
                    <Link to={auth ? "/" : "#"}>
                        <img alt="Logo" className='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' />
                    </Link>

                    <div className='mx-3 mt-2'><Link to="/" className='text-white'>Home</Link></div>
                    {auth &&
                        <div className='mx-3 mt-2'>
                            <Link className={location.pathname === "/shopList" ? "text-info" : "text-white"} to="/shopList">Shop</Link>
                        </div>
                    }
                    {location.pathname === "/" &&
                        <div className='mx-3 mt-2 ' onClick={RatingPop}>Rate</div>
                    }
                    {location.pathname === "/" || location.pathname === "/Review" ?
                        <div className='mx-3 mt-2'>
                            <Link className={location.pathname === "/Review" ? "text-info" : "text-white"} to="/Review">Review</Link>
                        </div>
                        : ""}
                </div>

                {auth &&
                    <div className='d-flex mt-2'>
                        <Link to="/createshop" className={location.pathname === "/createshop" ? "text-info" : "text-white"}><div className='mt-1 mx-4'>Add Shop</div></Link>

                        <div className='mx-4 mt-1' onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" ></i></div>
                        <div className='mx-4 mt-1' >
                            <Link to="/profile" className={location.pathname === "/profile" ? "text-info" : "text-white"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24px " className="">
                                    <path strokeLinecap="round" trokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                }

                {!auth && location.pathname === "/" &&
                    <div className='d-flex mt-2'>
                        <Link to="/signup" className='text-white'><div className='mt-1 mx-4'>Sign Up</div></Link>
                    </div>
                }




            </div >
            <div>
                <Modal toggle={ratingPop} Toggle={RatingPop} title="" classWidth="ratingPup">
                    <div className='text-center title'>
                        <h4 className='colr-blue'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" className='mb-1' fill="#4DBC9C"><path d="M202.92-130q-30.3 0-51.3-21-21-21-21-51.31v-319.54q-24.16-19.84-36.27-51.5-12.12-31.65-.5-68.34l40.46-132.16q8-25.23 27.15-40.69Q180.62-830 207.23-830h546q26.62 0 45.46 14.77 18.85 14.77 27.46 40.62l41.23 132.92q11.62 36.69-.5 68.11-12.11 31.43-36.27 52.5v318.77q0 30.31-21 51.31-21 21-51.3 21H202.92Zm365.7-420q32.77 0 49.27-20.04t13.5-43.04L607.08-770h-96.47v158q0 25.23 17.08 43.62Q544.77-550 568.62-550Zm-180 0q27.61 0 44.8-18.38 17.2-18.39 17.2-43.62v-158h-96.47l-24.3 158.46q-3.24 21.31 13.38 41.43Q359.85-550 388.62-550Zm-178 0q22.23 0 38.23-15.5 16-15.5 19.77-38.96L292.15-770h-84.92q-6.54 0-10.38 2.88-3.85 2.89-5.77 8.66l-38.47 130.15q-7.92 25.77 7.47 52.04Q175.46-550 210.62-550Zm540 0q32.46 0 49.69-25.5 17.23-25.5 8.31-52.81l-40.47-130.92q-1.92-5.77-5.76-8.27-3.85-2.5-10.39-2.5h-82.92l23.53 165.54q3.77 23.46 19.77 38.96t38.24 15.5Z" /></svg>
                            Share your opinion with us
                        </h4>
                    </div>
                    <hr className='my-2' />
                    <div className="text-center my-4">
                        <div >
                            <TextField className='w-75' name="name" value={name} label="Name" size="small" onChange={handleChange} />
                        </div>
                        <div className='mt-4'>
                            <TextField className='w-75' name="comment" value={comment} label="Comment" multiline rows={2} size="small" onChange={handleChange} />
                        </div>

                        <div className='d-flex justify-content-around w-75 m-auto my-4'>
                            {ratingArr.map((no, index) => (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40px" className={"mx-1 cursor-pointer " + (index < +rating ? "text-warning" : "")} onClick={() => setRatingForm({ ...ratingForm, rating: +index + 1 })} key={index}>
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            ))}

                        </div>
                        

                        <button className="btn text-white bg-primary my-2 w-75" onClick={handleRate}>Rate</button>


                    </div>

                </Modal>
            </div>
        </div>

    )
}
export default Nav;