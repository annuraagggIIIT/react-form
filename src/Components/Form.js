import React, { useState } from 'react'
import "./form.css";
import data from './data.json'

const Form = () => {
    const [name, setName] = useState('')
    const [aged, setdescription] = useState('')
    const nam = () => {
        setName(data.Name)
        
    }
    const description = () => {
        setdescription(data.description)
        
    }
    return (
        <>
            <div class="s1">
            
                <h1>Form-1</h1>
                <form class="form1">
                    <div class ="name">
                             <label >Enter your name:</label>
                             <input value={name} type="text" required  class="inputt"/>
                        
                    </div>
                    
                    <div class ="name">                       
                         <label >Select Image:</label>
                            <div>
                                 <input type="file" class="inputt" />
                             </div>
                    </div>
                    <div class="name">
                         <label>Description:</label>
                        <div>
                            
                                 <input value={aged} type="text" class="inputt"/>
                             </div>
                    </div>
                    <div >
                             
 
                             
                         <input type="SUBMIT" class="sub" />
                         
 
                         </div>
                </form>
                <div class="kk">
                    <button onClick={() => nam()} class="ff">Name </button>
                    <button onClick={() => description()} class="ff">Description </button>
                </div>
            </div>
        </>
    )
}

export default Form;
