import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar2";
import axiosInstance from "../services/axoisSetup";

const ChildCategory = () => {

    const [ChildCategory, setChildCategory] = useState([]);

    const admin = JSON.parse(localStorage.getItem('admin'));

    const fetchChildCategory = async () => {
        try {
            const response = await axiosInstance.get(`/productlist/${admin.id}`, {});
            let data = response.data;
            if (data.success) {
                setChildCategory(data.shops);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };




    useEffect(() => {
        fetchChildCategory();

    }, []);


    return (
        <div>
            <Navbar />

            <div>
                <div className='container-fluid'>
                    <div className='bordr-watr rounded  my-4 pb-3'>
                        <div className='bg-water py-2 px-3 fontWeight'>Child Category List</div>
                        <div className='m-3 '>
                            <div className='row mx-0 d-flex text-white f14'>
                                {/* <div className="listRadio bg-Arsenic py-2"><div></div></div> */}
                                <div className='col-2  bg-Arsenic py-2'>Child Category</div>
                            </div>

                            {ChildCategory.map((p1,index)=>(
                                <div className='row mx-0 d-flex text-dark f14' key={index}>
                                    <div className='col-2  bg-ligtQuat py-2'>{p1.subCategory}</div>
                                </div>
                            ))}

                        

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default ChildCategory;