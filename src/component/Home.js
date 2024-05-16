import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Slideshow from './Slideshow';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Nav from './Nav';



const Home = () => {

    const [value, setValue] = useState("");
    const [valuecity, setValuecity] = useState("");
    // const [Name, setName] = React.useState('');
    // const [location, setLocation] = React.useState('');
    // const [city, setCity] = React.useState('');
    // const [image, setImage] = React.useState('');
    // const { id } = useParams();
    const [data, setData] = useState([]);



    const getStar=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15px" class="mx-1 text-warning">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>

    )

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await fetch("http://localhost:5000/shops", {
                    method: 'get',
                    headers: {
                        'Content-Type': "application/json",
                    }
                });

                if (response.ok) {
                    const responseData = await response.json();
                    const fetchedData = responseData.shops;

                    // Filter the data based on location and city
                    const filteredData = fetchedData.filter(datas => {
                        const locationMatch = value.trim() === '' || datas.location === value;
                        const cityMatch = valuecity.trim() === '' || datas.city === valuecity;
                        return locationMatch && cityMatch;
                    });

                    setData(filteredData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchShops();
    }, [value, valuecity]);



    return (

        <div className="container-flui">
            <Nav />
            <div className='minHeader'>
                <div className='d-flex m-auto justify-content-between colrblue bg-white rounded-pill' style={{ width: "30%" }}>
                    <div className='item bg-blue'>Home</div>
                    <div className='item'>Services</div>
                    <div className='item'>About</div>
                    <div className='item'>Blog</div>
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
                            <TextField select name="Current" label="State" size="small">
                              <MenuItem value="Project ID"> state1</MenuItem>
                              <MenuItem value="Project Name">state1</MenuItem>
                            </TextField>
                        </div>
                        <div className=" mx-2">
                            <TextField select name="Current" label="City"  size="small">
                              <MenuItem value="Project ID"> city</MenuItem>
                              <MenuItem value="Project Name">city2</MenuItem>
                            </TextField>
                        </div>
                        <div className=" mx-2">
                            <TextField select name="Current" label="Category" size="small">
                              <MenuItem value="Project ID"> Category</MenuItem>
                              <MenuItem value="Project Name">Category2</MenuItem>
                            </TextField>
                        </div>
                    </div>
                </div>

                <div className='row mx-0 mt-2'>

                    <div className='col-3 shopCart'>
                        <div className='shopImg'>
                            <img  src='https://s3-alpha-sig.figma.com/img/cf88/40eb/1b2727252d2fb101cf436750a8615bca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yx8PmpxP4yV0F~gvp5mb2H12V1VjhZ-~exHulKD0S3ZqrW42ZV5F6tjuWhtDAhWAu1dQ5BGs5mKF-ymmZg4AvsLV86Sa0A-Z9qhoeCIp2zqzeI4-z8YrsmSd1i8U7P5ZMUkbMtO~rD~tt8Fy~RwZCEfo7Px5V0tf7v7n0K3fSJZHhp~25be09hzqBzLx4-1m9kwQskId0G47ouNwZYi5NxORbXfRMFDyQbDCXh2GNtsl7UDLcPGj0j2wJVmEKnALgF5tBxD1CjfKfwbtDVgHjwvu6Hm0DmPHCDMdnhCjROTwPdv6a9Sn876PCi4WzuIvBZrfei8ib1uz9EKwE0at6Q__' alt=''/>
                        </div>
                        <div className='d-flex justify-content-between mt-1'>
                            <div className='fw-bold'>Shop Name</div>
                            <div>
                                <span>{getStar()}</span><span>{getStar()}</span>
                                <span>{getStar()}</span><span>{getStar()}</span>
                                <span>{getStar()}</span>
                            </div>
                        </div>
                        <div className='f14 text-end text-secondary'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14px" class="" style={{marginBottom:"2px"}}>
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .7575 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>1.5k
                        </div>
                        <div className='text-center imgItem'>
                            <Link to="/results"><button className='rounded my-2 fontWeight'>View Shop</button></Link>
                        </div>
                    </div>
                    <div className='col-3 shopCart'>
                        <div className='shopImg'>
                            <img src='https://s3-alpha-sig.figma.com/img/cf88/40eb/1b2727252d2fb101cf436750a8615bca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yx8PmpxP4yV0F~gvp5mb2H12V1VjhZ-~exHulKD0S3ZqrW42ZV5F6tjuWhtDAhWAu1dQ5BGs5mKF-ymmZg4AvsLV86Sa0A-Z9qhoeCIp2zqzeI4-z8YrsmSd1i8U7P5ZMUkbMtO~rD~tt8Fy~RwZCEfo7Px5V0tf7v7n0K3fSJZHhp~25be09hzqBzLx4-1m9kwQskId0G47ouNwZYi5NxORbXfRMFDyQbDCXh2GNtsl7UDLcPGj0j2wJVmEKnALgF5tBxD1CjfKfwbtDVgHjwvu6Hm0DmPHCDMdnhCjROTwPdv6a9Sn876PCi4WzuIvBZrfei8ib1uz9EKwE0at6Q__' alt=''/>
                        </div>
                        <div className='d-flex justify-content-between mt-1'>
                            <div className='fw-bold'>Shop Name</div>
                            <div>
                                <span>{getStar()}</span><span>{getStar()}</span>
                                <span>{getStar()}</span><span>{getStar()}</span>
                                <span>{getStar()}</span>
                            </div>
                        </div>
                        <div className='f14 text-end text-secondary'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14px" class="" style={{marginBottom:"2px"}}>
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .7575 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>1.5k
                        </div>
                        <div className='text-center imgItem'>
                        <Link to="/results"><button className='rounded my-2 fontWeight'>View Shop</button></Link>
                        </div>
                    </div>
                    <div className='col-3 shopCart'>
                        <div className='shopImg'>
                            <img  src='https://s3-alpha-sig.figma.com/img/cf88/40eb/1b2727252d2fb101cf436750a8615bca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yx8PmpxP4yV0F~gvp5mb2H12V1VjhZ-~exHulKD0S3ZqrW42ZV5F6tjuWhtDAhWAu1dQ5BGs5mKF-ymmZg4AvsLV86Sa0A-Z9qhoeCIp2zqzeI4-z8YrsmSd1i8U7P5ZMUkbMtO~rD~tt8Fy~RwZCEfo7Px5V0tf7v7n0K3fSJZHhp~25be09hzqBzLx4-1m9kwQskId0G47ouNwZYi5NxORbXfRMFDyQbDCXh2GNtsl7UDLcPGj0j2wJVmEKnALgF5tBxD1CjfKfwbtDVgHjwvu6Hm0DmPHCDMdnhCjROTwPdv6a9Sn876PCi4WzuIvBZrfei8ib1uz9EKwE0at6Q__' alt=''/>
                        </div>
                        <div className='d-flex justify-content-between mt-1'>
                            <div className='fw-bold'>Shop Name</div>
                            <div>
                                <span>{getStar()}</span><span>{getStar()}</span>
                                <span>{getStar()}</span><span>{getStar()}</span>
                                <span>{getStar()}</span>
                            </div>
                        </div>
                        <div className='f14 text-end text-secondary'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14px" class="" style={{marginBottom:"2px"}}>
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .7575 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>1.5k
                        </div>
                        <div className='text-center imgItem'>
                        <Link to="/results"><button className='rounded my-2 fontWeight'>View Shop</button></Link>
                        </div>
                    </div>
                    
                </div>

                

                <div className="home-section">

                    <div className="home-main">



                        {data.length >= 1 && data.map((update) => (

                            <div className="home-main-1">
                                <div className="home-img">
                                    <img src={update.image?.url} alt={update.Name} />

                                </div>
                                <div ClassName="home-heading">
                                    <div className="Star-menu">
                                        <FaStar />

                                        <FaStar />

                                        <FaStar />
                                        <FaStarHalfAlt />

                                        <FaStarHalfAlt />

                                    </div>
                                    <h2>{update.Name}</h2>
                                    <h4>You are Ready</h4>

                                    <Link to={`/shops/${update._id}`} >
                                        <button className="shop-button-home" type="submit">View Shop</button>
                                    </Link>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}
export default Home;