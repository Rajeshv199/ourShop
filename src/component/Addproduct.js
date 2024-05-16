import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Navbar from './Nav';

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
];


const Addproduct = () => {
    const auths = localStorage.getItem('admin');



    const [formData, setFormData] = React.useState({
        name: '',
        id: JSON.parse(auths)?._id || '',
        title: '',
        strikeprice: '',
        price: '',
        star: '',
        review: '',
        color: '',
        size: '',
        stock: '',
        category: null,
        subCategory: null,

    });
    const { name, id, category, title, strikeprice, price, star, review, color, size, stock, subCategory } = formData;
    const [image, setImage] = React.useState('');
    const [addCateg, setAddCateg] = useState(false);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        console.log(e.target);
        if (e.target.name === 'image') {
            const render = new FileReader();

            render.onload = () => {
                if (render.readyState === 2) {
                    setImage(render.result)
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {

            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const createshop = async (e) => {
        e.preventDefault();
        try {
            if (!image) {
                toast.error('Please select an image for the product');
                return;
            }

            const myForm = new FormData();
            myForm.append('name', name);
            myForm.append('image', image);
            myForm.append('id', id);
            myForm.append('price', price);
            myForm.append('category', category);
            myForm.append('strikeprice', strikeprice);
            myForm.append('star', star);
            myForm.append('review', review);
            myForm.append('stock', stock);
            myForm.append('color', color);
            myForm.append('size', size);
            myForm.append('title', title);

            let { data } = await axios.post('http://localhost:5000/createproducts', myForm, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(data)

            toast.success("Added Successfully");
            setTimeout(() => {
                navigate("/")

            }, 1500)
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error("No response received from the server. Please try again later.");
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };

    const handleCategory = (category) => {
        let formData2 = { ...formData };
        formData2["category"] = category;
        setFormData(formData2);
    };
    const handleSubCategory = (subCategory) => {
        let formData2 = { ...formData };
        formData2["subCategory"] = subCategory;
        setFormData(formData2);
    };

    console.log(formData);
    return (
        <div>
            {/* <Navbar /> */}

            {/* <div className='container'>
                <div className='bordr-watr rounded  my-4 pb-3'>
                    <div className='bg-water py-2 px-3 fontWeight'>Add Product</div>
                    <div className='row my-4 mx-3'>
                        <div className='col-4 col-md-3'>
                            <Select value={category} options={options1} placeholder="Choose Category" onChange={handleCategory} />
                        </div>
                        <div className='col-4 col-md-3'>
                            <Select value={subCategory} options={options2} placeholder="Choose Sub Category" onChange={handleSubCategory} />
                        </div>
                        <div className='col-4 col-md-5 text-end'>
                            <button className='btn btn-primary' onClick={()=>setAddCateg(true)}>Next</button>
                        </div>
                    </div>
                    {addCateg &&
                        <div>
                        <hr className='mx-4'/>

                        <div className='row mx-0'>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Product Name*" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Title*" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Subtitle*" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Offer" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Code" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Brand" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField className='w-100' name="Current" label="Price" size="small"></TextField>
                            </div>
                            <div className='col-4 col-md-3 m-3 '>
                                <TextField select className='w-100' name="Current" label="Upload Image/Thumbnail"  size="small">
                                    <MenuItem value="Project ID"> city</MenuItem>
                                    <MenuItem value="Project Name">city2</MenuItem>
                                </TextField>
                                <div className='uploadFile'>
                                    <input type='file'/>
                                    <button className='uplodBtn'>Browse</button>
                                </div>
                            </div>


                        </div>
                        <div className='row my- mx-0'>
                            <div className='col-8 col-md-7 m-3 '>
                                <TextField className='w-100' name="Current" label="About*" multiline rows={2} size="small"></TextField>
                            </div>
                            <div className='col-8 col-md-7 m-3 '>
                                <TextField className='w-100' name="Current" label="Description*" multiline rows={2} size="small"></TextField>
                            </div>
                        </div>
                        <div className='text-end mx-5 my-2'>
                            <button className='btn btn-primary '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" class="mb-1 mx-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Add Product</button>
                        </div>
                    </div>
                    }


                </div>

            </div> */}

            <div className="addproduct-form">
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
                
            </div>
        </div>
    )
}
export default Addproduct;