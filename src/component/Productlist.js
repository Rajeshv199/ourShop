import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar2";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axiosInstance from "../apiConfig/axoisSetup";

function Productlist() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState({parentCategory:"",category:""});

  const handleChange = (e) => {

    setFilterData({ ...filterData, [e.target.name]: e.target.value });
    
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

  

  const getActionOption=(id)=>{
    return(
        <div className="template-demo flex-nowrap cursor-pointer mr-2 w-100">
            <span class="material-symbols-outlined text-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">more_vert</span>
            <div class="dropdown-menu branchDropdown p-0 mr-3" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item  d-flex item_edit align-items-center"  data-toggle="modal" data-target="#exampleModalArchieve">
                <span class="material-symbols-outlined text-dark pr-1 py-1">Edit</span>Edit</span>
                <span  class="dropdown-item item_del  d-flex align-items-center" data-toggle="modal" data-target="#exampleModalDelete" onClick={()=>handleDelete(id)}>
                <span class="material-symbols-outlined text-dark pr-1 py-1" >Delete</span>Delete</span>
            </div>
        </div>
    )
}



  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  // console.log(filterData);
  const{parentCategory,category} = filterData;

  let dataArr = data;
  dataArr = parentCategory?dataArr.filter(da=>da.category===parentCategory):dataArr;
  dataArr = category?dataArr.filter(da=>da.subCategory===category):dataArr;

  console.log(dataArr);



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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" class="mb-1 mx-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Add Product</button>
              </Link>
            </div>

          </div>

          <div className='custom-table'>
            {dataArr[0]?(
            <div className='my-3 ' style={{ width: "160%" }}>
              <div className='d-flex text-white bg-Arsenic f14'>
                <div className="listRadio  py-2"><div></div></div>
                <div className='list-level'>Code</div>
                <div className='list-level'>Parent Category</div>
                <div className='list-level'>Category</div>
                <div className='list-level'>Image</div>
                <div className='list-level'>Name</div>
                <div className='list-level'>Title</div>
                <div className='list-level'>Subtitle</div>
                <div className='list-level'>Brand</div>
                <div className='list-level' style={{width:"8%"}}>Offer</div>
                <div className='list-level'>Price</div>
                <div className='list-level' style={{width:"40%"}}>About</div>
                <div className='list-level' style={{width:"40%"}}>Description</div>
                <div className='list-level'>Action</div>
              </div>
              {dataArr.map((d1, index) => (
                <div className='d-flex text-dark bg-ligtQuat f14'>
                  <div className="listRadio text-center bg-ligtQuat py-2"><input type="checkbox" name="id" /></div>
                  <div className='list-level'>{d1.code}</div>
                  <div className='list-level'>{d1.category}</div>
                  <div className='list-level'>{d1.subCategory}</div>
                  <div className='list-level'><img width="40px" height="40px" src={d1.image.url} alt=''/></div>
                  <div className='list-level'>{d1.name}</div>
                  <div className='list-level'>{d1.title}</div>
                  <div className='list-level'>{d1.subtitle}</div>
                  <div className='list-level'>{d1.brand}</div>
                  <div className='list-level' style={{width:"8%"}}>{d1.offer}</div>
                  <div className='list-level'>{d1.price}</div>
                  <div className='list-level' style={{width:"40%"}}>{d1.about}</div>
                  <div className='list-level' style={{width:"40%"}}>{d1.description}</div>
                  <div className='list-level'>{getActionOption(d1._id)}
                    
                  </div>
                </div>
              ))}

            </div>
            ):(
              <h5 className='text-center my-5 text-secondary'>Product list not found</h5>
            )}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Productlist;
