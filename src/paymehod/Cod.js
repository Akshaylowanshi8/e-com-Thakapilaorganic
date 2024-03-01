import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function COD() {

const mynavigate=useNavigate();

const paymentdone=()=>{
mynavigate("../done")
}

return (
     <>
    <div className="paymentbycard">
   <img className="" width="400px" height="300px" src="..\images\cod.jpg" />
    <button onClick={paymentdone} className="cpbtn">Make Payment</button>
    </div></>
     );
}