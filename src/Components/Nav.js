import React from "react";
import "./nav.css";

function Nav()
{
    return (
        
      <>
        <div class="navbar">
          <div class='nav-1'>
            <h1>Logo</h1>
          </div>
          <div class="nav-2">
            <a href="/list">List</a>
            <a href="/Form">Form-1</a>
            <a>Form-2</a>
            <a>Register</a>
          </div>
        </div>
      </>
    );
}

export default Nav;