
import './assets/styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';
import Profile from './pages/Profile';
import Createshop from './pages/Createshop';
import AddProduct from './pages/Addproduct';
import Admin from './components/Admin';
import Shoplogin from './pages/shoplogin';
import Productlist from './pages/Productlist';
// import Sidebar from './component/Sidebar';
import DisplayProdList from './pages/displayProdList';
import DetailsProduct from './pages/detailsProduct';
import Shoplist from './pages/shoplist';
import Help from './pages/help';
import ChangePassword from './pages/changePassword';
import ForgotPassword from './pages/forgotPassword';
import Review from './pages/Review';
import ShopReview from './pages/shopReview';
import SuperAdmin from './pages/superAdmin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route element={<PrivateComponent />}>

          
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/profile" element={<Profile />} />

            <Route path="/createshop" element={<Createshop />} />
            <Route path="/shoplogin" element={<Shoplogin />} />
            <Route path="/admin/listProduct" element={<Productlist />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />
            <Route path="/shopList" element={<Shoplist/>} />
            <Route path="/admin/shopReview" element={<ShopReview/>} />
            
            <Route path="/updatePassword" element={<ChangePassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}
            {/* <Route path="/admin/*" element={<Admin />} /> */}

            
          </Route>

          <Route path="/super-Admin" element={<SuperAdmin />} />

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