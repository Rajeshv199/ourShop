import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Navbar from './Navbar2';
import axiosInstance from "../apiConfig/axoisSetup";

const options1 = [
    { value: "Mobile", label: "Mobile" },
    { value: "Computer", label: "Computer" },
    { value: "TV", label: "TV" },
    { value: "Electronics", label: "Electronics" },
];
const options2 = [
    { value: "All Mobile", label: "All Mobile" },
    { value: "Power Bank", label: "Power Bank" },
    { value: "Tablets", label: "Tablets" },
    { value: "Laptop", label: "Laptop" },
];


const Addproduct = () => {
    const auths = localStorage.getItem('admin');


    const [formData, setFormData] = React.useState({
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
        image: '',
        about: '',
        description: '',


    });
    const { category, subCategory, name, title, subtitle, offer, code, brand, price, image, about, description } = formData;
    const [category2, setCategory] = React.useState('');
    const [subCategory2, setSubCategory] = React.useState('');
    const [addCateg, setAddCateg] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleChange = (e) => {
        if (e.target.name === 'image') {
            // const files = e.target.files;
            // for (let i = 0; i < files.length; i++) {
            //     const render = new FileReader();
            //     render.onload = () => {
            //         if (render.readyState === 2) {
            //             formData.image.push(render.result);
            //         }
            //     }
            //     render.readAsDataURL(e.target.files[i])
            // }

            const render = new FileReader();
            render.onload = () => {
                if (render.readyState === 2) {
                    formData.image = render.result;
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {

            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const createShop = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axiosInstance.post(`/createproduct`, formData, {});
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

    const validateForm = (data) => {
        const errors = {};
        const { category, subCategory, name, title, subtitle, offer, code, brand, price, image, about, } = formData;
        if (!category) { errors.category = 'This field is required'; }

        if (!subCategory) { errors.subCategory = 'This field is required'; }
        if (!name) { errors.name = 'This field is required'; }
        if (!title) { errors.title = 'This field is required'; }
        if (!subtitle) { errors.subtitle = 'This field is required'; }
        if (!offer) { errors.offer = 'This field is required'; }
        if (!code) { errors.code = 'This field is required'; }
        if (!brand) { errors.brand = 'This field is required'; }
        if (!price) { errors.price = 'This field is required'; }
        if (!image) { errors.image = 'This field is required'; }
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

    console.log(errors);

    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='bordr-watr rounded  my-4 pb-3'>
                    <div className='bg-water py-2 px-3 fontWeight'>Add Product</div>
                    <div className='row my-4 mx-3'>
                        <div className='col-4 col-md-3'>
                            <Select value={category2} isDisabled={addCateg ? true : false} options={options1} placeholder="Choose Category" onChange={handleCategory} />
                            <div className='error2'>{errors.category}</div>
                        </div>
                        <div className='col-4 col-md-3'>
                            <Select value={subCategory2} isDisabled={addCateg ? true : false} options={options2} placeholder="Choose Sub Category" onChange={handleSubCategory} />
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
                                    <TextField className='w-100' name="name" value={name} label="Product Name*" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.name}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="title" value={title} label="Title*" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.name}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="subtitle" value={subtitle} label="Subtitle*" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.subtitle}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="offer" value={offer} label="Offer" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.offer}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="code" value={code} label="Code" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.code}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField className='w-100' name="brand" value={brand} label="Brand" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.brand}</div>
                                </div>
                                <div className='col-4 col-md-3 m-3 '>
                                    <TextField type='number' className='w-100' name="price" value={price} label="Price" size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.price}</div>
                                </div>
                                <div className='col-4 col-md-4 m-3 '>
                                    <TextField select className='w-75' name="Current" label="Upload Image/Thumbnail" size="small" onChange={handleChange}>
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
                                    <TextField className='w-100' name="about" value={about} label="About*" multiline rows={2} size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.about}</div>
                                </div>
                                <div className='col-8 col-md-7 m-3 '>
                                    <TextField className='w-100' name="description" value={description} label="Description*" multiline rows={2} size="small" onChange={handleChange}></TextField>
                                    <div className='error2'>{errors.description}</div>
                                </div>
                            </div>

                            <div className='text-end mx-5 my-2'>
                                <button className='btn btn-primary' onClick={createShop}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" class="mb-1 mx-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    Add Product</button>
                            </div>
                        </div>
                    }


                </div>

            </div>

            {/* <div className="addproduct-form">
                <h1 className="addproduct-heading">add product</h1>

                <div className="addproduct-input-div">

                    {addCateg ?(
                        <form onSubmit={(e) => createshop(e)} className="addproduct-input">

                        <div style={{textAlign:"start",margin:"12px"}}>
                            <Select value={category} options={options1} placeholder="Choose Category" onChange={handleCategory}/>
                        </div>
                        <div style={{textAlign:"start",margin:"12px"}}>
                            <Select value={subCategory}  options={options2} placeholder="Choose Sub Category" onChange={handleSubCategory}/>
                        </div>
            
                            <button className="createshop-button" type='submit' onClick={()=>setAddCateg(false)}>Next</button>
                        </form>
                    ):(
                    
                    <form onSubmit={(e) => createshop(e)} className="addproduct-input">
                        <input onChange={onChangeHandler} value={name} className="createshop-field" type="text" placeholder="product name" name='name' />
                        <input className="createshop-field" onChange={onChangeHandler} value={title} type="text" placeholder="Title" name='Title' />
                        <input className="createshop-field" onChange={onChangeHandler} value={id} type="text" placeholder="Sub Title" name='Sub Title' />
                        <input className="createshop-field" onChange={onChangeHandler} value={id} type="text" placeholder="Offer" name='offer' />
                        <input className="createshop-field" onChange={onChangeHandler} value={id} type="text" placeholder="Code" name='code' />
                        <input className="createshop-field" onChange={onChangeHandler} value={id} type="text" placeholder="Brand" name='brand' />
                        <input className="createshop-field" onChange={onChangeHandler} value={price} type="text" placeholder="price" name='price' required />

                        <input className="createshop-field" accept='image/*' type="file" files={image} multiple onChange={onChangeHandler} name='image' />
                        
                        <input className="createshop-field" onChange={onChangeHandler} value={title} type="text" placeholder="Thumbnail" name='thumbnail' required />

                        <button className="createshop-button" type='submit'>Addproduct</button>
                    </form>
                )}
                </div>
                
            </div> */}
        </div>
    )
}
export default Addproduct;