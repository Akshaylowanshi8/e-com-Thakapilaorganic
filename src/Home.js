import React from "react";
import { Link} from 'react-router-dom';
import Footer from "./Footer";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import ProductData from "./ProductData";
import { RiArrowDropRightLine } from "react-icons/ri";
import {  useDispatch, useSelector } from "react-redux";
import { addData } from "./ProductSlice";
import {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Home=()=> {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

// ============================================

const show=useSelector((key)=>key.mycart.cart);
console.log(show);
const dis=useDispatch();
const dataAdd=(id,name,price,image,power,rating,)=>{
  const data={id:id,name:name,price:price,image:image,power:power,rating:rating,Quantity:"1"};
  dis(addData(data))
  }
  const ans=ProductData.map((key)=>{
    return(
    <>

    <div className="produccard">
        <div>
        <img height="190px" width="200px" alt="coming" src={key.image} />
            <h3>{key.name}</h3><p id="detail">Detail : {key.power}</p>
            <div id="rating">
            <p> Rating : {key.rating} <MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarOutline/><MdOutlineStarOutline/></p>
            <p>Price :  ₹{key.price}</p> </div>            
            <button className="" onClick={()=>{dataAdd(key.id,key.name,key.price,key.image,key.power,key.rating)}} >Add To Card</button>
            </div>
            </div>
                </>)
            })
            


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <img className="" alt="coming" height="400px" width="100%" src="..\images\slider1.jpg" /></SwiperSlide>
        <SwiperSlide><img className="" alt="coming" height="400px" width="100%" src="..\images\slider2.jpg" /></SwiperSlide>
        <SwiperSlide> <img className=""  alt="coming"  height="400px" width="100%" src="..\images\slider3.jpg" /></SwiperSlide>
        <SwiperSlide> <img className=""  alt="coming"  height="400px" width="100%" src="..\images\slider4.jpg" /></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

    
    {/* ======================================================================== */}
<div  className="con1">
   <div  className="con11">
    <p>
 
   <h1 > TURNING BIG IDEAS INTO GREAT PRODUCT</h1>
   <p>
We work at the forefront of innovation and technology to take products from an idea all the way to the end consumer.</p>
<p>
At the heart of our farming practices are our Cows.
We have Pure breed Native Gir Cows at the farm for their dung and urine - the only two things we use as inputs for our soil. The milk has always been a by-product.
</p>
<p>The ancient system of farming that still thrives in our villages is nothing like it. Here, most farmers will not even eat their food if their cows fall ill Don't we love our children? And still don't we want them to go to school, work hard and earn a living on their own? All of us have our roles to play. In the ancient rural system of farming, the Cow is our mother. She nourishes and sustains life. The farmer depends on her. He looks after, loves and protects his cattle. They live together as ONE family!

</p>
 </p>
     <button className="buttonmore"><Link to="/about">Know More<RiArrowDropRightLine /></Link></button> 
    </div> 
  <img className="" width="450px" height="400px" alt="comeing" src="..\images\cow1.webp" />

</div>
<div className="range">
<div className="productrange">
<h2> MOST LOVED LEGENDS 
</h2>
<img className=""  alt="coming"  src="https://www.indianelectric.com/images/title-icon-white.webp" />
</div>
<div className="allcard">{ans}</div>

</div>

<Footer/>
 </> );
}

export default Home;