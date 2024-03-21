
import Footer from "./Footer";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import ProductData from "./ProductData";
import {  useDispatch, useSelector } from "react-redux";
import { addData } from "./ProductSlice";
import { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

import { useEffect } from "react";
import { Link } from "react-router-dom";
const Search=()=>{

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  var myStatus =false; 
const [myproduct,setmyproduct]=useState("")
  console.log(myproduct)
 
   const show=useSelector((key)=>key.mycart.cart);
    console.log(show);
    const dis=useDispatch();
    const dataAdd=(id,name,price,image,power,rating,)=>{
      const data={id:id,name:name,price:price,image:image,power:power,rating:rating,Quantity:"1"};
      dis(addData(data))
      }
      const DisplayProduct=(e)=>{
        setmyproduct(e.target.value);
      }
    const ans=ProductData.map((key)=>
    {
        let mystr=key.name;
        let status=mystr.toLocaleLowerCase().includes(myproduct.toLocaleLowerCase());
        console.log(status)
        if (status)
        {  myStatus=true;

         return(<>
            <div className="produccard">
            <div>
            <img data-aos="zoom-in" height="190px" width="200px" alt="coming" src={key.image} />
                <h3>{key.name}</h3><p>Ditail  : {key.power}</p>
                <div id="rating">
                <p> Rating : {key.rating} <MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarOutline/><MdOutlineStarOutline/></p>
                <p>Price :  ₹ {key.price}</p> </div>            
                <button className="" onClick={()=>{dataAdd(key.id,key.name,key.price,key.image,key.power,key.rating)}} >Add To Card</button>
                </div>
                </div>
                    </>)
        }           
      })
       

    return(<>
  <div className="productrange">
    <h1 className="">Search your product </h1>
    <label>
    Enter product name : <input className="" value={myproduct} onChange={DisplayProduct}  /> 

    </label>
    </div>
<div data-aos="fade-left" className="allcard">
{ans}
</div> 
{myStatus?"":<h1>data not found!!</h1>}


<div  data-aos="fade-up-left"  className="bulk">
  <div className=""><img className="" src="..\images\Bulk-Order.png" /> </div>
  <div className="bulk2">
<h1 className="">Bulk Orders</h1>
<p>We take bulk orders of our products too, for all your occasions like Birthday Parties, Marriages, Corporate Events, or any gatherings. Please contact us at the kapilaorganic.com</p>
 <button className="buttonmore"><Link to="/con">Order New<RiArrowDropRightLine /></Link></button> 
 </div>


</div>
<Footer/>
    </>)
}
export default Search