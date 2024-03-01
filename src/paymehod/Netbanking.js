import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { useNavigate } from 'react-router-dom';
export default function COD() {

const mynavigate=useNavigate();

const paymentdone=()=>{
mynavigate("../done")
}

return (
     <>
    <div className="paymentbycard">
    <label className="">
    Name  : <input className="payname" required="true" placeholder='Cardholder Name'/></label> <br/>
  
    <button onClick={paymentdone} className="cpbtn">Make Payment</button>
    </div></>
     );