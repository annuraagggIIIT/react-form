import react from 'react'
import "./List.css";

const List = () => {
    return (
        <>
            <div class="list-heading">
             <h1>List </h1>
            </div>
            <div class="list-img">
            <div class="list-1">
            <div>
                    <img src="./images/one.jpg" />
                    <h2>One</h2>
            </div>
            <div>
                    <img src="./images/two.jfif" />
                    <h2>Two</h2>
                </div>
                <div>
                    <img src="./images/three.jpg" />
                    <h2>Three</h2>
            </div>
            </div>
            <div class="list-2">
            <div>
                    <img src="./images/three.jpg" />
                    <h2>Three</h2>
            </div> <div>
                    <img src="./images/one.jpg" />
                    <h2 color='white'>One</h2>
                    </div>
                    <div>
                    <img src="./images/two.jfif" />
                    <h2>Two</h2>
            </div>
                </div>
                </div>
            
                        

                    
                                
                            
                    
        </>
    )
}

export default List;