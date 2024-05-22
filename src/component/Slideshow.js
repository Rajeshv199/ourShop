import React from 'react';
import { Link } from 'react-router-dom'
import '../css/slideshow.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Slideshow() {
  // const [value, setValue] = useState('slidebarimagedata');

  let imgArr = ["https://s3-alpha-sig.figma.com/img/aec8/642d/fa1a2c65d988b3208b7412bde3c678c7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5o3E-3-x0zHaCtsO85KKYLprYLK0CMEhWY1MBzKTk93VbDZ4L22CKgRmDgdfPcXkRkKPw41WwP4leQQNvLuQPOSCSdYZZNvpBBqHjHxhUxssFoYa7IWECO8SFeB8Wn4xcVWMmqD~EsinJ7uTYxePeKPjCS~SfNb-crdb~cozzhZVCpuSsYECjX0BTw53lUwrqkfsMUv7Ml3xVLCh6hyp~1i81hCFbGteI9RovYapCQ8M7c3~Pube~SkjvMbHIRUmgg5K1bziTtzumix9tdQCdEc7seTLQ7~0CqSc5TBqZpfnTTtaP8THXgXHq0Si59UPP1Nk0Kh3c812sV9Rq5~Xw__",
    "https://s3-alpha-sig.figma.com/img/4c67/ce00/ac15639edf234f9874c2f9524b8935ca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MDfEmf6PfQukqh-kh7xPjgJzFm9ZxhSEhLvkcoHvvYgUxtJexXsrcEkyBy58U59TTxj4GmuSRyZcrp9Vi4eitblQAKQdqQzyL4NBTEWvLQpBnteRg4Tecd6mqeTM5tYS46FOW-Ni69y5alqBHdSVdABJCgdJnvuLfw4H9R7HxF6I3Y0KVAHMYfzFdSzgl8k7HkW2aqa9NJVV5S7iK7ko9MBbq6Ext3B9UbEVp1G~NDKJS05~UQc~nVYi46AySsOxX34i17kBSvsLhDDrXojxrDMvMvv7Mn29MejfcpYrt-eSoMn13OQ88r5YPhpZSGltBfPPh1Rmx8lZh55ZZclIuA__",
    "https://s3-alpha-sig.figma.com/img/a80c/54c6/1806eac0c163f773052b30b4ff79f14f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGXrSWVMlMw~htlwuC0aBgCV8bwCBu7O9KrbWHKaK4loRyMRFXvy8c0E6Yw4-6rjiFUhHL0KvFuPxlxu4J0IsmfINd-2A03s79njVu3S11un1DQrdY5ikkeV7dIrSy3~wJZdtRbUIEiidGHc2Iw7ivlNEf-mX7TRyjcM5GYtj5zAruyAh5p555cW9ET0MVSaBQBCExRILgO8PQFfFntyZUa74ys6p7FXOgjsWHGdiiuWU3eIFbUjPZ8zYtitCQ1LjUJKvhjl-Z2~Syotd0Ezb8Xm6C0g7elC3naKSE0ahWR3gjpEpodf-T9cZT4v-RI8-9adSs7OKdoQylM3PcO6Qw__",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }
  };
  const handleShop =()=>{
    setTimeout(scrollCareer, 0);
  }
  function scrollCareer(){
    window.scrollTo({ top: 950, behavior: 'smooth' });
 }
  

  return (

    <>
      <div className="posterSlick">
        <Slider {...settings}>
          {imgArr.map((item, index) => (
            <div key={index}>
              <div className="slick-cloned">
                <div className="imgList" ><img width="100%" height="100%" src={item} alt="" /></div>

              </div>
            </div>
          ))}
        </Slider>

        <div className="imgDetails">
          <div className='imgItem'>
            <div className='name'>Shop Name</div>
            <div className='newArr'>NEW Arrival IN</div>
            <div className="title">Women collection</div>
            <div><button onClick={()=>handleShop()}>Shop Now</button></div>
          </div>
          </div>
          
      </div>


    </>
  )
}

export default Slideshow;