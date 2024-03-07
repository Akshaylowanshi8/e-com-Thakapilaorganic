import Footer from "./Footer";
import { images } from 'react-payment-inputs/images';
const About=()=>{

 return(<>

 <div className="abcover">
 <div className="abcon">
 <h1 className="" data-aos="fade-right">About us</h1>
<p>The kapila organic Farm was founded in 2013 with a passion to provide every family with healthy and natural dairy products that are free from antibiotics, hormones, preservatives and other harmful adulterants.</p>
 
 </div>

 </div>

{/* ........................................................... */}
<div data-aos="fade-left" className="con1">
   <div className="con11">
    <p>
 
   <h1> TURNING BIG IDEAS INTO GREAT PRODUCT</h1>
   <p>
We work at the forefront of innovation and technology to take products from an idea all the way to the end consumer.</p>
<p>
At the heart of our farming practices are our Cows.
We have Pure breed Native Gir Cows at the farm for their dung and urine - the only two things we use as inputs for our soil. The milk has always been a by-product.
</p>
<p>The ancient system of farming that still thrives in our villages is nothing like it. Here, most farmers will not even eat their food if their cows fall ill Don't we love our children? And still don't we want them to go to school, work hard and earn a living on their own? All of us have our roles to play. In the ancient rural system of farming, the Cow is our mother. She nourishes and sustains life. The farmer depends on her. He looks after, loves and protects his cattle. They live together as ONE family!

</p>
 </p>
    
    </div> 
  <img className="" width="450px" height="400px" alt="comeing" src="..\images\cow1.webp" />

</div>
{/* ......................................................... */}
<div data-aos="fade-right"  className="con1">
<img className="" width="450px" height="400px" style={{borderRadius:"70% 50%"}} alt="comeing" src="..\images\cow2.webp" />

   <div className="con11">
  <h1>NOURISHMENT & SOIL HEALTH</h1>  
   <p>
Every time any of us drink their milk, our physical bodies and it's cells internalise this milk. The waste that our cows flush out of their bodies is what nourishes soil. We think the strongest plan of action is powerless without a connection to this relationship we have with our cows. Many a times people question us on how we treat our cows - most often these questions are coming from a space of utter disbelief and suspicion. Some of these questions are painful to answer. The concept of maltreatment of cattle by the dairy industry was even foreign to our country until it was brought in by the invaders.
 </p>
   </div> 
</div>
{/* ........................founder.............................. */}
<h2 className="fh" data-aos="zoom-out" > OUR FOUNDER</h2>

<div className="prohead">
    <div  data-aos="fade-left"className="abcon">
 <h1 className="">Our story</h1>
<p>We have a vision of setting a new benchmark in the milk industry with superior quality dairy products, a sustainable ecosystem and a thriving relation with our farmers.</p>
 </div>
 <h3><img data-aos="fade-right" className="founimg" height="400px" src="..\images\founder.JPG" /><br/>
        Mr.Kapil Kumar Lowanshi</h3> 
</div>




  



<Footer/>
 </>)   

}
export default About;