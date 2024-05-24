import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav";
import HomePage from "../images/homepage.png";
import HomePage2 from "../images/startbusni.png";
import pageActive from "../images/pageActive.png";
import Shoplist from "../images/shoplist.png";
import Buttom from "../images/button.png";
import SecondHome from "../images/secondHome.png";
import Signup from "../images/signup.png";
import Addshop from "../images/addshop.png";
import CreateShop from "../images/createShop.png";


function Help() {

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)


    const Active = () => {
        setActive(!active)
        setActive2(false);
    }
    const Active2 = () => {
        setActive(false)
        setActive2(!active2)
    }
    const Active3 = () => {
        setActive3(!active3)
    }





    return (
        <div >

            <Navbar />

            <div className='container mb-5'>
                <div className='text-center my-5'><h1 className='fw-bold'>Frequently Asked Questions</h1></div>

                <div className='helpContainer' onClick={() => Active()}>
                    <div className='d-flex justify-content-between fw-bold'>
                        <div>{active ? "Ans " : "Q "} View Shop</div>
                        <div>
                            {active ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" className="bg-light p-1 rounded-circle" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" className="bg-light p-1 rounded-circle">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}
                        </div>
                    </div>
                    {active &&
                        <div className='mx-5 fontWeight'>
                            <div className='mt-4 mb-3'>Dashboard Home Page</div>
                            <div><img width="100%" src={HomePage} alt='' /></div>
                            <div><img width="100%" src={HomePage2} alt='' /></div>

                            <div className='mt-4 mb-3'>Step 1 : Click on “Shop Now” Button.</div>
                            <div><img width="100%" src={pageActive} alt='' /></div>

                            <div className='mt-4 mb-3'>Step 2 : Page Scroll on Shop.</div>
                            <div className='row'>
                                <div className='col-4'><img width="100%" src={Shoplist} alt='' /></div>
                                <div className='col-2'></div>
                                <div className='col-6'>
                                    <div className='mt-4 mb-3'>Step 3 : Click on “view shop”.</div>

                                    <div><img width="28%" src={Buttom} alt='' /></div>
                                    <div className='my-3 text-dark'>After clicking on “View Shop” you can able to see products/Items of the shop.</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className='helpContainer' onClick={() => Active2()}>
                    <div className='d-flex justify-content-between fw-bold' >
                        <div>{active2 ? "Ans " : "Q "} How to Create a Shop</div>
                        <div>
                            {active2 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" className="bg-light p-1 rounded-circle" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" className="bg-light p-1 rounded-circle">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}
                        </div>
                    </div>
                    {active2&&
                    <div className='mx-5 fontWeight'>
                        <div className='mt-4 mb-3 text-secondary'>
                            <span className='text-danger'>Note*</span> : Before creating a shop need to Register as a Owner of the shop. Shop owner can create multiple shop and that shop has particular credentials.
                        </div>

                        <div className='text-dark' style={{fontSize:"20px"}}>Q 1.1 : How to Register as a Shop owner ?</div>
                        
                        <div className='mt-3 mb-3'>Step 1. Click on “Sign up button/menu” </div>
                        <div><img width="100%" src={HomePage} alt='' /></div>
                        <div><img width="100%" src={SecondHome} alt='' /></div>

                        <div className='mt-4 mb-3'>Step 2 : Type Name, Email, Password & Confirm in below box.</div>
                            <div className='row'>
                                <div className='col-4'><img width="100%" src={Signup} alt='' /></div>
                                <div className='col-2'></div>
                                <div className='col-6 mt-3'>
                                    <div className='my-3 text-dark mt-5'  style={{fontSize:"20px"}}>Step 3. After filling form if you click on Sign up button then you successfully register as a shop owner.</div>
                                </div>
                            </div>
                        </div>
                    }


                </div>
                <div className='helpContainer' onClick={() => Active3()}>
                    <div className='d-flex justify-content-between fw-bold' >
                        <div>{active3 ? "Ans ":"Q "}How to add Shop</div>
                        <div>
                            {active3 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" className="bg-light p-1 rounded-circle" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" className="bg-light p-1 rounded-circle">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}
                        </div>
                    </div>
                    {active3&&
                    <div className='mx-5 fontWeight'>
                        
                        <div className='mt-3 mb-3'>Step 1 : Click on “Add Shop” button.</div>
                        <div><img width="100%" src={Addshop} alt='' /></div>
                        <div><img width="100%" src={HomePage2} alt='' /></div>

                        <div className='mt-4 mb-3'>Step 2 : Type Shop Name, Browse Image, Location, City ,Pincode & Password in below box.</div>
                            <div className='row'>
                                <div className='col-4'><img width="100%" src={CreateShop} alt='' /></div>
                                <div className='col-2'></div>
                                <div className='col-6 mt-3'>
                                    <div className='my-3 text-dark mt-5'  style={{fontSize:"20px"}}>Step 3. After filling form if you click on “Submit” button then you Successfully Created shop.</div>

                                    <div className='my-5'><span className='text-danger'>Note* </span>: After creating a shop, Shop owner able to shop owner can able to submit product of the shop.</div>
                                </div>
                            </div>
                        </div>
                    }

                    
                </div>

            </div>


        </div>
    );
}

export default Help;
