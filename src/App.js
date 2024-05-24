
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Footer from './component/Footer';
import Logout from './component/Logout';
import PrivateComponent from './component/PrivateComponent';
import Profile from './component/Profile';
import Mobile from './Items/Mobile';
import Desktop from './Items/Desktop';
import Laptop from './Items/Laptop';
import Grocery from './Items/Grocery';
import Tshirts from './Items/Tshirts';
import Jeans from './Items/Jeans';
import Kurta from './Items/Kurta';
import Shops from './Items/Shops';
import Singlepage from './RedirectPage/Singlepage';
import Createshop from './component/Createshop';
import AddProduct from './component/Addproduct';
import Admin from './component/Admin';
import Shoplogin from './component/shoplogin';
import Productlist from './component/Productlist';
// import Sidebar from './component/Sidebar';
import DisplayProdList from './component/displayProdList';
import DetailsProduct from './component/detailsProduct';
import Shoplist from './component/shoplist';
import Help from './component/help';
import ChangePassword from './component/changePassword';
import ForgotPassword from './component/forgotPassword';
import Review from './component/Review';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route element={<PrivateComponent />}>

          
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/jeans" element={<Jeans />} />
            <Route path="/kurta" element={<Kurta />} />
            <Route path="/singlepage" element={<Singlepage />} />
            <Route path="/shops/:id" element={<Shops />} />

            <Route path="/createshop" element={<Createshop />} />
            <Route path="/adminlogin" element={<Shoplogin />} />
            <Route path="/admin/listProduct" element={<Productlist />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />
            <Route path="/shopList" element={<Shoplist />} />
            
            <Route path="/updatePassword" element={<ChangePassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}
            {/* <Route path="/admin/*" element={<Admin />} /> */}

            
          </Route>
          <Route path="/help" element={<Help />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/:name/product-details/:id" element={<DetailsProduct />} />
          <Route path="/:name/products" element={<DisplayProdList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

     
    </div>
  );
}

export default App;


// error

// upload single photo in product list
// Forgot Password for shop
// not delete shop 