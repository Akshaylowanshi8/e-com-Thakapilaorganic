import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer=()=>{

    return(
<> 
<>
  <footer id="foot">
    <div id="h5">
      <p>
        <span> ADDRESS:</span>
        Building No. 301, Ground Floor, Opposite Terminal-3,  Airport,bhopal,
        462046
      </p>
      <p>
        <span>EMAIL:</span>
        support@akshaylovanshi8@gmail.co.in
        <span>CUSTOMER SUPPORT WORKING DAYS / HOURS:</span>
        Mon - Fri / 9:00 - 18:00 (We are closed on public holidays)
      </p>
      <p id="mob"> (+91) 8100000888</p>
      <p />
      <ul id="log">
        <li>
          <FaInstagram/>
        </li>
        <li>
          <FaSquareTwitter/>
        </li>
        <li>
          <FaYoutube/>
        </li>
        <li>
          <FaLinkedin/>
        </li>
      </ul>
    </div>
    <div>
      <div id="ful">
        <p>
          <span>SUBSCRIBE US </span>
          <br />
          Get all the information on Offers. Sign up for the newsletter.
        </p>
        <input type="text" placeholder="Enter your email" />
      </div>
      <hr />
      <br />
      <div id="ful">
        <ul>
          <li>CATEGORIES</li>
          <li>Liquor</li>
          <li>Makeup &amp; Skin Care </li>
          <li>Perfumes</li>
          <li>Combo Offers </li>
          <li>Travel Retail Exclusives</li>
        </ul>
        <ul>
          <li>QUICK LINKS</li>
          <li> Shop &amp; Collect</li>
          <li>Duty-Free Allowance</li>
          <li> About Us</li>
          <li>Press Release</li>
          <li>Corporate Policies</li>
        </ul>
        <ul>
          <li>CUSTOMER SERVICE</li>
          <li> Help &amp; FAQs</li>
          <li>Cancellation &amp; Refunds</li>
          <li>Privacy Policy</li>
          <li> Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </footer>
</>
<div className="Footerbottm">
© Akshaylowanshi. All Rights Reserved. Website Designed & Developed by Web Biz  <br/>

Privacy Policy | Terms & Conditions | FAQ</div>
</>
    )
}
export default Footer;

