import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Cartimpt } from './ProductSlice';
import { useNavigate } from 'react-router-dom';



const Done=()=>{
    const mynavigate=useNavigate();
 
const paymentdone=()=>{
mynavigate("../home")
}



    const dishpa=useDispatch();
     const [content ,setcontent]=useState(true)
        useEffect(()=>{
             
            setTimeout(()=>{
          setcontent(false);
          dishpa(Cartimpt());
          
            },3000)},[])
    
     
    return(
        <>
        <div className="donepage">
       {content?(
        <div className="">
    
            <h1 className="">your payment is being processing... </h1>
        </div>
    
    
    
    ):( 
     <h1 className="h">
        Thanks for purchasing our product  we will provide your product within 5 to 7 working day   

        <br/><button className=" " onClick={paymentdone} >shop Again</button>
       </h1> 
       
    ) }
    </div>
    </>
    )

}
export default Done;