import React from 'react';
import logo from '../images/logo.png'



const Navbar = () =>{



    return(
        <>

    <div class="navbar">
        <div class="logo">
            <img src={logo} width="70px" alt="Shopping cart logo"/>
          </div>
        <div class="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>New arrival</li>
                <li>Products</li>
            </ul>

        </div>

    </div>

        </>
    )

}


export default Navbar;