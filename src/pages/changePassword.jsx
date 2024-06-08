import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import shop11 from "../assets/images/shop11.png"
import shop12 from "../assets/images/shop12.png";
import Nav from '../components/Nav';
import axiosInstance from "../services/axoisSetup";



// import Signup from './Signup';

const ChangePassword = () => {

    const [changePass, setChangePass] = useState({ oldPassword: "", newPassword: "",confirmNewPassword:"" });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));

    const handleChange = (e) => {
        setChangePass({...changePass,[e.target.name] : e.target.value});
    }

    const handleChangePass = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(changePass);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.put(`/user/${user.id}/change-password`, changePass, {})
                const data = response.data;
                if (data.success) {
                    alert(data.message);
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
        const{oldPassword, newPassword,confirmNewPassword} = data;
        
        if (!oldPassword) {
            errors.oldPassword = 'This field is required';
        }
        if (!newPassword) {
            errors.newPassword = 'This field is required';
        }else if(!(newPassword.length>5)){
            errors.newPassword = "Password length must be atleast 6 characters";
        }
        if (!confirmNewPassword) {
            errors.confirmNewPassword = 'This field is required';
        }else if(newPassword!==confirmNewPassword){
            errors.confirmNewPassword ="Passwords did not match";
        }
        return errors;

    }

    const { oldPassword, newPassword,confirmNewPassword } = changePass;


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
                                <h4 className='text-white'>Update Password</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                                <div className="sign-input">
                                    <TextField type='password' name="oldPassword" value={oldPassword} label="Old Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.oldPassword}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name="newPassword" value={newPassword} label="New Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.newPassword}</div>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' name="confirmNewPassword" value={confirmNewPassword} label="Confirm Password *" variant="outlined" size="small" onChange={handleChange} />
                                    <div className='error'>{errors.confirmNewPassword}</div>
                                </div>

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5' onClick={handleChangePass}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        </div>
    )
}
export default ChangePassword;