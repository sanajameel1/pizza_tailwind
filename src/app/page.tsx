
import React from 'react'
import Navbar from "../app/components/Navbar";
import Carousel from "../app/components/Carousel";
import Progressor from "../app/components/Progressor";
import ProductList from "../app/components/productList";
import Banner from "../app/components/Banner";
import Offer from "../app/components/Offer";
import Card from "../app/components/Card";
import Testimonals from "../app/components/Testimonals";
import Footer from "../app/components/Footer";
import MenuItems from "../app/components/Menuitem"
import Reservation from "../app/components/Reservation";
import Pizza from "../app/components/Pizza";



export default function App() {
  return (
   
  <div className=' text-white bg-gradient-to-r from-black to-gray-700 min-h-screen'>
  <Navbar/>
  <Carousel/>
  <Progressor/>
  <Pizza/>
  <Banner/>
  <ProductList/>
  <MenuItems/>
  <Offer/>
  <Reservation/>
  <Card/>
  <Testimonals/>
  <Footer/>


    </div>
  );
};
