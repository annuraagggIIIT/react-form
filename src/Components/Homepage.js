import react from 'react';
import "./homepage.css";

import Nav from './Nav';
<link rel="stylesheet" href="homepage.css"></link>
const Homepage = () => {
    return ( 
        <>  
        <Nav/>
        <main>
        <section class="section-1">
            <h1>Image Carousel</h1>
        </section>
          
        <section class="section-2">
            <h2>Content</h2>
        </section>
      </main>
        <footer>
          <div className="footer">
            <button>Footer</button>
          </div>
          </footer>
    
        </>
    )
}

export default Homepage;