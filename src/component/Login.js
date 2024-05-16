import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextField from '@mui/material/TextField';
import shop11 from "../images/shop11.png"
import shop12 from "../images/shop12.png";
import Nav from './Nav';



// import Signup from './Signup';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { _id } = useParams();


    //     useEffect(() => {
    //         const handlesignup = () => {
    //             navigate("/")
    //         }
    // })

    const handleLogin = async () => {
        console.warn(email, password);

        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        if (result.name) {
            // Save user data to local storage
            localStorage.setItem("user", JSON.stringify(result))

            // Fetch cart data from the server based on the user's ID
            // const cartData = await fetchCartDataFromServer(result._id);

            // Dispatch the 'LOAD_CART_DATA' action to load the cart data into the Redux store
            //  dispatch(addToCart(cartData))

            navigate("/")
        } else {
            alert('please enter a valid details')
        }

    }

    let imgArr = ["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplaySpeed: 500,
    };
    return (
        <div className="">
            <Nav/>
            <div className="shopSlick">
                <Slider {...settings}>
                    {imgArr.map((item, index) => (
                        <div key={index}>
                            <div className="slick-cloned">
                                <div className="shopList" ><img width="100%" height="100%" src={item} alt="" /></div>
                                <div className="shopDetails">
                                    <div className='name'>Shop Name</div>
                                    <div className="title">Freeshop Technologies Private Limited, CIN: U74900KA20 </div>
                                    <div><button>Shop Now</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='signup-container'>

                <div className='signSection'>
                    <div className='row py-5'>
                        <div className='col-5'>
                            <div className='shopImg'>
                                <img src={shop12} width="100%" alt='' />
                            </div>
                            <div className='shopRound'>
                                <img src={shop11} width="100%" alt='' />
                            </div>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-5'>
                            <div className='signupForm'>
                                <h4 className='text-white'>Login to your shop</h4>
                                <div className='f14'>Are you ready to take the next step towards successful future? look no further than circlez!</div>

                               
                                <div className="sign-input">
                                    <TextField type='email' label="Email" variant="outlined" size="small"/>
                                </div>
                                <div className="sign-input">
                                    <TextField type='password' label="Password" variant="outlined" size="small"/>
                                </div>
                                

                                <div className='d-flex f14 justify-content-between mt-2 mx-4 px-2'>
                                    <div><button className='border-0  colr'>Forgot password?</button></div>
                                    <div>Create a account?<Link className='colr' to="/signup"> Sign up</Link></div>
                                
                                </div>

                                <div >
                                    <button className='btn btn-primary text-center w-75 my-5'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






            {/* <h1>LogIn Page</h1>
            <form className="login-form">
                <div className="login-inputbox">
                    <input className='inputBox' type="text" placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input className='inputBox' type="password" placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button onClick={handleLogin} className="appButton" type="button">Login</button>
                    <div className="login-redirectpage">
                        <p> Have an account?</p><li><Link to="/signup">Signup</Link></li>
                    </div>
                </div>

            </form> */}
        </div>
    )
}
export default Login;