import Footer from "./Footer";
import { useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import { RiArrowDropRightLine } from "react-icons/ri";

const Product=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return(<>
    <div  className="prohead">
    <div className="abcon">
 <h1 data-aos="fade-right" className="">Products</h1>
<p>Our healthy, creamy and delicious dairy products will make everything better. With our assurance of quality and purity, you can confidently add these to your diet and boost your overall wellness!</p>
 </div>
<img data-aos="fade-left" className="" height="400px" src="..\images\Sourcing-Milk.png" />
</div>
{/* ............................................................... */}
<div className="procategry">
<div  data-aos="fade-right" className="">
<Link to="All"> AllProduct </Link>
  </div>
<div  data-aos="fade-right" className="">
<Link to="Food"> Food </Link>
  </div>
  <div  data-aos="fade-right" className="">
<Link to="LifeNeed"> LifeNeed </Link>
  </div>
</div>
<div data-aos="fade-left" className="allcard">
<Outlet/>
</div>



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
export default  Product;