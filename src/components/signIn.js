import React, { useState } from "react";
import './signIn.css'
import axios from "axios";

function SignInEngine (){
    


    const[login,setLogin]= React.useState({email:"",password:""})
    const[postLogin,setPostLogin]=React.useState([])
    const[error,setError]=React.useState(null)
    const[isValid,setIsValid] = useState(false)



function ValidateForm(){
    const{email,password} = login;
    return email.trim() !== "" && password.trim() != ""
    
}
   const formIsValid = ValidateForm()

    function handleLoginChange(event){
        const{name,value,type,checked}=event.target
        setLogin(prevFrom=>{
            return{...prevFrom,[name]:type==="checkbox"?checked:value
            }})
    }

    async function checkLoginSubmit(event){
        event.preventDefault()
        if(formIsValid){
            window.location.href="welcome" 
        }
        else{
            alert("fill in the required fields")
        }
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/accounts/login/",login);
            axios.defaults.headers.common['Authorization']= `Bearer ${response['token']}`
            setPostLogin(response.data)
            console.log(response)
        }
        catch(error){
            setError(error)
        }
                
            
    }
        
              

    function ToHome(){
        window.location.href="home"
    }        
        
    

    const back={
        backgroundImage: 'url(https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '50%', 
    }
    return(
        <div style={back} className="Main1 ">
            <div className="topside">
            <div className="brandName0">
              <aside>KOBBYstone</aside>
              <aside className="hotname0"><small>HOTEL BOOKING</small></aside>
            </div>
            <aside className="symbol0">
              <i onClick={ToHome} className="fa-solid fa-square-h fa-xl white"></i>
            </aside>
          </div>
          <form onSubmit={checkLoginSubmit}>
          <div className="inputs">
            <p className="big-font0">Sign In!</p>
            <div className="email1">
                <input
                type="email"
                name="email"
                value={login.email}
                placeholder="input email here"
                onChange={handleLoginChange}

                />
            </div>

            <div className="pass">
                <input
                type="password"
                name="password"
                placeholder="Input your password "
                value={login.password}
                onChange={handleLoginChange}
                
                />
            </div>
            <div className="login-btn"><button >login</button></div>

            </div> 
          </form>
            
           
            <p>Don't have an account? <a href="signUp">Sign up</a></p>


        </div>
    )
}
export default SignInEngine