import React from "react";

function Nav()
{
    return (
        <div className="flex p-2 justify-between  text-yellow-600 bg-black animate-bounce font-bold uppercase border-b-4 border-black-900 ">
          <div>
            <h1 className='hover:text-cyan-400'>logo</h1>
            </div>
            <div className="flex gap-11 justify-between  animate-ping-1 ">
                    <div className="md:flex hidden gap-5 justify-between ">
                        <a href='/list' className='hover:text-cyan-400'>
              <h4> list </h4>
                        </a>
                        <a href='/form' className='hover:text-cyan-400'>
              <h4>form 1 </h4>
                        </a>
              <h4 className='hover:text-cyan-400 shadow-md  '>form 2 </h4>   
            </div>
            <div>
              <h1 className='hover:text-cyan-400'> Register</h1>
            </div>
            </div>  
            </div>
    );
}

export default Nav;