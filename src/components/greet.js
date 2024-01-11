import React from "react";
import './greet.css'

function Greet(){
    
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    let quote
    

    if(hours < 12){
        timeOfDay ="morning"
        quote = " “True hospitality consists of giving the best of yourself to your guests.” "
    }
    else if(hours >=12 && hours <17){
        timeOfDay = "afternoon"
        quote= " “Hospitality should have no other nature than love.” "
    }
    else{
        timeOfDay ="evening"
        quote=" “My definition of a good hotel is a place I’d stay at.” "
    }
    
    
    return(
        <div className="greet">
            <h1>Good {timeOfDay}</h1>
            <p>{quote}</p>

        </div>
    )
}
 export default Greet