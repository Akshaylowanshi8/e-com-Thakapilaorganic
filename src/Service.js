
import Footer from "./Footer";
import Done from './Done';
import { useEffect } from "react";
 
 const Service=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
        
<Done/>
<Footer/>
        </>
    )
 } 
 export default Service;