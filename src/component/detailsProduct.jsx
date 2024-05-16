import React from 'react';
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const DetailsProduct = () => {
    return (
        <div >
            <Navbar2 />
            <div className='m-auto' style={{width:"90%"}}>
                <div className='row my-3 mx-0'>
                    <div className='col-1'>
                        <div className='listImg'>
                            <img src='https://s3-alpha-sig.figma.com/img/d459/cc7b/6589d486f8e9cf736e11c2cdcfef68a5?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gBS71njUCaJQWjekhe2vOjEfQ9qpkkpsggRiBV-l~9doDnfFAf2yRSqhcF34debLdXmC4u8dcU48h2magJOkWEi2V9oR4ibGe1LsUWxlmVEjZsT4h4wwDqqHm7dLZnJ9wAk6YmSiLcacl5YDsxhWvSeq8LyhUvbUDteepi-31GKsOT4nyepIc34~y70IbyLBLl6RN3E~9lM0LTzq0AUxNb10Ucra6LY~qHI7WM9gS75Ut1zuWpr-rG36LBhniFqbpVKV8IeSTp3fu8AZ88Ohch4mF6cfBn~y4TFqItqeyBOczXN1X-Q1AvpKj0CUPpNECAXJXOmK0RCmYayMkm5p3g__' alt='' />
                        </div>
                        <div className='listImg'>
                            <img src='https://s3-alpha-sig.figma.com/img/c7db/e729/54ca04f4b2da417877c7a94e4f103237?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8hvteLD76fKL3y-M~Huif06xpLnfSmn0OVgY3CvD1TTu2lduzo0qoxUg0ZmaYYRVX9IQkjdgPb1fvHvoLtYaqBljdbxznjgE5ZKduz4OfT4bYZQJUT2E96d0aWRCTPUdp1K8zwUru2aiZclBIAU9GuDdEfSRDWV8PLTv0Bc3cmfX34RRTDRTqXoap5AcTw9kcRhcsS7usAXicIsaS58Ugcylmon8R4wdFcnBiY3GHTyUZYvxHNbmtPhalFtEgLeWyq3clMSskiTdHR0nv0HobiF7V8daNjl8Q4aZkkqHli0m4rQ~v5TcGTnJM~N-TOsCcIZKAqBE6bQRkC5mXnTig__' alt='' />
                        </div>
                        <div className='listImg'>
                            <img src='https://s3-alpha-sig.figma.com/img/a10b/0e5a/6b0f127ae9affc6b6466c04047950cc1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fgfXU57WDRc2ksyyjZ0inTs6FkzArfIDXZtlVBMHJh8j5pJmly1w9qlcPUKCCMJFJrEDMsYb4TU3Nr9bKshCL5ad43lbKANSklvckHf~QBSnI6bsQVFsRdtAvitrNsRJXBJzjd1152~89dMdOOlm1R7AdgS9MYmPnqe4-WpcQ3zf5akSMQABKRBOQdmimXYcVGBnSoQtnVpT1jPca6gyOGvPDH0WXtl~iQ5G9-Qdq2P7cbrtLA1giHk1lvi5HfnjGU4hPLcx8rN8UvJDTJK6Z34N5mkGkMS10TNCJ1uj-AwtaYqBsIhbwwtkQ7LFG~AVoYX96qa42XV31eoxQPUwpA__' alt='' />
                        </div>
                    </div>
                    <div className='col-4 imgShow'>
                        <img src='https://s3-alpha-sig.figma.com/img/d459/cc7b/6589d486f8e9cf736e11c2cdcfef68a5?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gBS71njUCaJQWjekhe2vOjEfQ9qpkkpsggRiBV-l~9doDnfFAf2yRSqhcF34debLdXmC4u8dcU48h2magJOkWEi2V9oR4ibGe1LsUWxlmVEjZsT4h4wwDqqHm7dLZnJ9wAk6YmSiLcacl5YDsxhWvSeq8LyhUvbUDteepi-31GKsOT4nyepIc34~y70IbyLBLl6RN3E~9lM0LTzq0AUxNb10Ucra6LY~qHI7WM9gS75Ut1zuWpr-rG36LBhniFqbpVKV8IeSTp3fu8AZ88Ohch4mF6cfBn~y4TFqItqeyBOczXN1X-Q1AvpKj0CUPpNECAXJXOmK0RCmYayMkm5p3g__' alt='' />
                    </div>
                    <div className='col-7'>
                        <h5 className='w-75'>Amazon Fire TV Stick with Alexa Voice Remote (includes TV and app controls) | HD streaming device</h5>
                        <div className='my-3'>
                            <h4 className='m-0 text-dark'> ₹4,499</h4>
                            <div className='text-secondary mx-4 f14'>M.R.P: <del> ₹4,499</del></div>
                        </div>
                        <div ><span className='brandName'>Brand 1</span></div>
                        <div className='mt-2 f14'>
                            <ul>
                                <li>Latest generation of our best-selling Fire TV device - 50% more powerful than the 2nd generation for fast streaming in Full HD. Includes Alexa Voice Remote with power and volume buttons.</li>
                                <li>Less clutter, more control - All-new Alexa Voice Remote (3rd Gen) lets you use your voice to search and launch shows across apps. All-new preset buttons get you to favorite apps quickly. Plus, control power and volume on your TV and soundbar with a single remote.</li>
                            </ul>
                        </div>
                        <div><button className='buyBtn'>Buy Now</button></div>
                    </div>
                </div>

                <div>
                    <h5 className='fontWeight mt-5'>Related</h5>
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

        </div>
    )
}
export default DetailsProduct;