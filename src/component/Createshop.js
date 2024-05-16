import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar2";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../../../frontend/src/createshop.css'
import '../css/createshop.css'
import axios from 'axios';

const Createshop = () => {
    const auths = localStorage.getItem('admin');

    const { id } = useParams();
    console.log(id)

    const [formData, setFormData] = React.useState({
        Name: '',
        city: '',
        location: '',
        password: '',
    });

    const { Name, city, location, password } = formData;
    const [image, setImage] = React.useState('');
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        if (e.target.name === 'image') {
            const render = new FileReader();

            render.onload = () => {
                if (render.readyState === 2) {
                    setImage(render.result)
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const createshop = async (e) => {
        e.preventDefault();
        try {
            if (!image) {
                toast.error('Please select an image for the shop.');
                return;
            }

            const myForm = new FormData();
            myForm.append('Name', Name);
            myForm.append('location', location);
            myForm.append('city', city);
            myForm.append('password', password);
            myForm.append('image', image);

            let { data } = await axios.post("http://localhost:5000/createshops", myForm, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            //    data = await data.json()
            console.log(data)
            localStorage.setItem("admin", JSON.stringify(data.shopData))
            toast.success("Added Successfully");
            setTimeout(() => {
                navigate("/admin")

            }, 1000)
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error("No response received from the server. Please try again later.");
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };

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
                                    <TextField type='text' label="Shop Name" variant="outlined" size="small" />
                                </div>
                                <div className="sign-input">
                                    <TextField type='file'  variant="outlined" size="small" />
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' label="Location" variant="outlined" size="small" />
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' label="City" variant="outlined" size="small" />
                                </div>
                                <div className="sign-input">
                                    <TextField type='text' label="Password" variant="outlined" size="small" />
                                </div>


                               

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5'>Submit</button>
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
