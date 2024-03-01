import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { useNavigate } from 'react-router-dom';
export default function PaymentInputs() {

const mynavigate=useNavigate();

const paymentdone=()=>{
mynavigate("../done")
}


const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();
return (
     <>
    <div className="paymentbycard">
    <img className="" width="390px" height="200px" src="..\images\cards.jpg" />
    <label className="">
    Name  : <input className="payname" required="true" placeholder='Cardholder Name'/></label> <br/>
    <label className="">
  card No: <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper></label>
    <button onClick={paymentdone} className="cpbtn">Make Payment</button>
    </div></>
     );
}