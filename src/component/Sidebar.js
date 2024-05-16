import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/admindashboard.css';
// import Productlist from '../component/Productlist';
// import AddProduct from '../component/Addproduct';
import { MdAddShoppingCart } from "react-icons/md";
import { TbCheckupList } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
// import { useParams } from 'react-router-dom';



function Sidebar() {
    const navigate = useNavigate();
    // const { shopId } = useParams();
    const auths = localStorage.getItem('admin');
    const adminlogout = () => {
        // Get the admin data from localStorage
        // const adminData = JSON.parse(localStorage.getItem('admin'));

        // Clear only the admin-related data
        localStorage.removeItem('admin');

        // Redirect to the desired page
        navigate('/createshop');
        // navigate(`/admin/addproduct/${adminData._id}`);

    }
    const deleteShop = async (shopId) => {
        try {
            const response = await fetch(`http://localhost:5000/admin/deleteshop/${shopId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                localStorage.removeItem('admin');
                navigate('/createshop');
            } else {
                const errorData = await response.json();
                console.error('Error deleting shop:', errorData);
            }
        } catch (error) {
            console.error('Error deleting shop:', error);
        }
    };



    return (
        <div>


            <div className="admin-dashboard">
                <div className="admin-dashboard-background">
                    <div>Admin Dashboard</div>
                    {/* <p>ID from URL: {id}</p> */}
                    <div className="admin-name">
                        {/* <h4> Hii {JSON.parse(auths).Name}</h4> */}
                        <h4> Hii Demo</h4>
                    </div>
                    <div className="admin-logo">
                        {/* <img src={JSON.parse(auths).image?.url} alt="img"  /> */}
                        <img src="" alt="img"  />

                    </div>
                    <div>
                        {/* <h4>Your Shop Id:{JSON.parse(auths)._id}</h4> */}
                    </div>
                    <div className="admin-navbar">

                        <Link to="/admin/addproduct"><MdAddShoppingCart />
                            Addproduct </Link><br></br><br></br>
                        {/* <Link to={`/admin/productlist/${JSON.parse(auths)._id}`}><TbCheckupList /> */}
                        <Link to={`/admin/productlist/${1}`}><TbCheckupList />
                            ProductList</Link><br></br><br></br>
                        {/* <button onClick={() => deleteShop(JSON.parse(auths)._id)}><MdLogout /> Delete Shop</button> */}
                        <button onClick={() => deleteShop(1)}><MdLogout /> Delete Shop</button>

                        <Link className="admin-navbar-logout" onClick={adminlogout} to="/createshop"><MdLogout />
                            Logout</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar