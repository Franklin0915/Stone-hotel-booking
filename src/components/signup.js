import React from "react";
import './SignUp.css';
import Greet from "./greet";
import axios from 'axios'


function SignUpEngine(props) {
    const[form,setForm]= React.useState({userName:"",email:"",phone:"",password:""})
    const[error,setError] = React.useState(null)
    const[post,setPost]=React.useState([])
    const[checkSignIn,setCheckSignIn]=React.useState(props.SignUp)
    // const[checkPasswordMatch,setCheckPasswordMatch] = React.useState(true)
   
   

    function handleChange(event){
        const{name,value,type,checked}=event.target
        setForm(prevForm=>{
            return{...prevForm,[name]:type==="checkbox"?checked:value
            }})
    }

   
    function GoHome(){
      window.location.href="home"
    }

    const rightDivStyle = {
        backgroundImage: 'url(https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '50%', 
       
      };

     
        async function handleSubmit(event){
          const data = {...form, username:form.userName}
          console.log(data)
          delete data.userName
          console.log(data)
          try{
              event.preventDefault()
              const response =await  axios.post("http://127.0.0.1:8000/api/accounts/register/",data)
              setPost(prevPost=>response.data)
              console.log(response)
              setCheckSignIn(!props.SignUp)
              console.log(checkSignIn)
            
              
          }
          catch(error){
              // setError(error)
              console.log(error)
  
          }
          
        }

      
         
        function enterWelcome(){
          window.location.href="signIn"
        }
        
        console.log(form)
      
     
       
      if(error){
        return(
            <div>{error.message}</div>
        )
      }
      
     

    return(
        <div className="maincontainer flex">
        <div className="left">
          <div className="topside">
            <div className="brandName">
              <aside>KOBBYstone</aside>
              <aside className="hotname"><small>HOTEL BOOKING</small></aside>
            </div>
            <aside className="symbol">
              <i onClick={GoHome} className="fa-solid fa-square-h fa-xl"></i>
            </aside>
          </div>
  
          <p className="big-font">Sign Up!</p>
  
          <div className="mid-form">
            <form onSubmit={handleSubmit}>
              <div className="username space">
                <small><p className="shift">Username</p></small>
                <input
                  className="one"
                  type="text"
                  name="userName"
                  placeholder="enter username"
                  value={form.userName}
                  onChange={handleChange}
                />
              </div>
  
              <div className="email space shift">
                <small><p>Email</p></small>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
  
              <div className="phone space shift">
                <small><p>Phone Number</p></small>
                <input
                  type="number"
                  name="phone"
                  value={form.phone}
                  placeholder="phone number here"
                  onChange={handleChange}
                />
              </div>
  
              <div className="password space shift">
                <small><p>Password</p></small>
                <input
                  type="password"
                  value={form.password}
                  name="password"
                  placeholder="enter new password"
                  onChange={handleChange}
                />
              </div>
  
              <div className="password2 space shift">
                <p><small>Confirm Password</small></p>
                <input
                  type="password"
                  value={form.password2}
                  placeholder="re-enter your password"
                  name="password2"
                  // onChange={handleChange}
                />
              </div>
                 {/* <div className="checkPassword">{!checkPasswordMatch && <p>passwords do not match</p>}</div>  */}
  
              <div className="submit">
                <button onClick={enterWelcome} >Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <div style={rightDivStyle} className="right">
          <div className="right-top">
            <div className="brandName1">
              <aside>KOBBYstone</aside>
              <aside className="hotname1"><small>HOTEL BOOKING</small></aside>
            </div>
            <div className="community"><i className="fa-solid fa-users"></i>
              <aside className="text-topright">
                <aside><small>largest community Space</small></aside>
              </aside>
            </div>
          </div>
          <p className="big-font1">Hi there!</p>
          <div>
            <Greet/>
          </div>
        </div>
      </div>
    )
}
export default SignUpEngine