import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function NetB() {

const mynavigate=useNavigate();

const paymentdone=()=>{
mynavigate("../done")
}

return (
     <>
    <div className="paymentbycard">
    <label for="cars">select your bank :

<select id="Banks">
  <option value="HDFC Bank">HDFC Bank</option>
  <option value="State Bank of India (SBI)">State Bank of India (SBI)</option>
  <option value="ICICI Bank">ICICI Bank</option>
  <option value="Axis Bank">Axis Bank</option>
  <option value="State Ban">Kotak Mahindra Bank</option>
  <option value="IndusInd Bank">IndusInd Bank</option>
  <option value="Yes Bank">Yes Bank</option>
</select></label>
    <button onClick={paymentdone} className="cpbtn">Make Payment</button>
    </div></>
     );

}