import React from 'react'
import "./form.css";

const Form = () => {
    return (
        <>
            <div class="s1">
            
                <h1>Form-1</h1>
                <form class="form1">
                    <div class ="name">
                             <label >Enter your name:</label>
                             <input type="text" required  class="inputt"/>
                        
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
                                 <input type="text" class="inputt"/>
                             </div>
                    </div>
                    <div >
                             
 
                             
                         <input type="SUBMIT" class="sub" />
                         
 
                         </div>
                </form>
            </div>
        </>
    )
}

export default Form;