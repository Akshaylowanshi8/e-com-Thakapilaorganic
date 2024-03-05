import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import ProductData from "../ProductData";
import {  useDispatch, useSelector } from "react-redux";
import { addData } from "../ProductSlice";
const Allproduct=()=>{
    const show=useSelector((key)=>key.mycart.cart);
    console.log(show);
    const dis=useDispatch();
    const dataAdd=(id,name,price,image,power,rating,)=>{
      const data={id:id,name:name,price:price,image:image,power:power,rating:rating,Quantity:"1"};
      dis(addData(data))
      }
      const ans=ProductData.map((key)=>{
        return(<>
            <div className="produccard">
            <div>
            <img data-aos="zoom-in" height="190px" width="200px" alt="coming" src={key.image} />
                <h3>{key.name}</h3><p>Ditail   : {key.power}</p>
                <div id="rating">
                <p> Rating : {key.rating} <MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarOutline/><MdOutlineStarOutline/></p>
                <p>Price :₹ {key.price}</p> </div>            
                <button className="" onClick={()=>{dataAdd(key.id,key.name,key.price,key.image,key.power,key.rating)}} >Add To Card</button>
                </div>
                </div>
                    </>)
                    
                })
    
    return(<>

<div className="">
<h1 className="center">Our All product</h1>

    
<div data-aos="fade-left" className="allcard">
{ans}
</div>
</div>
    </>)
}

export default Allproduct;