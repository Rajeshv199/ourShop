import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout=()=>{
        localStorage.removeItem('admin');
        navigate("/");

    }
    

    let auth2 = JSON.parse(auth);
    

    return (
        <div className="Navbar">

            <div className={`side-menu  ${isOpen ? 'open' : ''}`}>
                <div className='profileName'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={26} className="mb-1 mx-2">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    {auth?auth2.name:"Hello, Sign in"}
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                <nav className="menu-items">
                    <div className='text-dark fw-bold'>Category</div>
                    <Link to="/ParentCategory" onClick={toggleMenu}>Parent Category</Link>
                    <Link to="/ChildCategory" onClick={toggleMenu}>Child Category</Link>
                </nav>
                <hr className='text-dark my-1' />
                <nav className="menu-items">
                    <div className='text-dark fw-bold'>Shop By Category</div>
                    <Link to="/admin/addProduct" onClick={toggleMenu}>Add Product</Link>
                    <Link to="/admin/listProduct" onClick={toggleMenu}>List Product</Link>
                    <Link to="/admin/shopReview" onClick={toggleMenu}>Review</Link>
                </nav>

                <div className='logout'>
                    <span onClick={handleLogout}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                        Logout
                    </span>
                </div>
                
            </div>



            <div className='d-flex mt-1'>
                <div style={{ marginTop: "6px" }} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24px" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className='mx-3 mt-2'>All</div>
                <div className='mx-3 mt-2'>Fashion</div>
                <div className='mx-3 mt-2'>Clothes</div>
                <div className='mx-3 mt-2'>Electronics</div>

            </div>


            <div className='d-flex mt-2'>

                <div className='mx-4 mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20px">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <div className='mt-1 mx-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" onClick={handleLogout}>
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                </div>
            </div>

        </div >

    )
}
export default Nav;