import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axiosInstance from "../apiConfig/axoisSetup";

function ShopList() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState({ parentCategory: "", category: "" });

    const handleChange = (e) => {

        setFilterData({ ...filterData, [e.target.name]: e.target.value });

    };

    const user = JSON.parse(localStorage.getItem('user'));

    const fetchShopList = async () => {
        try {
            const response = await axiosInstance.get(`/user-shops-list?userId=${user.id}`, {});
            let data = response.data;
            if (data.success) {
                setData(data.shops);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`/admin/deleteshop/${id}`, {});
            let data = response.data;
            if (data.success) {
                alert(data.message);
                fetchShopList();
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };




    const getActionOption = (data) => {
        return (
            <div className="template-demo flex-nowrap cursor-pointer mr-2 w-100">
                <span class="material-symbols-outlined text-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">more_vert</span>
                <div class="dropdown-menu branchDropdown p-0 mr-3" aria-labelledby="dropdownMenuButton">
                    <Link to="/createshop" state={data}>
                    <span class="dropdown-item d-flex item_edit align-items-center" data-toggle="modal" data-target="#exampleModalArchieve">
                        <span class="material-symbols-outlined text-dark px-1 py-1">Edit</span>Edit</span>
                    </Link>
                    <span class="dropdown-item item_del  d-flex align-items-center" data-toggle="modal" data-target="#exampleModalDelete" onClick={() => handleDelete(data._id)}>
                        <span class="material-symbols-outlined text-dark px-1 py-1" >Delete</span>Delete</span>
                </div>
            </div>
        )
    }



    useEffect(() => {
       
        // Fetch products when the component mounts
        fetchShopList();
    }, []);

    // console.log(filterData);
    const { parentCategory, category } = filterData;

    let dataArr = data;
    dataArr = parentCategory ? dataArr.filter(da => da.category === parentCategory) : dataArr;
    dataArr = category ? dataArr.filter(da => da.subCategory === category) : dataArr;

    console.log(dataArr);



    return (
        <div >

            <Navbar />

            <div className='container-fluid'>
                <div className='bordr-watr rounded  my-4 pb-3'>
                    <div className='bg-water py-2 px-3 fontWeight'>List Shop</div>



                    <div className=''>
                        {dataArr[0]?
                        <div className='my-3 '>
                            <div className='row mx-0 d-flex text-white f14'>
                                <div className="listRadio bg-Arsenic py-2"><div></div></div>
                                <div className='col-2 bg-Arsenic py-2'>Shop ID</div>
                                <div className='col-2 bg-Arsenic py-2'>Name</div>
                                <div className='col-2 bg-Arsenic py-2'>Image</div>
                                <div className='col-2 bg-Arsenic py-2'>Location</div>
                                <div className='col-2 bg-Arsenic py-2'>city</div>
                                <div className='col-1 bg-Arsenic py-2'>Action</div>
                            </div>
                            {dataArr.map((d1, index) =>
                                <div className='row mx-0 d-flex text-dark f14' key={index}>
                                    <div className="listRadio text-center bg-ligtQuat py-2"><input type="checkbox" name="id" /></div>
                                    <div className='col-2 bg-ligtQuat pt-1'>{d1.shopId}</div>
                                    <div className='col-2 bg-ligtQuat pt-1'>{d1.Name}</div>
                                    <div className='col-2 bg-ligtQuat pt-1'><img width="40px" height="40px" src={d1.image.url} alt='' /></div>
                                    <div className='col-2 bg-ligtQuat pt-1'>{d1.location}</div>
                                    <div className='col-2 bg-ligtQuat pt-1'>{d1.city}</div>
                                    <div className='col-1 bg-ligtQuat pt-1'>{getActionOption(d1)}</div>
                                </div>

                            )}
                        </div>
                        :(
                            <h5 className='text-center my-5 text-secondary'>Shop not found</h5>
                        )}

                    </div>
                </div>
            </div>


        </div>
    );
}

export default ShopList;
