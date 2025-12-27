import React from 'react'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Login() {
      const [Email,setemail]=React.useState('');
          const [Password,setpassword]=React.useState('');
    const apicall = async()=>{
    try{
      const connect = await axios.post("http://localhost:3000/login",{
      email:Email,
      password:Password
           })
      alert(connect.data.message)
    }
    catch(error){
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
    

       }
  return (
    <>
    
    <div className='h-screen w-screen flex justify-center items-center bg-[#112117] relative'>
    <div className='bg-[#31e87a] rounded-full h-10 w-10 absolute left-15 top-15 flex justify-center items-center'>
      <Link to='/'> <IoIosHome /></Link>  
    </div>
    {/* <div className='bg-[#31e87a] rounded-full h-10 w-10 absolute left-15 top-20'></div> */}
   <div className='h-fit w-[40vw]  rounded-lg shadow-lg shadow-[#31e87a] bg-[#0b1911]'>
    <h1 className='text-4xl font-bold text-center pt-4 text-white'>Login</h1>
    <form className='flex flex-col text-white p-10  space-y-4 mt-5'>
      <label htmlFor="email" className='ml-8 text-2xl ' > Enter Your Email</label>
         <input type="email" placeholder='Email' className='border-2 p-2 w-3/4  text-shadow-white self-center' value={Email}  onChange={(e)=>setemail(e.target.value)} />
        <label htmlFor="password" className=' ml-8 text-2xl' > Enter Your Password</label>
        <input type="password" placeholder='Password' className='border-2 p-2 w-3/4  text-shadow-white self-center' value={Password}  onChange={(e)=>setpassword(e.target.value)} />
     <input type="button"  className='bg-[#31e87a] text-white px-4 py-2 rounded self-center cursor-pointer' value='Login' onClick={apicall}/>

     <h1 className='text-center'>Want to Create new account<Link to='/signup' className='text-[#31e87a]'> click here</Link></h1>
    </form>
   </div>
   </div>
    </>
  )
}

export default Login ;