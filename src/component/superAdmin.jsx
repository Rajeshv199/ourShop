import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../apiConfig/axoisSetup";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const options1 = [
    { value: "Electronics", label: "Electronics" },
    { value: "Furniture", label: "Furniture" },
    { value: "Jewelry", label: "Jewelry" },
    { value: "Sporting goods", label: "Sporting goods" },
    { value: "Beauty", label: "Beauty" },
    { value: "Food and beverage", label: "Food and beverage" },
    { value: "Household items", label: "Household items" },
];

const SuperAdmin = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [shopRate, setShopRate] = useState([]);
    const [shops, setShops] = useState([]);
    const [option, setOption] = useState("review");
    const auth = localStorage.getItem('user');

    const ratingArr = [1, 2, 3, 4, 5]

    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const fatchRating = async () => {
        try {
            let response = await axiosInstance.get(`/reviews`, {});
            let data = response.data;
            console.log(data.reviews);
            if (data.success) {
                setShopRate(data.reviews);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchShopList = async () => {
        try {
            const response = await axiosInstance.get(`/shops`, {});
            let data = response.data;
            if (data.success) {
                setShops(data.shops);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`/review/delete/${id}`, {});
            let data = response.data;
            if (data.success) {
                alert("Review deleted successfully");
                fatchRating();
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }
    const handleShopDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`/admin/deleteshop/${id}`, {});
            let data = response.data;
            if (data.success) {
                alert(data.message);
                fetchShopList();
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin');
        navigate("/");

    }
    useEffect(() => {
        fatchRating();
        fetchShopList();

    }, []);

    const getActionOption = (id) => {
        return (
            <div className="template-demo flex-nowrap cursor-pointer mr-2 w-100">
                <span className="material-symbols-outlined text-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">more_vert</span>
                <div className="dropdown-menu branchDropdown p-0 mr-3" aria-labelledby="dropdownMenuButton">
                    <span className="dropdown-item item_del  d-flex align-items-center" data-toggle="modal" data-target="#exampleModalDelete" onClick={() => handleShopDelete(id)}>
                        <span className="material-symbols-outlined text-dark px-1 py-1" >Delete</span>Delete</span>
                </div>
            </div>
        )
    }


    let auth2 = JSON.parse(auth);


    return (
        <div>
            <div className="Navbar">

                <div className={`side-menu  ${isOpen ? 'open' : ''}`}>
                    <div className='profileName'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={26} className="mb-1 mx-2">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                        {auth ? auth2.name : "Hello, Sign in"}
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={24}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <nav className="menu-items">
                        <div className='text-dark fw-bold'>Options</div>
                        <Link to="#" onClick={() => { toggleMenu(); setOption("review") }}>Review</Link>
                        <Link to="#" onClick={() => { toggleMenu(); setOption("shops") }}>All Shops</Link>
                        <Link to="#" onClick={() => { toggleMenu(); setOption("category") }}>Category</Link>
                    </nav>

                    <div className='logout'>
                        <span onClick={handleLogout}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                            Logout
                        </span>
                    </div>

                </div>



                <div className='d-flex mt-1'>
                    <div style={{ marginTop: "6px" }} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24px" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className='mx-3 mt-2'>All</div>
                </div>


                <div className='d-flex mt-2'>
                    <span onClick={handleLogout}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                        &nbsp;Logout
                    </span>

                </div>

            </div >

            <div>
                {option === "review" &&
                    <div className='container my-5'>
                        <div className='text-center'><h1>What Our Customers Say</h1></div>

                        <div className='my-4'>
                            {shopRate[0] ? shopRate.map((s1, index) => (
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
                                        <div>
                                            <div className="template-demo flex-nowrap cursor-pointer mr-2 w-100">
                                                <span className="material-symbols-outlined text-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">more_vert</span>
                                                <div className="dropdown-menu branchDropdown p-0 mr-3" aria-labelledby="dropdownMenuButton">
                                                    <span className="dropdown-item item_del  d-flex align-items-center" data-toggle="modal" data-target="#exampleModalDelete" onClick={() => handleDelete(s1._id)}>
                                                        <span className="material-symbols-outlined text-dark px-1 py-1" >Delete</span>Delete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <h5 className='text-warning text-center my-5'>Rating not found</h5>
                            )}
                        </div>


                    </div>
                }

                {option === "shops" &&
                    <div className='container-fluid'>
                        <div className='bordr-watr rounded  my-4 pb-3'>
                            <div className='bg-water py-2 px-3 fontWeight'>List Shop</div>
                            <div className=''>
                                {shops[0] ?
                                    <div className='my-3 '>
                                        <div className='row mx-0 d-flex text-white f14'>
                                            {/* <div className="listRadio bg-Arsenic py-2"><div></div></div> */}
                                            <div className='col-1 bg-Arsenic py-2'>Shop ID</div>
                                            <div className='col-2 bg-Arsenic py-2'>Name</div>
                                            <div className='col-2 bg-Arsenic py-2'>Email</div>
                                            <div className='col-2 bg-Arsenic py-2'>Mobile No</div>
                                            <div className='col-1 bg-Arsenic py-2'>Image</div>
                                            <div className='col-2 bg-Arsenic py-2'>Location</div>
                                            <div className='col-1 bg-Arsenic py-2'>city</div>
                                            <div className='col-1 bg-Arsenic py-2'>Action</div>
                                        </div>
                                        {shops.map((d1, index) =>
                                            <div className='row mx-0 d-flex text-dark f14' key={index}>
                                                {/* <div className="listRadio text-center bg-ligtQuat py-2"><input type="checkbox" name="id" /></div> */}
                                                <div className='col-1 bg-ligtQuat pt-1'>{d1.shopId}</div>
                                                <div className='col-2 bg-ligtQuat pt-1'>{d1.Name}</div>
                                                <div className='col-2 bg-ligtQuat pt-1'>{d1.email}</div>
                                                <div className='col-2 bg-ligtQuat pt-1'>{d1.mobileNo}</div>
                                                <div className='col-1 bg-ligtQuat pt-1 text-center'><img width="40px" height="40px" src={d1.image.url} alt='' /></div>
                                                <div className='col-2 bg-ligtQuat pt-1'>{d1.location}</div>
                                                <div className='col-1 bg-ligtQuat pt-1'>{d1.city}</div>
                                                <div className='col-1 bg-ligtQuat pt-1'>{getActionOption(d1._id)}</div>
                                            </div>

                                        )}
                                    </div>
                                    : (
                                        <h5 className='text-center my-5 text-secondary'>Shop not found</h5>
                                    )}

                            </div>
                        </div>
                    </div>
                }

                {option === "category" &&
                    <div className='container my-5'>
                        <div className='d-flex'>
                            <div className='w-25 '>
                                <TextField className='w-100' name="name"  label="Parent Category  *" size="small" ></TextField>
                                <div className='error2'></div>
                            </div>
                            <div className='mx-5'><button className='btn btn-primary '>Save</button></div>
                        </div>
                        <hr/>

                        <div className='d-flex my-4'>

                            <div className='w-25 mr-4'>
                                <Select  options={options1} placeholder="Choose Parent Category"  />
                                <div className='error2'></div>
                            </div>

                            <div className='w-25 mx-4'>
                                <TextField className='w-100' name="name"  label="Add Child Category  *" size="small" ></TextField>
                                <div className='error2'></div>
                            </div>

                            <div>
                                <button className='btn btn-primary'>Save</button>
                            </div>

                        </div>

                        <div className='d-flex my-5'>
                            <div className='mx-3 fontWeight mt-1'>Filter</div>
                            <div >
                                <Select  options={options1} placeholder="Choose Parent Category"  />
                            </div>
                        </div>

                        <div className='row text-white'>
                            <div className='col-2 bg-dark border py-2'>Id</div>
                            <div className='col-3 bg-dark border py-2'>Category</div>
                        </div>
                        <div className='row'>
                            <div className='col-2 border py-2'>12540</div>
                            <div className='col-3 border py-2'>Electronics</div>
                        </div>

                    </div>
                }
            </div>



        </div>

    )
}
export default SuperAdmin;