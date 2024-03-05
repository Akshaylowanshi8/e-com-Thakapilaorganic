import Footer from "./Footer";
import { Link, Outlet } from 'react-router-dom';
const Product=()=>{
  
    return(<>
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