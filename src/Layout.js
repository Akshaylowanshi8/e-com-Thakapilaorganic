import { Link, Outlet } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
 const Layout=()=>{
   const show=useSelector((key)=>key.mycart.cart);
   console.log(show.length);
   
   return(<>
<div className="Topnav">
    <p><FaRegThumbsUp /> NAME THE MOTOR, YOU WILL GET IT!</p>
   <p><IoCallOutline /> Call Us at 020-24473038  </p>
   <p><MdEmail />Sales@Thekapilaorganic.com</p>
   </div>

<div className="header">
 <div className="">
 
   <img className="" width="200px" height="60px"  alt="coming" src="..\images\lago.png" />
</div>
<div className="navlist">
   <Link to="home">home</Link>
   <Link to="about">about us<RiArrowDropDownLine /></Link>
   <Link to="product">products<RiArrowDropDownLine /></Link>
   <Link to="ser">search<RiArrowDropDownLine /></Link>
   <Link to="con">contact us</Link>
   <Link to="shop" id='addtocard'>Shop  <span id='count'>{show.length}</span></Link>
   <Link to="done"></Link>

  </div>
  </div>

  
<Outlet/>


    </>)
 }

 export default Layout;