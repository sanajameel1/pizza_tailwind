import React from 'react';
import { GiFullPizza } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";




export default function Navbar() {
    return (
        <div>
            <div className="grid xl:grid-cols-1 grid-cols-1">
                <div className="p-5">
                    <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-grey-900">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-items-center items-center gap-2">
                                {/*logo pizza*/}
                                <GiFullPizza className="w-6 h-6 text-yellow-400 hover:text-cyan-300" />

                                {/*search icon*/}
                                <div style={{ position: 'relative' }}>
                                    <input className="rounded-3xl py-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                                
                                     placeholder="Search for your favourite pizza form menu." />
                                    <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                                </div>
                                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-6">
          <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='http://localhost:3000'>Home</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='http://localhost:3000/reservation'>Reservation</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hovescale-110r:" href='http://localhost:3000/menu'>Menu</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='http://localhost:3000/offer'>Offer</a>
      
             
          </nav>
                            </div>
                        <div className="flex justify-center items-center gap-2">
                                <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
                                <p className=" text-sm text-white hidden lg:block md:block"> Order now and get it with
                                    <span className="text-amber-400"> 15 minutes!</span>
                                </p>

                                {/*cart icon*/}
                                <FaCartShopping className="w-8 h-8  text sky-400 rounded-full ring-2 p-1 relative text-cyan-400 haver:text-amber-400" />



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
