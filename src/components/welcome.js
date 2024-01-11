import React from 'react'
import './welcome.css'

function WelcomeEngine(){
    const[showSubNav,setShowSubNav]= React.useState(false)
    const background ={
        backgroundImage: 'url(https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        width: '100vw', 
    }
    function Logout(){
        window.location.href="home"
    }
    const display = {
        display: showSubNav ? "block":"none"
    }
    function CheckDisplay(){
        setShowSubNav(true)
    }
    function CloseSubNav(){
        setShowSubNav(false)
    }

    return(
        <div style={background}className='welcome-page'>
            <div className='nav-bar'>
                <div className='brandname'>
                    <aside>KOBBYstone</aside>
                    <aside className="hot"><small>HOTEL BOOKING</small></aside>
                 </div>
                 <div className='nav-section'><ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>ROOMS</li>
                    <li>RESTO & BAR</li>
                    <li>CONTACT</li>
                    <li><i onMouseEnter={CheckDisplay}  className="fa-solid fa-user"></i></li>
                    {showSubNav && < ul onMouseEnter={CheckDisplay} onMouseLeave={CloseSubNav} style={display} id='sub-nav'>
                        <li>My profile</li>
                        <li>Take a tour</li>
                        <li>Booked hotels</li>
                        <li onClick={Logout}><i className="fa-solid fa-right-from-bracket"></i> <p>Logout</p></li>
                    </ul>} 
                    </ul>
                    
                </div>

            </div>
         

        </div>
    )
}
export default WelcomeEngine