import React from 'react'

const Form = () => {
    return (
        <> <div className='bg-red-900 h-screen'>
           <div className=' border text-yellow-500 font-bold border-black bg-black'>
           
                <h1>FORM-1</h1>
            </div>
            <div>

                <div className=' flex justify-center pt-[50px] align-middle items-center uppercase  '>
                <form className=' bg-yellow-700' >
                        <div >
                            <label className=' flex justify-start  font-semibold border-black'>enter your name:</label>
                            <div className=' flex justify-start  '>
                                <input type="text" className='m-2 border border-black' required />
                            </div>
                            
                        </div>
                        <div>                       
                        <label className=' flex justify-start  font-semibold '>select image:</label>
                           <div className=' flex justify-start  border border-black p-11 bg-yellow-700 '>
                                <input type="file" />
                            </div>
                        </div>
                        <div>
                        <label className=' flex  font-semibold  '>
                            description:
                            </label>
                            <div className=' flex justify-start font-semibold'>
                                <input type="text" className='m-2 border border-black'
                                required bg-blue-400/>
                            </div>
                        </div>
                        <div>
                            <div className='font-semibold '>

                            
                        <input type="SUBMIT" className='m-2 border uppercase  border-black bg-pink-400'  />
                        </div>

                        </div>


                    </form>
                    
                </div>
            </div>
            </div>
        </>
    )
}

export default Form;
