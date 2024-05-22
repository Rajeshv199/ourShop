import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import Navbar from './Nav';




const Profile = () => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem('user');
        navigate("/");

    }

    const user = JSON.parse(localStorage.getItem('user'));
    return (

        <div >
            <Navbar />
            <div className="profile-card">
                <div className='row mx-0'>
                    <div className='col-4 leftSide '>
                        <div className='profile-Img'>
                            <img className='rounded-circle' width="100px" height="100px" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.623821449.1706697601&semt=sph" alt="img" />
                        </div>
                        <div className='py-3 text-white'> <h5>{user.name}</h5></div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" class="text-white cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </div>
                    <div className='col-8 px-4 py-2 rightSide'>
                        <div className='border-bottom'>Information</div>
                        <div className='row mx-0 py-3'>
                            <div className='col-1 col-xl-6'> 
                                <div className='fontWeight'>Email</div>
                                <div className='mt-1 text-secondary'>{user.email}</div>
                            </div>
                            {/* <div className='col-1 col-xl-6'>
                                <div className='fontWeight'>Phone</div>
                                <div className='mt-1 text-secondary'>9856325412</div>
                            </div> */}
                        </div>
                        <div className='border-bottom'></div>
                        <div className='text-primary py-3 cursor-pointer'>Change Password</div>
                       
                        <div className='fontWeight cursor-pointer py-2' onClick={handleLogout}>Logout</div>
                    </div>
                </div>
                
                <div className='d-flex'>
                    <div className="profile-box">
                        <div className="profile-img">
                            
                            <div className="profile-custom">
                               

                            </div>
                        </div>
                        

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Profile;