import { useDispatch, useSelector } from "react-redux";
import { CartRemove } from "./ProductSlice";
import { CiCircleMinus } from "react-icons/ci"
import { CiCirclePlus } from "react-icons/ci";
import { proQtyInc, proQtyDec } from "./ProductSlice";
import { Link,  } from 'react-router-dom';
import { useEffect } from "react";
const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onclc=()=>{
if(netAmount===0)
{ window.location.reload();
  alert("please buy sum products")

  

}

}
 let netAmount=0;
const show=useSelector((key)=>key.mycart.cart);
const dish=useDispatch();

const remove=(myid)=>{
dish(CartRemove(myid));
}
const handinc=(id)=>{
  dish(proQtyInc(id));
}
const handdec=(id)=>{
  dish(proQtyDec(id));
}

for(let i=0;i<show.length;i++){
  netAmount+=show[i].Quantity*show[i].price;
 }
  const ans=show.map((key)=>{
return(
<>
<tr>
<img height="100px" width="120" alt="coming" src={key.image} />
  <td>{key.name}</td>
  <td>{key.rating}</td>
  <td>{key.power}</td>
  <td>{key.price}</td>
  <td> < CiCircleMinus  onClick={()=>handdec(key.id)} cursor="pointer"/> 

  {key.Quantity} 

  <CiCirclePlus onClick={()=>handinc(key.id)}/> </td>
  <td>{key.Quantity*key.price}</td>
  <td><button onClick={()=>{remove(key.id)}}>remove</button></td>
</tr>
</>
)
}) 
return (
    <>
       <h1 style={{display:"grid", justifyContent:"center"}}>Product Bag</h1>
       <hr size="2" color='red'/>
        <table width="90%" align='center' className='rowoheading-1'>
          <tr className='bor'>
            <td >Image</td>
            <td >Product Name</td>
            <td>Product rating</td>
            <td>Detail</td>  
            <td>Product Price</td>
            <td>Quantity</td>
            <td>total Amount </td>
            <td>Remove Product</td>
            </tr>
          {ans}
          </table>
          <hr size="2" color='red'/>
       <div   className='netAmount'><p>Total Product : {show.length}</p>  Total Amount :{netAmount}
          

          
         </div> 
      

        <div  className="buy"><Link to="/buyknow" onClick={()=>onclc()}>Buy Know</Link></div>
      
    </>
  )
}

export default Shop;
