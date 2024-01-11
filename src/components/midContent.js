import React from 'react'
import './midContent.css'

function Mid (){

    function OpenNextPage(){
        return(
            window.location.href ='signIn'
        )
    }
    
    return(

        <div className='midContent'>
            <p>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE</p>
            <p>Most Relaxing Place</p>

            <div className='mid-buttons'>
                <div className='tour'><button>Take a tour</button></div>
                <div  className='book'><button onClick={OpenNextPage}>Book Now</button></div>
            </div>


        </div>
    )
}
export default Mid