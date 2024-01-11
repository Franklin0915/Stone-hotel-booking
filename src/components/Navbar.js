import React from 'react'
import './Navbar.css'

function Navbar(){
    
    return(
        <div className=' main flex'>
            <div className='brandname'>
                <aside>KOBBYstone</aside>
                <aside className="hot"><small>HOTEL BOOKING</small></aside>
                 </div>
            <div className='nav-items'> 
            <div className='nav-spacing'>HOME</div>
            <div className='nav-spacing'>ABOUT</div>
            <div className='nav-spacing'>ROOMS</div>
            <div className='nav-spacing'>RESTO&BAR</div>
            <div className='nav-spacing'>CONTACT</div>
            <div className='nav-spacing signup'><a href='signIn'>SIGN IN</a></div>
            
            </div>
        </div>
    )
}
export default Navbar