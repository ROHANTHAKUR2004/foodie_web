import { useEffect, useState } from "react";


const TextDisplay = () => {


  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prevToggle => !prevToggle); 
    }, 4000);

    return () => clearInterval(interval); 
  }, []);

  
  return (
    <>
    <div className='bg-white h-[60vh]  flex justify-center'>
          <div className='mt-60 text-4xl ml-12 font-semibold text-gray-300 '>
              Superfast
              </div>
         <div className='mt-36  text-3xl font-semibold text-gray-600'>
              Authentic
              <div className='text-5xl p-4 font-semibold text-red-400 '>
              {toggle ? 'Paneer' : ''}
                  </div>
         </div>
         
          <div className=' flex d-flex text-7xl items-center font-semibold mt-14 text-red-600'>
                देसी  Meals
                <div className='mt-28 text-4xl font-semibold text-red-700'>
                {toggle ? 'Chicken Ticka' : ''}
              </div> 
              <div className='text-3xl  font-semibold text-gray-400 mt-48 '>
               All-in-1-Meal
               </div>  
          </div> 
          
              
    </div>

    
     </> 
  );

};







export default TextDisplay;

