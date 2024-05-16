import React from 'react';
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const ProductsList = () => {
    return (
        <div >
            <Navbar2/>
            <div className='m-auto' style={{width:"90%"}}>
                <h5 className='fontWeight my-3'> Results </h5>

                <div className='row' >
                    
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
    )
}
export default ProductsList;