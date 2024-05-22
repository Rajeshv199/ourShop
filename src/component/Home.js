import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Slideshow from './Slideshow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Nav from './Nav';
import axiosInstance from "../apiConfig/axoisSetup";



const Home = () => {

    const [shopArr, setShopArr] = useState([]);
    const [filter, setFilter] = useState({ state: "", city: "", category: "" });
    const [myCity, setMyCity] = useState('');

    const fetchShops = async () => {
        try {
            const response = await axiosInstance.get(`/shops`, {});
            let data = response.data;

            if (data.success) {
                setShopArr(data.shops);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        

        fetchShops();
    }, []);

    const { state, city, category } = filter;
    console.log(myCity);
    return (

        <div className="container-flui">
            <Nav />
            <div className='minHeader'>
                <div className='d-flex m-auto justify-content-between colrblue bg-white rounded-pill' style={{ width: "30%" }}>
                    <div className='item bg-blue'>Home</div>
                    <div className='item'>Help</div>
                    <div className='item'>About</div>
                    <div className='item'>Reviews</div>
                </div>
            </div>
            <div>
                <Slideshow />
            </div>
            <div className=" home-bg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://s3-alpha-sig.figma.com/img/8974/920d/87312d922f53c47157f3dfb29248d743?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmJCFCWsQimFqa1ESpvs6ImcAtDs24G1pkN~IAw~W55FTT7dmZOPMOlIl63egdqnULz1JPgSb4VoaMxF3bjB7KfhQ8IrIJeKfDZ6wLgCxkSZkIUDXTwJ77vlNo1NsiK1ID4Y7A2aslRUMl3xVt8N-qkDFk6XzjaUNPjD2v5dNq-vLPnPdYvLeypq1nRCBg3yT84rH86R2sBePjCdeKVLKbTOeSvgcVFwSwsJUh5m9BzqmQ1fxML2lw-xTt3g3bqq4gyD7-ggxijpf-X9meqqS8H1-7EMB5EO4rN51b-iP4Lr47N2nAzFZzE-7XpdwWH7yf4gp8-U5Lvg2521xY2kxw__)" }}>


                <div className="home-fst-line">
                    <h2>Start your Online Business with Zero Investment ...</h2>
                    <h6>On-demand delivery from every restaurant and store in your city. They are massive in the India.</h6>
                    <div className="d-flex mt-4">
                        <div className="home-btn mr-4">
                            <Link to="#"><button className='btnhover' type="button"> Know More</button></Link>
                        </div>
                        <div className="home-btn mx-5 ">
                            <Link to="/signup"><button className='bg-pink btnhover2' type="button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto my-4" style={{ width: "90%" }}>
                <div className='d-flex justify-content-between'>
                    <div><h3 className="colrblue fw-bold">Our Shop</h3></div>

                    <div className='d-flex filterDrop mt-1'>
                        <div className='mt-1'>Location :</div>
                        <div className=" mx-2">
                            <TextField select name="state" value={state} label="State" size="small">
                                {/* <MenuItem value="Project ID"> state1</MenuItem> */}
                            </TextField>
                        </div>
                        <div className=" mx-2">
                            <TextField select name="city" value={city} label="City" size="small">
                                {/* <MenuItem value="Project ID"> city</MenuItem> */}
                            </TextField>
                        </div>
                        <div className=" mx-2">
                            <TextField select name="category" value={category} label="Category" size="small">
                                {/* <MenuItem value="Project ID"> Category</MenuItem> */}
                            </TextField>
                        </div>
                    </div>
                </div>

                <div className='row mx-0 mt-4'>
                    {shopArr.map((sh1, index) => (
                        <div className='col-3 shopCart' key={index}>
                            <div className='shopImg'>
                                <img src={sh1.image.url} alt='' />
                            </div>
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='fw-bold text-capitalize'>{sh1.Name}</div>
                                <div className='text-secondary f14'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14px" className="" style={{ marginBottom: "2px" }}>
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .7575 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                    </svg>1.5k
                                </div>
                            </div>

                            <div className='text-center imgItem'>
                                <Link to={`${sh1.Name}/products`} state={{ id: sh1._id, name: sh1.Name }}><button className='rounded my-2 fontWeight'>View Shop</button></Link>
                            </div>
                        </div>
                    ))}

                </div>

            </div>


        </div>
    )
}
export default Home;