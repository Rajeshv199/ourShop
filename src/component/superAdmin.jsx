import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../apiConfig/axoisSetup";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import Modal from "./modale/modale";

let parentCategArr = [];

const SuperAdmin = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [parentCategory,setParentCategory] = useState("");
    const [category,setCategory] = useState({parentCategory:"",childCategory:""});
    const [selectCategory, setSelectCategory] = useState('');
    const [signUpForm, setSignUpForm] = useState({ name: "", email: "", password: "", confrmPassword: "" });
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [allCategory, setAllCategory] = useState([]);
    const [filterCagegory, setFilterCagegory] = useState('');
    const [shopRate, setShopRate] = useState([]);
    const [shops, setShops] = useState([]);
    const [loginPop, setLoginPop] = useState(false);
    const [signupPop, setSignupPop] = useState(false);
    const [option, setOption] = useState("review");
    const [errors, setErrors] = useState({});
    const admin = localStorage.getItem('superAdmin');
    
    const ratingArr = [1, 2, 3, 4, 5]

    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const LoginPop = () => {
        setLoginForm({ email: "", password: "" });
        setLoginPop(!loginPop);
    }
    const SignupPop = () => {
        setSignUpForm({ name: "", email: "", password: "", confrmPassword: "" });
        setSignupPop(!signupPop);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
        setLoginForm({ ...loginForm, [name]: value });
    }
    const handleChangeSign = (e) => {
        const { name, value } = e.target;
        setSignUpForm({ ...signUpForm, [name]: value });
    }
    const handleSelectCategory = (data) => {
        let category2 = { ...category };
        setSelectCategory(data);
        category2["parentCategory"] = data.value;
        setCategory(category2);
    };

    const handleShowCateg=(data)=>{
        setFilterCagegory(data.value);
    }

    const handleSignup= async (e) =>{
        e.preventDefault();
        const newErrors = validateForm(signUpForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/signup-admin`, signUpForm, {});
                let data = response.data.result;
                if (response.status) {
                    alert('Signup Successfully');
                    navigate("/Super-Admin");
                    localStorage.setItem("superAdmin", JSON.stringify({ id: data._id, name: data.name,email:data.email}));
                    SignupPop()
                } else {
                    alert("Please enter a valid data")
                }

            } catch (err) {
                const {data} =err.response;
                alert(data.message);
                console.error('An error occurred :', data);
            }
        } 
    }
    const handleLogin= async (e) =>{
        e.preventDefault();
        const newErrors = validateForm2(loginForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                
                const response = await axiosInstance.post(`/adminlogin`, loginForm, {});
                let data = response.data.result;
                if (response.status) {
                    alert('Signup Successfully');
                    navigate("/Super-Admin");
                    localStorage.setItem("superAdmin", JSON.stringify({ id: data._id, name: data.name,email:data.email}));
                    setLoginPop(false);
                } else {
                    alert("Please enter a valid data")
                }

            } catch (err) {
                const {data} =err.response;
                alert(data.message);
                console.error('An error occurred :', data);
            }
        } 
    }

    const handleParentCateg = async ()=> {
        try {
            const response = await axiosInstance.post(`/addParentCategry`, {parentCategory}, {})
            const data = response.data;
            if (data.success) {
                alert(data.message);
                setParentCategory("");
                fatchCategory();
            } else {
                alert('Please enter a valid details');
            }
        } catch (err) {
            const data = err.response.data;
            alert(data.message);
            console.error('An error occurred :', data.message);
        }
    }

    const handleChildCateg = async ()=> {
        try {
            
            const response = await axiosInstance.put(`/addChildCategry`, category, {})
            const data = response.data;
            if (data.success) {
                alert(data.message);
                setCategory({parentCategory:"",childCategory:""});
                setSelectCategory('');
                fatchCategory();
            } else {
                alert('Please enter a valid details');
            }
        } catch (err) {
            const data = err.response.data;
            alert(data.message);
            console.error('An error occurred :', data.message);
        }
    }

    const fatchCategory = async () => {
        try {
            let response = await axiosInstance.get(`/categories`, {});
            let data = response.data;
            let categoryArr=[];
            if (data.success) {
                data.categoryies.map(d1=>{
                    categoryArr.push({value:d1.parentCategory,label:d1.parentCategory});
                });
                parentCategArr=categoryArr;
                setAllCategory(data.categoryies);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fatchRating = async () => {
        try {
            let response = await axiosInstance.get(`/reviews`, {});
            let data = response.data;
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

    const validateForm = (data) => {
        const errors = {};
        
        const{name, email, password, confrmPassword} = data;
        if (!name) {errors.name = 'This field is required';}
        else if(!(/^[A-Za-z\s]*$/.test(name))){
            errors.name = 'Enter a valid Name';
        }

        if (!email) {
            errors.email = 'This field is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'This field is required';
        }else if(!(password.length>5)){
            errors.password = "Password length must be atleast 6 characters";
        }
        if (!confrmPassword) {
            errors.confrmPassword = 'This field is required';
        }else if(password!==confrmPassword){
            errors.confrmPassword ="Passwords did not match";
        }
        
        return errors;

    }
    const validateForm2 = (data) => {
        const errors = {};
        const{email, password} = data;
        if (!email) {
            errors.email = 'This field is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'This field is required';
        }else if(!(password.length>5)){
            errors.password = "Password length must be atleast 6 characters";
        }
       
        return errors;

    }

    const handleLogout = () => {
        localStorage.removeItem('superAdmin');
        window.location.reload()

    }
    useEffect(() => {
        fatchRating();
        fetchShopList();
        fatchCategory();

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

    // console.log(allCategory);

    let auth2 = JSON.parse(admin);

    const {childCategory} = category;
    let childArr = filterCagegory?allCategory.filter(d1=>d1.parentCategory===filterCagegory):[];

    const { name, email, password, confrmPassword}=signUpForm;

    return (
        <div>
            <div className="Navbar">

                <div className={`side-menu  ${isOpen ? 'open' : ''}`}>
                    <div className='profileName'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={26} className="mb-1 mx-2">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                        {admin ? auth2.name : "Hello, Sign in"}
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={24}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <nav className="menu-items">
                        <div className='text-dark fw-bold'>Options</div>
                        <Link to="#" onClick={() => { toggleMenu(); admin?setOption("review"):LoginPop() }}>Review</Link>
                        <Link to="#" onClick={() => { toggleMenu(); admin?setOption("shops"):LoginPop() }}>All Shops</Link>
                        <Link to="#" onClick={() => { toggleMenu(); admin?setOption("category"):LoginPop() }}>Category</Link>
                    </nav>

                   

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
                    {admin?(
                        <span onClick={handleLogout}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                        &nbsp;Logout
                    </span>
                    ):(
                        <span onClick={LoginPop}>Login</span>
                    )}
                    

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
                                <TextField className='w-100' name="parentCategory" value={parentCategory} label="Add Parent Category *" size="small" onChange={(e)=>setParentCategory(e.target.value)}/>
                                <div className='error2'></div>
                            </div>
                            <div className='mx-5'>
                                <button className='btn btn-primary' disabled={parentCategory?false:true} onClick={handleParentCateg}>Save</button>
                            </div>
                        </div>
                        <hr/>

                        <div className='d-flex my-4'>

                            <div className='w-25 mr-4'>
                                <Select  options={parentCategArr} value={selectCategory} name='parentCategory' placeholder="Choose Parent Category" onChange={handleSelectCategory}/>
                                <div className='error2'></div>
                            </div>

                            <div className='w-25 mx-4'>
                                <TextField className='w-100' disabled={category.parentCategory?false:true} name="childCategory" value={childCategory} label="Add Child Category *" size="small" onChange={handleChange}/>
                                <div className='error2'></div>
                            </div>

                            <div>
                                <button className='btn btn-primary' disabled={childCategory?false:true} onClick={handleChildCateg}>Save</button>
                            </div>

                        </div>

                        <div className='d-flex my-5'>
                            <div className='mx-3 fontWeight mt-1'>Filter</div>
                            <div className='w-25'>
                                <Select  options={parentCategArr} placeholder="Choose Parent Category" onChange={handleShowCateg} />
                            </div>
                        </div>

                        <div className='row text-white'>
                            <div className='col-2 bg-dark border py-2'>Id</div>
                            <div className='col-3 bg-dark border py-2'>Category</div>
                        </div>
                        {childArr.map((d1,index)=>(
                           <>
                            {d1.childCategories.map((c1,index2)=>(
                                <div className='row' key={index2}>
                                    <div className='col-2 border py-2'>{index2<1?filterCagegory:""}</div>
                                    <div className='col-3 border py-2'>{c1}</div>
                                </div> 
                            ))}
                           </>
                             
                        ))}
                        

                    </div>
                }
            </div>

            <div>
                <Modal toggle={signupPop} Toggle={SignupPop} title="" classWidth="ratingPup">
                    <div className='text-center title '>
                        <h4 className='colr-blue'>Sign Up</h4>
                    </div>
                    <hr className='my-2 ' />
                    <div className="text-center py-4">
                        <div >
                            <TextField className='w-75 my-3' name="name" value={name} label="Name" size="small" onChange={handleChangeSign}/>
                            <div className='error3'>{errors.name}</div>
                        </div>
                        <div >
                            <TextField className='w-75 my-3' name="email" value={email} label="Email" size="small" onChange={handleChangeSign}/>
                            <div className='error3'>{errors.email}</div>
                        </div>

                        <div >
                            <TextField type='password' className='w-75 my-3' name="password" value={password} label="Password" size="small" onChange={handleChangeSign}/>
                            <div className='error3'>{errors.password}</div>
                        </div>
                        <div >
                            <TextField type='password' className='w-75 my-3' name="confrmPassword" value={confrmPassword} label="Confirm Password" size="small" onChange={handleChangeSign}/>
                            <div className='error3'>{errors.confrmPassword}</div>
                        </div>
                        <div>Already have an account? <span className='colr cursor-pointer' onClick={()=>{LoginPop();setSignupPop(false)}}>Login</span></div>
                        <button className="btn text-white bg-primary my-4 w-75" onClick={handleSignup}>Sign Up</button>
                    </div>

                </Modal>
            </div>
            {loginPop &&
            <div>
                <Modal toggle={loginPop} Toggle={LoginPop} title="" classWidth="ratingPup">
                    <div className='text-center title '>
                        <h4 className='colr-blue'>Login</h4>
                    </div>
                    <hr className='my-2 ' />
                    <div className="text-center py-4">
                        <div >
                            <TextField className='w-75 my-3' name="email" value={loginForm.email} label="Email" size="small" onChange={handleChange} />
                            <div className='error3'>{errors.email}</div>
                        </div>

                        <div >
                            <TextField type='password' className='w-75 my-3' name="password" value={loginForm.password} label="Password" size="small" onChange={handleChange}/>
                            <div className='error3'>{errors.password}</div>
                        </div>
                        <div>Create a account?<span className='colr cursor-pointer' onClick={()=>{SignupPop();setLoginPop(false)}}> Sign up</span></div>
                        <button className="btn text-white bg-primary my-4 w-75" onClick={handleLogin}>Login</button>


                    </div>

                </Modal>
            </div>
            }

        </div>

    )
}
export default SuperAdmin;