import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function UPI() {

const mynavigate=useNavigate();

const paymentdone=()=>{
mynavigate("../done")
}
return (
     <>
    <div className="paymentbycard">
    <img className="coming" src="..\images\Upi.webp" />
    <label>Enter upi id  <input className="" /></label>

    <button onClick={paymentdone} className="cpbtn">Make Payment</button>
    </div></>
     );
}