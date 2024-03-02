import Footer from "./Footer";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import ProductData from "./ProductData";
import {  useDispatch, useSelector } from "react-redux";
import { addData } from "./ProductSlice";
const Product=()=>{
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
            <img height="190px" width="200px" alt="coming" src={key.image} />
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
<div className="allcard">
{ans}
</div>
<Footer/>
    </>)
}
export default  Product;