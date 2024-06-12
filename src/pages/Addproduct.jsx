import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../components/Navbar2';
import axiosInstance from "../services/axoisSetup";


let parentCategArr = [];
let childCategArr = [];

const Addproduct = () => {
    const auths = localStorage.getItem('admin');


    const [formData, setFormData] = useState({
        shopid: JSON.parse(auths).id,
        category: "",
        subCategory: "",
        name: '',
        title: '',
        subtitle: '',
        offer: '',
        code: '',
        brand: '',
        price: '',
        about: '',
        description: '',


    });
    const { category, subCategory, name, title, subtitle, offer, code, brand, price, about, description } = formData;
    const [category2, setCategory] = useState('');
    const [subCategory2, setSubCategory] = useState('');
    const [allCategory, setAllCategory] = useState([]);
    const [images, setImages] = useState([]);
    const [addCateg, setAddCateg] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { state } = useLocation();


    const handleChange = (e) => {
        if (e.target.name === 'image') {

            const files = Array.from(e.target.files);
            if (files.length > 5) {
                toast.error('Please select a maximum of 5 images.');
                return;
            }
            setImages([]);
            files.forEach((file) => {
                // setPreivewImg(files)
                // validate file size 
                // if (file.size > 150 * 1024) { // 100 KB
                //     toast.error(`File ${file.name} exceeds the maximum size of 100kb.`);
                //     return;
                // }
                const reader = new FileReader();

                reader.onload = () => {
                    if (reader.readyState === 2) {
                        setImages((old) => [...old, reader.result]);
                    }
                };
                reader.readAsDataURL(file);
            });
            
        } else {

            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const createProduct = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        const myForm = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            myForm.append(key, value);
        });
        images.forEach((image) => {
            myForm.append("image", image);
        });

        if (Object.keys(newErrors).length === 0) {
            try {

                const response = await axiosInstance.post(`/createproduct`, myForm, {});
                let data = response.data;

                if (data.success) {
                    toast.success("Added Successfully");
                    setTimeout(() => { navigate("/admin/listProduct") }, 1500)
                } else {
                    toast.error(data.message);
                }

            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error("No response received from the server. Please try again later.");
                } else {
                    toast.error("An error occurred. Please try again later.");
                }
            }
        }
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        let prod = state.data;
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.put(`/updateProductDetails/${prod._id}`, formData, {});
                let data = response.data;

                if (data.success) {
                    toast.success("Update Successfully");
                    setTimeout(() => { navigate("/admin/listProduct") }, 1000)
                } else {
                    toast.error(data.message);
                }

            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error("No response received from the server. Please try again later.");
                } else {
                    toast.error("An error occurred. Please try again later.");
                }
            }
        }
    };

    const validateForm = (data) => {
        const errors = {};
        const { category, subCategory, name, title, subtitle, offer, code, brand, price, about, } = formData;
        if (!category) { errors.category = 'This field is required'; }

        if (!subCategory) { errors.subCategory = 'This field is required'; }
        if (!name) { errors.name = 'This field is required'; }
        if (!title) { errors.title = 'This field is required'; }
        if (!subtitle) { errors.subtitle = 'This field is required'; }
        if (!offer) { errors.offer = 'This field is required'; }
        if (!code) { errors.code = 'This field is required'; }
        if (!brand) { errors.brand = 'This field is required'; }
        if (!price) { errors.price = 'This field is required'; }
        if (!images) { errors.image = 'This field is required'; }
        if (!about) { errors.about = 'This field is required'; }
        if (!description) { errors.description = 'This field is required'; }
        return errors;
    }

    const handleCategory = (category) => {
        let formData2 = { ...formData };
        setCategory(category);
        formData2["category"] = category.value;
        setFormData(formData2);
    };
    const handleSubCategory = (subCategory) => {
        let formData2 = { ...formData };
        setSubCategory(subCategory);
        formData2["subCategory"] = subCategory.value;
        setFormData(formData2);
    };
    const handleNext = () => {
        const errors = {};
        if (category2 && subCategory2) {
            setAddCateg(true);
        } else {
            if (!category2) { errors.category = 'This field is required'; }
            if (!subCategory2) { errors.subCategory = 'This field is required'; }
        }
        setErrors(errors);
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

    useEffect(() => {
        if (state) {
            const { data } = state;
            setFormData(data)
            setCategory({ value: data.category, label: data.category });
            setSubCategory({ value: data.subCategory, label: data.subCategory })
            setAddCateg(true);

        }
        fatchCategory();
    }, []);

    if(category){
        let categoryArr=[];
        let cateArr = allCategory.find(f1=>f1.parentCategory===category).childCategories;
        cateArr.map(d1=>{
            categoryArr.push({value:d1,label:d1});
        });
        childCategArr=categoryArr;
    }

    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='bordr-watr rounded  my-4 pb-3'>
                    <div className='bg-water py-2 px-3 fontWeight'>Add Product</div>
                    <div className='row my-4 mx-3'>
                        <div className='col-4 col-md-3'>
                            <Select value={category2} isDisabled={addCateg ? true : false} options={parentCategArr} placeholder="Choose Category" onChange={handleCategory} />
                            <div className='error2'>{errors.category}</div>
                        </div>
                        <div className='col-4 col-md-3'>
                            <Select value={subCategory2} isDisabled={addCateg || !category ? true : false} options={childCategArr} placeholder="Choose Sub Category" onChange={handleSubCategory} />
                            <div className='error2'>{errors.subCategory}</div>
                        </div>
                        {!addCateg &&
                            <div className='col-4 col-md-5 text-end'>

                                <button className='btn btn-primary' onClick={() => handleNext()}>Next</button>
                            </div>
                        }
                    </div>
                    {addCateg &&
                        <div>
                            <hr className='mx-4' />

                            <div className='row mx-0'>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="name" value={name} label="Product Name  *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.name}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="title" value={title} label="Title *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.name}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="subtitle" value={subtitle} label="Subtitle *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.subtitle}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="offer" value={offer} label="Offer *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.offer}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="code" value={code} label="Code *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.code}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="brand" value={brand} label="Brand *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.brand}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField type='number' className='w-100' name="price" value={price} label="Price *" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.price}</div>
                                </div>
                                <div className='col-4 col-md-4 m-3 '>
                                    <TextField select className='w-75' name="Current" label="Upload Image/Thumbnail *" size="small" onChange={handleChange}>
                                        <MenuItem value="Project ID"> Image</MenuItem>
                                        <MenuItem value="Project Name">Image2</MenuItem>
                                    </TextField>
                                    <div className='uploadFile'>
                                        <input type='file' name='image' accept="image/*" multiple onChange={handleChange} />
                                        <button >Browse</button>
                                    </div>
                                    <div className='error2'>{errors.image}</div>
                                </div>


                            </div>

                            <div className='row my- mx-0'>
                                <div className='col-8 col-md-7 m-3 '>
                                    <TextField className='w-100' name="about" value={about} label="About *" multiline rows={3} size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.about}</div>
                                </div>
                                <div className='col-8 col-md-7 m-3 '>
                                    <TextField className='w-100' name="description" value={description} label="Description *" multiline rows={3} size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.description}</div>
                                </div>
                            </div>

                            <div className='text-end mx-5 my-2'>
                                {state ? (
                                    <button className='btn btn-primary' onClick={updateProduct}>Update Product</button>
                                ) : (
                                    <button className='btn btn-primary' onClick={createProduct}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20px" className="mb-1 mx-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        Add Product</button>
                                )}

                            </div>
                        </div>
                    }


                </div>

            </div>

            
        </div>
    )
}
export default Addproduct;