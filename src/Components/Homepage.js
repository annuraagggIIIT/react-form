import react from 'react';

const Homepage = () => {
    return (
        <>  
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
          <div className="flex items-center  m-4 uppercase text-yellow-500 font-semibold align-middle pt-[100px] justify-center bg-black">
                <h1 className='flex justify-center  items-top hover:text-cyan-400
            '>Image Carousel</h1>
          </div>
          <div className="pt-[120px]">
          <div className="flex items-center align-middle justify-center border-t-2  border-black">
                    <h4>Content</h4>
          </div>
          </div>
          <div className="pt-[120px]">
          <div className="flex border-2 bg-blue-600 my-2 uppercase w-full h-[30px] items-center align-middle justify-center">
            <button className="text-white uppercase font-semibold">Footer</button>
          </div>
          </div>
    
        </>
    )
}

export default Homepage;