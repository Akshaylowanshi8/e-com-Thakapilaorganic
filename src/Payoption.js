import { useState } from "react";
import PaymentInputs from "./paymehod/CardPaymint"
import Upi from './paymehod/UPI';
import COD from "./paymehod/Cod";
import NetB from "./paymehod/Netbanking";


const Payoption=()=>{
 var  myans="";
  const [pmethod ,setpmethod ] =useState("")
  const mypay=(e)=>{
  let myval=e.target.value;
  setpmethod(myval);
  console.log(myval)
}
switch(pmethod)
{
  case "card":
  myans= <PaymentInputs/>
  break;
  case "upi":
  myans=<Upi/>
  break;
  case "cod":
    myans= <COD/>
    break;
    case "netbanking":
    myans=<NetB/>
    break;
};

   return(<>
<p className="fflex">

<div className="col">

  <h3 className="title">Billing Address</h3>
  <div className="flex">
  <div className="inputBox">
    <label htmlFor="name">Full Name:</label>
    <input
      type="text"
      id="name"
      placeholder="Enter your full name"
      required=""
    />
  </div>
  <div className="inputBox">
    <label htmlFor="email">Email:</label>
    <input
      type="text"
      id="email"
      placeholder="Enter email address"
      required=""
    />
  </div>
  <div className="inputBox">
    <label htmlFor="address">Address:</label>
    <input type="text" id="address" placeholder="Enter address" required="" />
  </div>
  </div>
  <div className="flex">
  <div className="inputBox">
    <label htmlFor="city">City:</label>
    <input type="text" id="city" placeholder="Enter city" required="" />
  </div>
  
    <div className="inputBox">
      <label htmlFor="state">State:</label>
      <input type="text" id="state" placeholder="Enter state" required="" />
    </div>
    <div className="inputBox">
      <label htmlFor="zip">Zip Code:</label>
      <input type="number" id="zip" placeholder="123 456" required="" />
    </div>
    </div>
</div>
<div className="ffl">
<div className="payment-form">
  <h2>Select Payment Method</h2>
  <form >
    <label>
      <input type="radio" name="payment_method" value="cod" onChange={mypay} />
      Cash on Delivery (COD)
    </label>
    <label>
      <input type="radio" name="payment_method" value="card" onClick={mypay}  />
      Credit Card
    </label>
     <label>
      <input type="radio" name="payment_method" value="upi" onClick={mypay}  />
      UPI
    </label>
    <label>
      <input type="radio" name="payment_method" value="netbanking" onClick={mypay} />
      Netbanking
    </label>
    </form>

</div> 

</div>
<div className="">{myans}</div> 
</p>


    </>)
}
export default Payoption;






