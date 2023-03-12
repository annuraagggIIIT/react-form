import react from 'react';
import Nav from './Nav';
const Homepage = () => {
    return ( 
        <>  
        <Nav/>
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