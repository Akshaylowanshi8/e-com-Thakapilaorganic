import { useEffect, useState } from 'react';


const Done=()=>{

    const [content ,setcontent]=useState(true)
        useEffect(()=>{
            setTimeout(()=>{
          setcontent(false)
          
            },3000)
              
          },[])
    
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
       </h1> 
    ) }
    </div>
    </>
    )

}
export default Done;