import { useState } from 'react';
import { IoLocation } from "react-icons/io5";
import logo from '../../assets/foodlogo.jpg';
import { FaCookieBite } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export default function Navbar(){

 const [input , setinput] = useState("");


  
    return(
        
    <div className="flex flex-col justify-center items-start bg-white">
           <div className='flex items-center'>
             <img className=' ml-12 max-h-16 w-46'
             src={logo}></img>  
             <div className='flex flex-col justify-center'>
                <input
                className='bg-pink text-black w-80 p-2 m-4 border-solid border-2 border-sky-500 '
                type='text'
                placeholder='Enter your Location...'
                onChange={(e) =>{
                    setinput(e.target.value);
                }}
                />    
              </div>  
              <div className='flex items-center'>
              <IoLocation  style={{fontSize:"2rem", color:"black"}}/>
              </div>
             
             
             <div className='flex d-flex ml-[70%] hover:text-pink-600'>
            <span>
             <FaCookieBite  style={{fontSize:"2rem", color:"black"}}/>
             </span>
             <span className='ml-2 items-cente text-2xl font-semibold '>
                Deals
                </span>
            </div>
            

            <div className='flex d-flex ml-8 hover:text-pink-600'>
            <span >
            <FaShoppingCart style={{fontSize:"2rem", color:"black" }}/>
             </span>
             <span className='ml-2 items-cente text-2xl font-semibold '>
                Carts
                </span>
            </div>

            <div className='flex d-flex ml-8 hover:text-pink-600'>
            <span>
            <CgProfile style={{fontSize:"2rem", color:"black"}}/>
             </span>
             <span className='ml-2 items-cente text-2xl font-semibold '>
                SignIn
                </span>

            </div>


            
             
    
            </div>
       </div>
     

    )
}