import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../css/adminlogin.css';



function Adminlogin() {
    const [Name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    // const auths = localStorage.getItem('admin');


    const handleLogin = async () => {
        console.warn(Name, password);

        let result = await fetch('http://localhost:5000/adminlogin', {
            method: 'post',
            body: JSON.stringify({ Name, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        if (result.Name) {
            localStorage.setItem("admin", JSON.stringify(result))
            navigate("/admin")
        } else {
            alert('please enter a valid details')
        }

    }
    return (
        <>  
             <div>Adminlogin</div>
            <form className="adminlogin-form">
           
                <div className="adminlogin-inputbox">
                    <div className="adminlogin-inputdiv">
                    <input className='admin-inputBox' type="text" placeholder="Enter Shop Name"
                        onChange={(e) => setName(e.target.value)} value={Name} />
                    <input className='admin-inputBox' type="password" placeholder="Enter Shop Password"
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button onClick={handleLogin} className="admin-appButton" type="button">Login</button>
                    </div>
                    {/* <div className="login-redirectpage"> */}
                    {/* <p> Have an account?</p><li><Link to="/signup">Signup</Link></li> */}
                    {/* </div> */}
                </div>

            </form>
        </>
    )
}

export default Adminlogin