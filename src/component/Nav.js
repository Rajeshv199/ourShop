import React from 'react';
import { Link, useNavigate,useLocation   } from 'react-router-dom';
// import { addToCart } from "../redux/cartActions";
// import { store } from "../redux/store";
// import Singlepage from '../RedirectPage/Singlepage'
import { useSelector } from "react-redux";




const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogout=()=>{
        console.log("ff");
        localStorage.removeItem('user');
        navigate("/login");

    }

    return (
        <div className="Navbar">
            <div className='d-flex mt-1'>
                <Link to={auth?"/":"#"}>
                    <img alt="Logo" className='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' />
                </Link>
               
                <div className='mx-3 mt-2'><Link to="/" className='text-white'>Home</Link></div>
                <div className='mx-3 mt-2'>Item</div>
              
            </div>

            {auth &&
            <div className='d-flex mt-2'>
                {!(location.pathname==="/createshop") &&
                <Link to="/createshop" className='text-white'><div className='mt-1 mx-4'>Add Shop</div></Link>
                }
                <div className='mx-4 mt-1' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket" ></i></div>
                <div className='mx-4 mt-1' >
                    <Link to="/profile" className='text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24px " className="">
                    <path strokeLinecap="round" trokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    </Link>
                </div>
            </div>
            }

            {!auth &&
                <div className='d-flex mt-2'>
                    <Link to="/signup" className='text-white'><div className='mt-1 mx-4'>Sign Up</div></Link>
                </div>
            }
            
           
        </div >

    )
}
export default Nav;