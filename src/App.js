import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Shop from './Shop';
import Buyknow from './Buyknow';
import Done from './Done';
import Search from './Search.js';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Food from './products/Food.js';
import LifeNeed from './products/LifeNeed.js';
import Allproduct from './products/Allprodutc.js';
function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
 })
  return (
     <>
     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={ <Home /> } />
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='product' element={<Product/>}>
    <Route index element={ <Allproduct/> } />
    <Route path='Food' element={<Food/>}/>
        <Route path='LifeNeed' element={<LifeNeed/>}/>
        <Route path='All' element={<Allproduct/>}/>

    </Route>
    <Route path='ser' element={<Search/>}/>
    <Route path='con' element={<Contact/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path='buyknow' element={<Buyknow/>}/>
    <Route path='done' element={<Done/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
