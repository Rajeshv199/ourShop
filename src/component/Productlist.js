import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar2";
import Select from "react-select";
import Modal from "./modale/modale";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axiosInstance from "../apiConfig/axoisSetup";

function Productlist() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState('');
  const [filterData, setFilterData] = useState({ parentCategory: "", category: "" });
  const [addImage, setAddImage] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const files = Array.from(e.target.files);
      if (files.length > 5) {
        alert('Please select a maximum of 5 images.');
        return;
      }
      setImages([]);
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImages((old) => [...old, reader.result]);
          }
        };
        reader.readAsDataURL(file);
      });

    }
    setFilterData({ ...filterData, [e.target.name]: e.target.value });

  };

  const AddImage = (id) => {
    setId(id);
    setAddImage(!addImage);
  };

  const admin = JSON.parse(localStorage.getItem('admin'));

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(`/productlist/${admin.id}`, {});
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

      const response = await axiosInstance.delete(`/admin/deleteproduct/${id}`, {});
      let data = response.data;
      if (data.success) {
        alert(data.message);
        fetchProducts();

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addMoreImage = async () => {
    const myForm = new FormData();

    if (images[0]) {
      images.forEach((image) => {
        myForm.append("image", image);
      });
      try {
        const response = await axiosInstance.put(`/updateProductImages/${id}`, myForm, {});
        let data = response.data;
        if (data.success) {
          alert(data.message);
          setId("")
          setImages('');
          AddImage();
          fetchProducts();

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    else {
      setError("This field is required");
    }
  }


  const getActionOption = (data) => {
    return (
      <div className="template-demo flex-nowrap cursor-pointer mr-2 w-100">
        <span className="material-symbols-outlined text-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">more_vert</span>
        <div className="dropdown-menu branchDropdown p-0 mr-3" aria-labelledby="dropdownMenuButton">
          <Link to="/admin/addProduct" state={{ data }}>
            <span className="dropdown-item  d-flex item_edit align-items-center" data-toggle="modal" data-target="#exampleModalArchieve">
              <span className="material-symbols-outlined text-dark pr-1 py-1">Edit</span>Edit</span>
          </Link>
          <span className="dropdown-item item_del  d-flex align-items-center" data-toggle="modal" data-target="#exampleModalDelete" onClick={() => handleDelete(data._id)}>
            <span className="material-symbols-outlined text-dark pr-1 py-1" >Delete</span>Delete</span>
        </div>
      </div>
    )
  }



  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  // console.log(filterData);
  const { parentCategory, category } = filterData;

  let dataArr = data;
  dataArr = parentCategory ? dataArr.filter(da => da.category === parentCategory) : dataArr;
  dataArr = category ? dataArr.filter(da => da.subCategory === category) : dataArr;

         


  return (
    <div >

      <Navbar />

      <div className='container-fluid'>
        <div className='bordr-watr rounded  my-4 pb-3'>
          <div className='bg-water py-2 px-3 fontWeight'>List Product</div>

          <div className='row m-3'>
            <div className='col-1 px-0'>
              <div className="border py-2 rounded">
                <span className="py-1  text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="18px" className="mx-2 "><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" /></svg>
                  Filter
                </span>
              </div>
            </div>
            <div className='col-3 mx-2'>
              <TextField select className='w-100' name="parentCategory" value={parentCategory} label="Parent Category" size="small" onChange={handleChange}>
                <MenuItem value=""> All</MenuItem>
                <MenuItem value="Mobile"> Mobile</MenuItem>
                <MenuItem value="Computer">Computer</MenuItem>
                <MenuItem value="TV">TV</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
              </TextField>
            </div>
            <div className='col-3'>
              <TextField select className='w-100' name="category" value={category} label="Category" size="small" onChange={handleChange}>
                <MenuItem value=""> All</MenuItem>
                <MenuItem value="All Mobile"> All Mobile</MenuItem>
                <MenuItem value="Power Bank">Power Bank</MenuItem>
                <MenuItem value="Tablets">Tablets</MenuItem>
                <MenuItem value="Laptop">Laptop</MenuItem>
              </TextField>
            </div>

            <div className='col-4 text-end'>
              <Link to="/admin/addProduct">
                <button className='btn btn-primary '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" className="mb-1 mx-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Add Product</button>
              </Link>
            </div>

          </div>

          <div className='custom-table'>
            {dataArr[0] ? (
              <div className='my-3 ' style={{ width: "160%" }}>
                <div className='d-flex text-white bg-Arsenic f14'>
                  <div className="listRadio  py-2"><div></div></div>
                  <div className='list-level'>Code</div>
                  <div className='list-level'>Parent Category</div>
                  <div className='list-level'>Category</div>
                  <div className='list-level' style={{ width: "30%" }}>Image </div>
                  <div className='list-level'>Name</div>
                  <div className='list-level'>Title</div>
                  <div className='list-level'>Subtitle</div>
                  <div className='list-level'>Brand</div>
                  <div className='list-level' style={{ width: "8%" }}>Offer</div>
                  <div className='list-level'>Price</div>
                  <div className='list-level' style={{ width: "40%" }}>About</div>
                  <div className='list-level' style={{ width: "40%" }}>Description</div>
                  <div className='list-level'>Action</div>
                </div>
                {dataArr.map((d1, index) => (
                  <div className='d-flex text-dark bg-ligtQuat f14' key={index}>
                    <div className="listRadio text-center bg-ligtQuat py-2"><input type="checkbox" name="id" /></div>
                    <div className='list-level'>{d1.code}</div>
                    <div className='list-level'>{d1.category}</div>
                    <div className='list-level'>{d1.subCategory}</div>
                    <div className='list-level px-0 d-inline-block;' style={{ width: "30%" }}>
                      {d1.image.map((img, index2) => (
                        <img className='mx-1' width="40px" height="40px" src={img.url} alt='' />
                      ))}
                      {d1.image.length < 5 &&
                        <span className='cursor-pointer' onClick={() => AddImage(d1._id)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="25px" fill="#434343"><path d="M186.67-120q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-27.5 19.58-47.09Q159.17-840 186.67-840h392.66v66.67H186.67v586.66h586.66v-392H840v392q0 27.5-19.58 47.09Q800.83-120 773.33-120H186.67Zm506.66-492v-80.67h-80.66v-66.66h80.66V-840H760v80.67h80.67v66.66H760V-612h-66.67ZM240-281.33h480L574-476 449.33-311.33 356.67-434 240-281.33Zm-53.33-492v586.66-586.66Z" /></svg></span>
                      }
                    </div>
                    <div className='list-level'>{d1.name}</div>
                    <div className='list-level'>{d1.title}</div>
                    <div className='list-level'>{d1.subtitle}</div>
                    <div className='list-level'>{d1.brand}</div>
                    <div className='list-level' style={{ width: "8%" }}>{d1.offer}</div>
                    <div className='list-level'>{d1.price}</div>
                    <div className='list-level' style={{ width: "40%" }}>{d1.about}</div>
                    <div className='list-level' style={{ width: "40%" }}>{d1.description}</div>
                    <div className='list-level'>{getActionOption(d1)}

                    </div>
                  </div>
                ))}

              </div>
            ) : (
              <h5 className='text-center my-5 text-secondary'>Product not found</h5>
            )}
          </div>
        </div>
      </div>
      <div>
        <Modal toggle={addImage} Toggle={AddImage} title="" classWidth="customePup">
          <div className="px-3 pb-4">
            <div className='pb-3'>You can choose multiple photos</div>
            <div className='addPhoto mx-2'>
              <input type='file' name='image' multiple accept='image/*' onChange={handleChange} />
              <small className='text-danger'>{error}</small>
            </div>
            <div className='d-flex justify-content-between px-3 mt-4'>
              <button className="btn text-white bg-primary d-flex" onClick={addMoreImage}>Upload</button>
              <button onClick={AddImage} className="btn text-danger btnHover btn_cancel d-flex" data-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>

        </Modal>
      </div>


    </div>
  );
}

export default Productlist;
