import Footer from "./Footer";
import { Link, Outlet } from 'react-router-dom';
const Product=()=>{
  
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
<Footer/>
    </>)
}
export default  Product;