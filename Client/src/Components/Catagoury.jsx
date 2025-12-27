import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import carddata from './../../public/items.json'
import catagoury from "./../../public/catagoura.json"
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import BuyingCard from './BuyingCard';

function Catagoury() {
  const [slide, setslide]=useState(0)

const next=()=>{
if(slide==8) return false;
setslide(slide+1);
}

const back=()=>{
if (slide==0) return false;

setslide(slide-1);
}
// console.log(catslide)

  return (
    <>
      <div className='h-screen w-screen bg-[#112117] grid grid-rows-2 grid-cols-1'>
        {/* catagoury */}
        <div className='row-span-1'>
          <div className="heading h-[40%] flex flex-col justify-end ">
            <div className='w-[80%] self-center'><h1 className='font-extrabold text-3xl text-amber-50'>Shop by Category</h1></div>
            
            <div className='flex justify-between w-[80%] self-center mt-3'>
              <h1 className='text-amber-50'>Essential items for your daily needs</h1>
              <h1 className='flex items-center gap-4 text-[#31e87a] font-medium'>View All Categories <FaArrowRight/> </h1>
            </div>
          </div>
          <div className="cards h-[60%] grid grid-cols-5 wrap-break-word">
             {
          catagoury.map(rec =>{
            return(
              <>
              <div className='text-amber-50 h-full w-full flex flex-col items-center box-border' key={rec.id}>
                <img src={rec.url} alt=""   className='h-[50%] rounded-full mt-2 hover:'/>
                <h1>{rec.name}</h1>
                <h1>{rec.tagline}</h1>
              </div>
              
              </>
            )
          })
        }
      </div>
        </div>
        <div className=' flex flex-col items-center relative'>
          <div className='h-[20%] flex items-center justify-between w-[80%]'>
            <h1 className='text-2xl font-extrabold text-amber-50 '>Trending This Week </h1>
            <div className='flex items-center gap-5'>
            <BsArrowLeftCircleFill className='text-4xl text-amber-50  hover:text-[#31e87a] cursor-pointer ' onClick={back}/>
            <BsArrowRightCircleFill className='text-4xl text-amber-50 hover:text-[#31e87a] cursor-pointer' onClick={next}/>

          </div>
         
          </div>
          <div className='h-full w-[150vw]  grid grid-cols-8 grid-rows-1 items-center gap-120 absolute top-12 left-10' style={{transform:`translateX(-${slide*10}%)`}}>
           {
            carddata.map(item =>{
              return(
                <BuyingCard  url={item.url} color={item.color} offer={item.offer} off={item.off} Catg={item.Catg} Name={item.Name} quantity={item.quantity} price={item.price} prv_price={item.prv_price}/>
              ) 
            })
           }
           
          </div>
          
       
        </div>
      </div>
    </>
  );
}

export default Catagoury;