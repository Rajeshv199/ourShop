import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from "../apiConfig/axoisSetup";


const DisplayProdList = () => {
    let { state } = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchProduct = async () => {
        try {
            const response = await axiosInstance.get(`/productlist/${state.id}`, {});
            let data = response.data;
            if (data.success) {
                setProducts(data.shops);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchProduct();
        setTimeout(() => { setLoading(true) },300);

    }, []);

    return (
        <div >
            <Navbar />
            <div className='m-auto' style={{ width: "90%" }}>
                <h5 className='fontWeight my-3'> Results </h5>
                {loading &&
                    <div>
                        {products[0] ? (
                            <div className='row' >
                                {products.map((p1, index) => (
                                    <div className='col-3 prodCart' key={index}>
                                        <Link to={`/${state.name}/product-details/${p1._id}`} state={{ id: p1._id }}>
                                            <div className='prodImg'>
                                                <img src={p1.image[0].url} alt='' />
                                            </div>
                                            <div className='py-2 px-3'>
                                                <div className='fontWeight my-2'>{p1.name}</div>
                                                <div className='d-flex'>
                                                    <div className='mr-3 fontWeight'>₹ {p1.price}</div>
                                                    {/* <div className='f12 mx-4 mt-1'>M.R.P: <del>₹4,499</del></div> */}
                                                </div>
                                                <div className='f14 my-2'>{p1.brand}</div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <h5 className='text-warning my-5 text-center'>No Product Found</h5>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}
export default DisplayProdList;