import React from 'react';
import { Link } from 'react-router-dom'
// import '../css/slideshow.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Slideshow() {
  // const [value, setValue] = useState('slidebarimagedata');

  let imgArr = ["https://s3-alpha-sig.figma.com/img/aec8/642d/fa1a2c65d988b3208b7412bde3c678c7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQLIWgMxOJbufu9tgqaBHC1c1RgqhlHdd5bipns8oxjtAQWb6wJ4bDKjsdqaiXnZYf7pdBSgmplhqwrEL4m0kv~cpXfsSQ9P-M2nTR7vZAHJAFC6Mk1gWEXTL24IyfD84Hd2OwbPFA5WRjnKfxvQ7~uO2QhSEJCswc-RqgnQOBc9zxVgDbL9sr7JhOhTSh7bjmW4nO4ULhCA5XBHy3VwJt9O9XiaYj1LyI-VB83d5w8LQFRHm7o-fxYyAt6d2-PHRLIjh5oJrW1j-7k4dgorQiwDP6QJpiOVegi5ebgEs49Skdc71mTFIgSEzscmWAZfgQq0z0Mc3c28SjPHMCeVJg__",
    "https://s3-alpha-sig.figma.com/img/4c67/ce00/ac15639edf234f9874c2f9524b8935ca?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eNaiwACltA2vKYchUaNt~b65B9LoD1cxxRbu-Do9Vf0zKETWSWEIoZAEnUCrZboTx6qzUJ005VuElhbtAJrF~tvkg8ts7svA~mVYRXI5ttbBHPhYabz7a8JAcZXcDicQ-r1IWWtBS21zibwRTAMPRa1TglApkWIOZ4~XgM0mvCZxyX1C4kknujEd9nJ~bFKXAm9Ujf0Xn7IBruyx5ZajUpQnLOz2D7~YGbAThU19ecnXzGEOxxXpAfi-hO4~WbdnmFudJHXnR0HSSuq22qiNqC5uV7DzQ8T4wsRlAVON9gG0CZ2Zlo0RuMet2k9Ey0qxiZvmgKlUIbk4hwzE2bBrwA__",
    "https://s3-alpha-sig.figma.com/img/a80c/54c6/1806eac0c163f773052b30b4ff79f14f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Erd5kavyiVfvXJE9-H9eK66RMO9sJEQZC6gHvXa1WSVGB3VhTPRl464~QFMCSJwrSl4pJl1U45vAJT5bJEEuNxq2Rb2ELDlXAQhWP1yrkU98fiuLOAJt3D4ihbtC6rve~uWxnYarkbH6rXjltu-mazjJFylsu~WvOCzrouGnEEPaf7XLLNovHHGO-E3jWjuJIj481hrVirDRrdCWHUHq6UXhHo8gfaPEiE97zW7TYzRPf3uQFxYu-gJGTddPzEPYzedZsDpHemrC3nMYzwhDL3cikAewHBCehUr5O5D3Sr0lBJTAeqT3tlgxQuKMAkQqE1qX~BEK2WM~RRuSvfiSUQ__",
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