import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useDispatch} from "react-redux";
// import { addToCart } from '../redux/cartActions';
// import { fetchCartDataFromServer } from '../api/Api';
// import { useParams } from 'react-router-dom';



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
    return (
        <div className="login">
            <h1>LogIn Page</h1>
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

            </form>
        </div>
    )
}
export default Login;