import React,{useEffect, useState} from 'react';
import Navbar from './Nav';
import { Link,useLocation} from 'react-router-dom';
import axiosInstance from "../apiConfig/axoisSetup";
// import { Link } from 'react-router-dom'

const DetailsProduct = () => {
    const[product,setProduct] = useState({});
    const[relatedprod,setRelatedprod] = useState([]);
    let { state } = useLocation();

    const fetchProduct = async () => {
        try {
            const response = await axiosInstance.get(`/singleproducts/${state.id}`, {});
            let data = response.data;
            if (data.success) {
                setProduct(data.shops);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const relatedProduct = async () => {
        try {
            const response = await axiosInstance.get(`/suggestshops/${state.id}`, {});
            let data = response.data;
            if (data.success) {
                setRelatedprod(data.suggestions);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
        relatedProduct();

    }, []);


    const{image,name,price,brand,about,description} = product;

    return (
        <div >
            <Navbar />
            <div className='m-auto' style={{width:"90%"}}>
                <div className='row my-3 mx-0'>
                    <div className='col-1'>
                        <div className='listImg'>
                            <img src={image?image.url:""} alt='' />
                        </div>
                        <div className='listImg'>
                            <img src='https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg' alt='' />
                        </div>
                        <div className='listImg'>
                            <img src='https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg' alt='' />
                        </div>
                    </div>
                    <div className='col-4 imgShow'>
                        <img src={image?image.url:""} alt='' />
                    </div>
                    <div className='col-7 px-4'>
                        <h5 className='w-75'>{name}</h5>
                        <div className='my-3'>
                            <h4 className='m-0 text-dark'> ₹ {(+price).toLocaleString('en-IN')}</h4>
                            {/* <div className='text-secondary mx-4 f14'>M.R.P: <del> ₹4,499</del></div> */}
                        </div>
                        <div><span className='brandName'>{brand}</span></div>
                        <div className='mt-3 f14'>
                            <div className='fontWeight'>About</div>
                            <div>{about}</div>
                            <div className='fontWeight mt-3'>Description</div>
                            <div>{description}</div>
                            
                        </div>
                        {/* <div><button className='buyBtn'>Buy Now</button></div> */}
                    </div>
                </div>

                <div>
                    <h5 className='fontWeight mt-5'>Related</h5>
                    <div className='row' >
                    {/* {relatedprod.map((p1,index)=>(
                        <div className='col-3 prodCart'>
                            <Link to="/DetailsProd">
                                <div className='prodImg'>
                                    <img src={p1.image.url} alt='' />
                                </div>
                                <div className='py-2 px-3'>
                                    <div className='fontWeight my-2'>{p1.name}</div>
                                    <div className='d-flex'>
                                        <div className='mr-3 fontWeight'>₹ {p1.price}</div>
                                    </div>
                                    <div className='f14 my-2'>{p1.brand}</div>
                                </div>
                            </Link>
                        </div>
                    ))} */}

                       
                        <div className='col-3 prodCart'>
                            <Link to="/DetailsProd">
                                <div className='prodImg'>
                                    <img src='https://s3-alpha-sig.figma.com/img/b3e1/af53/e03885ab19d677099d1979fc7928feb3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K82dKr8ReOXFXjSl-S86iQMTA5lNsuCrsd6Uc~4Ce5xAsW7pFwbain1SFrJfHbb8ELj-XSFNzEUr1NYWnt9yhpw0BvyrqRJSnfpXaVz-QRa~VYHhLIB3uH6tr2R9nPnCjGQyp42yk7r8fFPXCGhglrA-0DS6DYdAqKd0oWYdgx4~cAMq1jW3c4h1VjxbnLBuWE-jfliYmAEu8wRGt7Difzm5Mpco6HwJXtBwIiXY~NT7PQYGoEnVxon~MwLQmu4AaCAXChiPbB8UMdma4Zuu2eiE8DhLVcR6YhVW1YM89k2IwWCXee0ziJF182MuvHUk-FrBzm6nTP1n7VW1SRDtoQ__' alt='' />
                                </div>
                                <div className='py-2 px-3'>
                                    <div className='fontWeight my-2'>Lorem Ipsum</div>
                                    <div className='d-flex'>
                                        <div className='mr-3 fontWeight'>₹4,499</div>
                                        <div className='f12 mx-4 mt-1'>M.R.P: <del>₹4,499</del></div>
                                    </div>
                                    <div className='f14 my-2'>Brand Name</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3 prodCart'>
                            <Link to="/DetailsProd">
                                <div className='prodImg'>
                                    <img src='https://s3-alpha-sig.figma.com/img/b3e1/af53/e03885ab19d677099d1979fc7928feb3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K82dKr8ReOXFXjSl-S86iQMTA5lNsuCrsd6Uc~4Ce5xAsW7pFwbain1SFrJfHbb8ELj-XSFNzEUr1NYWnt9yhpw0BvyrqRJSnfpXaVz-QRa~VYHhLIB3uH6tr2R9nPnCjGQyp42yk7r8fFPXCGhglrA-0DS6DYdAqKd0oWYdgx4~cAMq1jW3c4h1VjxbnLBuWE-jfliYmAEu8wRGt7Difzm5Mpco6HwJXtBwIiXY~NT7PQYGoEnVxon~MwLQmu4AaCAXChiPbB8UMdma4Zuu2eiE8DhLVcR6YhVW1YM89k2IwWCXee0ziJF182MuvHUk-FrBzm6nTP1n7VW1SRDtoQ__' alt='' />
                                </div>
                                <div className='py-2 px-3'>
                                    <div className='fontWeight my-2'>Lorem Ipsum</div>
                                    <div className='d-flex'>
                                        <div className='mr-3 fontWeight'>₹4,499</div>
                                        <div className='f12 mx-4 mt-1'>M.R.P: <del>₹4,499</del></div>
                                    </div>
                                    <div className='f14 my-2'>Brand Name</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default DetailsProduct;