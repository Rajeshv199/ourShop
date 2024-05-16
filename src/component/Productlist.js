import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar2";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Productlist() {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {

  };



  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

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
              <TextField select className='w-100' name="Current" label="Parent Category" size="small">
                <MenuItem value="Project ID"> city</MenuItem>
                <MenuItem value="Project Name">city2</MenuItem>
              </TextField>
            </div>
            <div className='col-3'>
              <TextField select className='w-100' name="Current" label="Category" size="small">
                <MenuItem value="Project ID"> city</MenuItem>
                <MenuItem value="Project Name">city2</MenuItem>
              </TextField>
            </div>

            <div className='col-4 text-end'>
              <Link to="/addproduct">
                <button className='btn btn-primary '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" class="mb-1 mx-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Add Product</button>
              </Link>
            </div>

          </div>

          <div className='custom-table'>
            <div className='my-3' style={{ width: "130%" }}>
              <div className='d-flex text-white f14'>
                <div className="listRadio bg-Arsenic py-2"><div></div></div>
                <div className='list-level bg-Arsenic'>Code</div>
                <div className='list-level bg-Arsenic'>Parent Category</div>
                <div className='list-level bg-Arsenic'>Category</div>
                <div className='list-level bg-Arsenic'>Image</div>
                <div className='list-level bg-Arsenic'>Name</div>
                <div className='list-level bg-Arsenic'>Title</div>
                <div className='list-level bg-Arsenic'>Subtitle</div>
                <div className='list-level bg-Arsenic'>Brand</div>
                <div className='list-level bg-Arsenic'>Offer</div>
                <div className='list-level bg-Arsenic'>Price</div>
                <div className='list-level bg-Arsenic'>About</div>
                <div className='list-level bg-Arsenic'>Description</div>
                <div className='list-level bg-Arsenic'>Action</div>
              </div>
              <div className='d-flex text-dark f14'>
                <div className="listRadio text-center bg-ligtQuat py-2"><input type="checkbox" name="id" /></div>
                <div className='list-level bg-ligtQuat'>1</div>
                <div className='list-level bg-ligtQuat'>Computer</div>
                <div className='list-level bg-ligtQuat'>CPU</div>
                <div className='list-level bg-ligtQuat'>Image</div>
                <div className='list-level bg-ligtQuat'>Name</div>
                <div className='list-level bg-ligtQuat'>Title</div>
                <div className='list-level bg-ligtQuat'>Subtitle</div>
                <div className='list-level bg-ligtQuat'>Brand</div>
                <div className='list-level bg-ligtQuat'>Offer</div>
                <div className='list-level bg-ligtQuat'>Price</div>
                <div className='list-level bg-ligtQuat'>About</div>
                <div className='list-level bg-ligtQuat'>Description</div>
                <div className='list-level bg-ligtQuat'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Productlist;
