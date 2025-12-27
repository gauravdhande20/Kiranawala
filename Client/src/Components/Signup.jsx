import React, { useEffect } from 'react'
import axios from 'axios'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';



function Signup() {
  //  for loding
  const [loading, setLoading] = React.useState(false);    
    const [Name,setname]=React.useState('');
      const [Email,setemail]=React.useState('');
        const [Password,setpassword]=React.useState('');

// const axios = require('axios');

  const apicall = async()=>{
    try{
       setLoading(true);
      const connect = await axios.post("http://localhost:3000/signup",{
      name:Name,
      email:Email,
      password:Password
    })
      alert(connect.data.message); 
    }
    catch (error) {
    if (error.response) {
      // backend error
      alert(error.response.data.message);
    } else {
      // network error
      alert("Something went wrong");
    }
   
  }
   finally {
    setLoading(false); // stop processing
  }
};
   

// useEffect(,[])

  return (
   <>
  <div className='h-screen w-screen flex justify-center items-center bg-[#112117]'>
     <div className='bg-[#31e87a] rounded-full h-10 w-10 absolute left-15 top-8 flex justify-center items-center'>
          <Link to="/"><IoIosHome /></Link> 
        </div>
   <div className='h-fit w-[40vw]  rounded-lg shadow-lg shadow-[#31e87a] bg-[#0b1911]'>
    <h1 className='text-4xl font-bold text-center pt-4 text-white'>Signup</h1>
    <form className='flex flex-col text-white p-10  space-y-4 mt-5'>
        <label htmlFor="username" className='ml-8 text-2xl ' > Enter Your  Name</label>
        <input type="text" id='username' placeholder='Username' className='border-2 p-2 w-3/4 text-shadow-white self-center' value={Name} onChange={(e)=>setname(e.target.value)} />
        <label htmlFor="email" className='ml-8 text-2xl ' > Enter Your Email</label>
        <input type="email" placeholder='Email' className='border-2 p-2 w-3/4  text-shadow-white self-center' value={Email}  onChange={(e)=>setemail(e.target.value)} />
        <label htmlFor="password" className=' ml-8 text-2xl' > Enter Your Password</label>
        <input type="password" placeholder='Password' className='border-2 p-2 w-3/4  text-shadow-white self-center' value={Password}  onChange={(e)=>setpassword(e.target.value)} />
    <input
  type="button"
  disabled={loading}
  className={`px-4 py-2 rounded self-center cursor-pointer 
    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#31e87a] text-white'}`}
  onClick={apicall}
  value={loading ? "loding..." : "Signup"}
/>
{loading && (
  <div className="flex justify-center mt-4">
    <div className="w-6 h-6 border-4 border-[#31e87a] border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

     <h1 className='text-center'>if you Already has a account<Link to='/login' className='text-[#31e87a]'> click here</Link></h1>
    </form>
   </div>
   </div>
   </>
  )

}


export default Signup