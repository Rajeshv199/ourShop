import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Item from '../component/Item'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
// import { addToCart } from "../redux/cartActions";
// import { store } from "../redux/store";
// import Singlepage from '../RedirectPage/Singlepage'
import { useSelector } from "react-redux";




const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const auths = localStorage.getItem('admin');



    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems.length)
    // const dispatch = useDispatch();
    return (
        <div className="Navbar">
            <div className='d-flex mt-1'>
                <Link to="/">
                    <img alt="Logo" className='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' />
                </Link>

                <div className='mx-3 mt-2'><Link to="/" className='text-white'>Home</Link></div>
                <div className='mx-3 mt-2'>Item</div>

            </div>


            <div className='d-flex mt-2'>
                <div className='mt-1 mx-4'>Add Shop</div>
                <div className='mx-4 mt-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" class="w-6 h-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                </div>
                <div className='mx-4 mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px " class="">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            </div>
            
            {/* {!auth ?  */}
            {/* <ul className='nav-ul'>
                <li className=''><Link to="/">Home</Link></li>

                <div className='nav-profile'>
                    <li className='rightside'><Link to="/profile"><CgProfile /></Link></li>
                </div>
                <div className='add-to-cart'>
                    <li className='rightside'>
                        <Link to="/singlepage">
                            <FaCartShopping />
                            <span className="addtocart-quality">{cartItems?.length ?? 0}</span>
                        </Link>
                    </li>
                </div>
                {window.location.href === "http://localhost:3000/createshop" ? "" :
                    <li className='rightside'><Link to="/createshop"><GrAid />AddShop</Link></li>
                }
                <Item />

                {!auths ?
                    (<li className='rightside'>
                        <Link to="/admin">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="18px" class="mb-1 mx-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>Admin
                        </Link> </li>)
                    :
                    " "
                }
            </ul> */}

                {/* : */}
                {/* <ul className='nav-ul'>

                    <li className='rightside'><Link to="/login">Login</Link></li>

                </ul> */}
            {/* } */}




        </div >

    )
}
export default Nav;