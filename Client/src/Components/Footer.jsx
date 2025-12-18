import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import img from '../assets/pngwing.com (15).png'


function Footer() {
    return (
        <>
            <section className='w-scree h-[80vh] bg-[#1b2922]'>

                <div className='Container flex  justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10  border-b-4 border-[#788187] pb-30'>

                    <div className="sectionFirst mt-10 ">
                        <div className="head text-white font-extrabold text-3xl flex items-center gap-4 mb-3"> <img src={img} alt="" className='w-[30px]' />GrocerX</div>
                        <div className='text-[#788187]'>Brining the Farmars Market to Your kitchen. fresh,organic groceries delivered to your doorsteps.
                        </div>
                        <div className='text-white font-extrabold flex gap-4 mt-4 flex-row flex'>
                            <div className='Circle bg-[#29382f] flex w-[35px] h-[35px] rounded-[50%] items-center justify-center '>fb</div>
                            <div className='Circle bg-[#29382f] flex w-[35px] h-[35px] rounded-[50%] items-center justify-center '>tw</div>
                            <div className='Circle bg-[#29382f] flex w-[35px] h-[35px] rounded-[50%] items-center justify-center '>ig</div>
                        </div>

                    </div>

                    
                    <div className="sectionSecond text-white flex flex-col  mt-10"> 
                        <div className="head  text-white font-bold text-1xl">Shop</div>
                        <div className="list text-[#788187] flex flex-col gap-2 mt-4 list-none">
                            <li>All Products</li>
                            <li>FreshProduct</li>
                            <li>Dairy&Eggs</li>
                            <li>Meat&Seafood</li>
                            <li>Beverages</li>
                        </div>
                    </div>


                    <div className="sectionThird text-white flex flex-col  mt-10"> 
                        <div className="head  text-white font-bold text-1xl">Company</div>
                        <div className="list text-[#788187] flex flex-col gap-2 mt-4 list-none">
                            <li>About Us</li>
                            <li>Carrers</li>
                            <li>Our Blogs</li>
                            <li>Sustainability</li>
                            <li>Affiliate Program</li>
                        </div>
                    </div>


                    <div className="sectionFourth text-white flex flex-col  mt-10"> 
                        <div className="head  text-white font-bold text-1xl">Contact</div>
                        <div className="list text-[#788187] flex flex-col gap-2 mt-4 list-none">
                            <li className='flex gap-5 items-center mb-3'><FaLocationDot className='text-[#30e377]' />123 Market Street,Suite 480 Sen Francisec,CA 94103</li>
                            <li className='flex gap-5 items-center mb-3'><FaPhoneAlt className='text-[#30e377]'/>+1 (555) 123-4567</li>
                            <li className='flex gap-5 items-center mb-3'><IoIosMail className='text-[#30e377]' />contact@grocerx.com</li>
                            
                        </div>
                    </div>


                </div>

                <div className="CopyWritw text-center text-[#788187] flex items-center justify-between pl-5 pr-5 mt-6">
                    <div className="f1">© 2024 GrocerX. All rights reserved.</div>
                    <div className="f2 text-[#788187] flex justify-center ">
                        <span className='mr-4'>Privacy Policy</span>
                        <span className='mr-4'>Terms of Service</span>
                        <span className='mr-4'>Cookie Policy</span>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Footer
