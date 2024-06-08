import React from 'react';
import { Link } from 'react-router-dom';
// import '../css/home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Nav from '../components/Nav';
import Modal from "../components/modale";
import axiosInstance from "../services/axoisSetup";
import Whatsapp from "../assets/images/whatsapp.png";
import { Country, State, City } from 'country-state-city';



const Home = () => {

    const [shopArr, setShopArr] = useState([]);
    const [filter, setFilter] = useState({ state: "", city: "", category: "" });
    // const [states, setStates] = useState([]);
    // const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ratingPop, setRatingPop] = useState(false);
    const [shopId, setShopId] = useState("");
    const [errors, setErrors] = useState({});
    const auth = localStorage.getItem('user');

    const [ratingForm, setRatingForm] = useState({name:"",comment:"",rating:"",email:"",phoneNo:""});
    // const [ratingcount, setRatingcount] = useState(3);
    const ratingArr = [1, 2, 3, 4, 5];
    let states = State.getStatesOfCountry("IN");
    let findCode = filter.state?states.find(c1=>c1.name===filter.state).isoCode:'';
    let cities = filter.state?City.getCitiesOfState("IN", findCode):[];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRatingForm({...ratingForm,[name]:value});
        setFilter({...filter,[name]:value});
       
    }


    const handleRate= async()=>{
        const newErrors = validateForm(ratingForm);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log(ratingForm);
            try {
                const response = await axiosInstance.post(`/review/${shopId}`, ratingForm, {});
                const data = response.data;
                if (data.success) {
                    RatingPop();
                    setRatingForm({name:"",comment:"",rating:""});
                } else {
                    alert('Please enter a valid details');
                }
            } catch (err) {
                const data = err.response.data;
                alert(data.message);
                console.error('An error occurred :', data.message);
            }
        } else {
        }
    }

    const validateForm = (data) => {
        const errors = {};
        const{name,comment,rating,email,phoneNo} = data;
        if (!name) {
            errors.name = 'This field is required';
        } 
        if (!comment) {
            errors.comment = 'This field is required';
        }
        if (!rating) {
            errors.rating = 'This field is required';
        }
        if (!email) {
            errors.email = 'This field is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }
        if (!phoneNo) {
            errors.phoneNo = 'This field is required';
        } else if(!/^\d{10}$/.test(phoneNo)){
            errors.phoneNo = 'Enter a valid PhoneNo';
        }
        return errors;

    }

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

    const fetchFilterCateg = async () => {
        try {
            const response = await axiosInstance.get(`/filterData`, {});
            let data = response.data;
            console.log(data);

            if (data.success) {
                // setCities(data.cities);
                // setStates(data.states);
                setCategories(data.categories);
                // setShopArr(data.shops);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const RatingPop = (id) => {
        setShopId(id);
        setRatingPop(!ratingPop);
    }


    useEffect(() => {
        fetchShops();
        fetchFilterCateg();
    }, []);


    // console.log(Country.getAllCountries())
    
    // console.log(City.getCitiesOfState("IN", "JH"))
    // console.log(City.getCitiesOfCountry("IN"))

    const { state, city, category } = filter;
    const { name,comment,rating,email,phoneNo} = ratingForm;

    let shopArr2 = shopArr;

    shopArr2 = state?shopArr2.filter(sh=>sh.state.toLowerCase()===state.toLowerCase()):shopArr;
    shopArr2 = city?shopArr2.filter(sh=>sh.city.toLowerCase()===city.toLowerCase()):shopArr2;


    return (

        <div className="container-flui">
            <Nav />

            <div>
                <Slideshow />
            </div>
            <div className="home-bg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://s3-alpha-sig.figma.com/img/8974/920d/87312d922f53c47157f3dfb29248d743?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5AsgbsHbG9TLJBpIDZX~Z4fejUbyrvcMydHkx81-K7H2PyegeEYJH2YveZa~wJ2gEAURgIP-tBfKkdtmLSlZKwCCk3w1ru8iNCINKMeauXHTHkD7GKjcHT1tROIRTx8XXtXNFyR8BRQdcfDsDXWd-Ht6OmobFK7UzHn795MlbWQxV6B3ueZs2r4jbGOaTIv-m~KQrbmpcKuJNEUP5SoukY4TnK77nNkOPf9kuv1bvOmK9EuJT58hs3NiRAFjryAVauy0efl1iPnFN0vvbabQwJ0VX5f603XP6gcwX~re7XJMyGAYdw4~tPsq3acS0efTJZaC9IP29uqRvzmAg0Ebg__)" }}>
                <div className="home-fst-line">
                    <h2>Start your Online Business with Zero Investment ...</h2>
                    <h6>On-demand delivery from every restaurant and store in your city. They are massive in the India.</h6>
                    <div className="d-flex mt-">
                        <div className="home-btn mr-4">
                            <Link to="#"><button className='btnhover' type="button"> Know More</button></Link>
                        </div>
                        <div className="home-btn mx-5 ">
                            <Link to={auth?"#":"/signup"}><button className='bg-pink btnhover2' type="button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto my-4" style={{ width: "90%" }}>
                <div className='d-flex justify-content-between'>
                    <div><h3 className="colrblue fw-bold">Our Shop</h3></div>

                    <div className='d-flex filterDrop mt-1'>
                        <div className='mt-1 fontWeight'>Location : &nbsp;</div>
                        <div className=" mx-2">
                            <TextField select value={state} name="state" label="State" size="small" onChange={handleChange}>
                            <MenuItem value='' >All</MenuItem>
                                {states.map((s1,index)=>(
                                    <MenuItem value={s1.name} key={index} >{s1.name}</MenuItem>
                                ))}
                                
                            </TextField>
                        </div>
                        <div className=" mx-2">
                            <TextField select value={city} name="city" label="City"  size="small" onChange={handleChange}>
                                <MenuItem value='' >All</MenuItem>
                                {cities.map((c1,index)=>(
                                    <MenuItem value={c1.name} key={index}>{c1.name}</MenuItem>
                                ))}
                                
                            </TextField>
                        </div>
                        {/* <div className=" mx-2">
                            <TextField select value={category} name="category" label="Category" size="small" onChange={handleChange}>
                                {categories.map((ca,index)=>(
                                    <MenuItem value={ca} key={index}>{ca}</MenuItem>
                                ))}
                                
                            </TextField>
                        </div> */}
                    </div>
                </div>

                <div className='row mx-0 mt-4'>
                    {shopArr2[0]?shopArr2.map((sh1, index) => (
                        <div className='col-3 shopCart' key={index}>
                            <div className='shopImg'>
                                <img src={sh1.image.url} alt='' />
                            </div>
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='fw-bold text-capitalize'>{sh1.Name}</div>

                                <div className='d-flex'>
                                    <Link className='text-dark' to="/Review" state={sh1._id}>
                                    {ratingArr.map((no,index)=>(
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15px" className={"mx-1 cursor-pointer "+(index<+sh1.ratings?"text-warning":"")}>
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    ))}
                                   </Link>

                                    <div className='f14 text-secondary mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5F6368" className='mb-1'><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
                                        {sh1.numOfReviews}
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex f12 mt-2 justify-content-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#EA3323"><path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-96Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 223 90.5T792-549q0 97-77 209T480-96Z"/></svg>
                                    &nbsp;{sh1.city}, india
                                </div>
                                <div className='mx-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#0090FF"><path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-136-194.5T144-765q-2-21 12.5-36.5T192-817h136q17 0 29.5 10.5T374-780l24 107q2 13-1.5 25T385-628l-97 98q20 38 46 73t58 66q30 30 64 55.5t72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21-16 35.5T763-145Z"/></svg>
                                    &nbsp;+91 {sh1.mobileNo}
                                </div>
                                <div><img className='mb-1' src={Whatsapp} alt=''/></div>
                            </div>
                           

                            <div className='text-center imgItem'>
                                <Link to={`/${sh1.Name}/products`} state={{ id: sh1._id, name: sh1.Name }}><button className='rounded my-3 fontWeight'>View Shop</button></Link>
                            </div>
                            <div className='rating' onClick={()=>RatingPop(sh1._id)}>Rate</div>
                        </div>
                    )):(
                        <h5 className='text-center my-5 text-secondary'>Shop not found</h5>
                    )}

                </div>

            </div>
            <div>
                <Modal toggle={ratingPop} Toggle={RatingPop} title="" classWidth="ratingPup">
                    <div className='text-center title'>
                        <h4 className='colr-blue'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" className='mb-1' fill="#4DBC9C"><path d="M202.92-130q-30.3 0-51.3-21-21-21-21-51.31v-319.54q-24.16-19.84-36.27-51.5-12.12-31.65-.5-68.34l40.46-132.16q8-25.23 27.15-40.69Q180.62-830 207.23-830h546q26.62 0 45.46 14.77 18.85 14.77 27.46 40.62l41.23 132.92q11.62 36.69-.5 68.11-12.11 31.43-36.27 52.5v318.77q0 30.31-21 51.31-21 21-51.3 21H202.92Zm365.7-420q32.77 0 49.27-20.04t13.5-43.04L607.08-770h-96.47v158q0 25.23 17.08 43.62Q544.77-550 568.62-550Zm-180 0q27.61 0 44.8-18.38 17.2-18.39 17.2-43.62v-158h-96.47l-24.3 158.46q-3.24 21.31 13.38 41.43Q359.85-550 388.62-550Zm-178 0q22.23 0 38.23-15.5 16-15.5 19.77-38.96L292.15-770h-84.92q-6.54 0-10.38 2.88-3.85 2.89-5.77 8.66l-38.47 130.15q-7.92 25.77 7.47 52.04Q175.46-550 210.62-550Zm540 0q32.46 0 49.69-25.5 17.23-25.5 8.31-52.81l-40.47-130.92q-1.92-5.77-5.76-8.27-3.85-2.5-10.39-2.5h-82.92l23.53 165.54q3.77 23.46 19.77 38.96t38.24 15.5Z" /></svg> Review to your shop</h4>
                    </div>
                    <hr className='my-2' />
                    <div className="text-center my-4">
                        <div >
                            <TextField className='w-75' name="name" value={name} label="Name" size="small" onChange={handleChange} />
                        </div>
                        <div className='mt-4'>
                            <TextField className='w-75' name="comment" value={comment} label="Comment" multiline rows={2} size="small" onChange={handleChange}/>
                        </div>

                        <div className='d-flex justify-content-around w-75 m-auto my-3'>
                            {ratingArr.map((no,index)=>(
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40px" className={"mx-1 cursor-pointer "+(index<+rating?"text-warning":"")} onClick={()=>setRatingForm({...ratingForm,rating:+index+1})} key={index}>
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            ))}
                            
                        </div>
                        <div >
                            <TextField className='w-75' name="email" value={email} label="Email" size="small" onChange={handleChange} />
                        </div>
                        <div >
                            <TextField className='w-75 mt-3' name="phoneNo" value={phoneNo} label="Phone No" size="small" onChange={handleChange} />
                        </div>

                        <button className="btn text-white bg-primary my-4 w-75" onClick={handleRate}>Rate</button>


                    </div>

                </Modal>
            </div>


        </div>
    )
}
export default Home;