import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Addproduct = () => {
    const auths = localStorage.getItem('admin');


    const fashion = 'fashion';
    const cloths = 'cloths';
    const electronics = 'electronics';

    const red = 'Red';
    const pink = 'Pink';
    const black = 'Black';
    const yellow = 'Yellow';
    const green = 'Green';
    const white = 'White';
    const blue = 'Blue';

    const s = 'S';
    const m = 'M';
    const l = 'L';
    const xl = 'XL';
    const [formData, setFormData] = React.useState({
        name: '',
        id: JSON.parse(auths)?._id || '',
        title: '',
        strikeprice: '',
        price: '',
        star: '',
        review: '',
        color: '',
        size: '',
        stock: '',
        category: '',

    });
    const { name, id, category, title, strikeprice, price, star, review, color, size, stock } = formData;
    const [image, setImage] = React.useState('');
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        if (e.target.name === 'image') {
            const render = new FileReader();

            render.onload = () => {
                if (render.readyState === 2) {
                    setImage(render.result)
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const createshop = async (e) => {
        e.preventDefault();
        try {
            if (!image) {
                toast.error('Please select an image for the product');
                return;
            }

            const myForm = new FormData();
            myForm.append('name', name);
            myForm.append('image', image);
            myForm.append('id', id);
            myForm.append('price', price);
            myForm.append('category', category);
            myForm.append('strikeprice', strikeprice);
            myForm.append('star', star);
            myForm.append('review', review);
            myForm.append('stock', stock);
            myForm.append('color', color);
            myForm.append('size', size);
            myForm.append('title', title);

            let { data } = await axios.post('http://localhost:5000/createproducts', myForm, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(data)

            toast.success("Added Successfully");
            setTimeout(() => {
                navigate("/")

            }, 1500)
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error("No response received from the server. Please try again later.");
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };
    return (
        <div>

            <div className="addproduct-form">
                <h1 className="addproduct-heading">addproduct</h1>

                {/* <form className="addproduct-input"> */}
                <div className="addproduct-input-div">
                    {/* value={JSON.parse(auths)._id} */}
                    <form onSubmit={(e) => createshop(e)} className="addproduct-input">
                        <input onChange={onChangeHandler} value={name} className="createshop-field" type="text" placeholder="product name" name='name' />
                        <input className="createshop-field" onChange={onChangeHandler} value={id} type="text" placeholder="product id" name='id' />

                        <input className="createshop-field" accept='image/*' type="file" files={image} multiple onChange={onChangeHandler} name='image' />
                        <select className="createshop-field" onChange={onChangeHandler} name='category'>
                            <option >Choose Category</option>
                            <option value={fashion}>fashion</option>
                            <option value={cloths}>cloth</option>
                            <option value={electronics}>electronics</option>
                        </select>
                        <input className="createshop-field" onChange={onChangeHandler} value={title} type="text" placeholder="title" name='title' required />
                        <input className="createshop-field" onChange={onChangeHandler} value={strikeprice} type="text" placeholder="strikeprice" name='strikeprice' required />
                        <input className="createshop-field" onChange={onChangeHandler} value={price} type="text" placeholder="price" name='price' required />
                        <input className="createshop-field" onChange={onChangeHandler} value={star} type="text" placeholder="star" name='star' required />
                        <input className="createshop-field" onChange={onChangeHandler} value={review} type="text" placeholder="review" name='review' required />
                        <select className="createshop-field" onChange={onChangeHandler} name='color'>
                            <option>Choose color</option>
                            <option value={red}>Red</option>
                            <option value={pink}>Pink</option>
                            <option value={black}>Black</option>
                            <option value={yellow}>Yellow</option>
                            <option value={green}>Green</option>
                            <option value={white}>White</option>
                            <option value={blue}>Blue</option>

                        </select>
                        <select className="createshop-field" onChange={onChangeHandler} name='size'>
                            <option>Choose Size</option>
                            <option value={s}>S</option>
                            <option value={m}>M</option>
                            <option value={l}>L</option>
                            <option value={xl}>XL</option>
                        </select>
                        <input className="createshop-field" onChange={onChangeHandler} value={stock} type="text" placeholder="stock" name='stock' required />
                        <button className="createshop-button" type='submit'>Addproduct</button>
                    </form>
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}
export default Addproduct;