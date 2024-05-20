import React from 'react';
import '../css/Profile.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import Navbar from './Nav';




const Profile = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    const auth = localStorage.getItem('user');
    return (

        <div >
            <Navbar />
            <div className="profile-img-1">
                <div className="profile">
                    <h1>profile</h1>
                </div>
                <div className='d-flex'>
                    <div className="profile-box">
                        <div className="profile-img">
                            <img src="https://assets-static.invideo.io/images/large/Male_1b399a4e96.webp" alt="img" ></img>
                            <div className="profile-custom">
                                <h4> Hii {JSON.parse(auth).name}</h4>

                            </div>
                        </div>
                        <div className="profile-details">
                            <div className="profile-menu">
                                <h2>Name:</h2><h1>{JSON.parse(auth).name}</h1>
                            </div>
                            <div className="profile-menu">
                                <h2>Gmail:</h2><h1>{JSON.parse(auth).email}</h1>
                            </div>
                            {/* <div className="profile-menu">
                        <h2>Contact:</h2><h1>{JSON.parse(auth).contact}</h1>
                    </div> */}
                            <div className="text-center fw-bold">
                                <MdLogout />
                                <Link onClick={logout} to="/login"> Logout</Link>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Profile;