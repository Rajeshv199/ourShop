import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "../components/Nav";
import axiosInstance from "../services/axoisSetup";

function ShopList() {
    const [shopRate, setShopRate] = useState([]);
    const { state } = useLocation();
    const ratingArr = [1, 2, 3, 4, 5]


    const fatchRating = async () => {
        try {
            let response="";
            if(state){
                response = await axiosInstance.post(`/reviews/${state}`, {});
            }else{
                response = await axiosInstance.get(`/reviews`, {});
            }
            
            let data = response.data;
            console.log(data.reviews);
            if (data.success) {
                setShopRate(data.reviews);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    useEffect(() => {
       
            fatchRating();
        

        // Fetch products when the components mounts
        // fetchShopList();
    }, []);



    return (
        <div >

            <Navbar />

            <div className='container my-5'>
                <div className='text-center'><h1>What Our Customers Say</h1></div>
                
                    <div className='my-4'>
                        {shopRate[0]?shopRate.map((s1, index) => (
                            <div className='rateCard'>
                                <p className='m-0 text-secondary'>
                                    <span>*&nbsp;&nbsp;</span>{s1.comment}<span>&nbsp;&nbsp;"</span>
                                </p>
                                <div className='d-flex justify-content-between mt-2'>
                                    <div>{s1.name}</div>
                                    <div>
                                        {ratingArr.map((no, index) => (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16px" className={"mx-1 cursor-pointer " + (index < s1.rating ? "text-warning" : "")} key={index}>
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        )):(
                            <h5 className='text-warning text-center my-5'>Rating not found</h5>
                        )}
                    </div>
               

            </div>



        </div>
    );
}

export default ShopList;