import React from 'react'
import img1 from '../assets/pngwing.com (16).png'

function Offer() {
  return (
    <>
      <section className='w-screen h-[70vh] bg-[#112117] flex items-center justify-center'>
        <div className="container w-[80%] h-[80%] bg-[#31e87a] rounded-3xl flex">
            <div className='Col1 w-[50%] h-[100%] '>
                <div className="content flex flex-col items-start justify-center h-[100%] pl-20 gap-6">
                    <div className="head text-4xl font-extrabold text-black">Get 50% Off <br />Your First Order</div>
                    <div className="subhead text-lg text-gray-700">Get a 25% discount on your first order! Use code  at checkout. Hurry, offer valid for a limited time only!</div>
                    <button className='w-[150px] h-[50px] bg-black rounded-full text-white font-bold hover:bg-green-200'>Shop Now</button>
                </div>

            </div>
            <div className="Col2 w-[50%] bg-[#2ad16a] h-full flex items-center justify-center">
  <img src={img1} alt="offer" className="w-screen h-full object-cover opacity-30" />

</div>
        </div>
      </section>
    </>
  )
}

export default Offer
