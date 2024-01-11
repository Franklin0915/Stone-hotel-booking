import React from 'react'
import Navbar from '../components/Navbar'
import Mid from '../components/midContent';
import './homePage.css'

function Homepage(){
    const containerStyle = {
        backgroundImage: 'url(https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '95vh', 
        width: '100vw', 
      };

    return(
    
    <div>
         <div style={containerStyle} className='backgroundimage'>
            <Navbar/>
           <div className='mid'><Mid/></div> 
            
            

            

        </div>
        <div className='next'> </div>
    
    </div>
       
    )
}
export default Homepage