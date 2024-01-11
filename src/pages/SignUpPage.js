import React, { useEffect } from "react";
import SignUpEngine from "../components/signup";


function SignUp({checkSignIn,isLogin}) {
 
      useEffect(()=>{
        if(isLogin){
          window.location.href="home"
        }
      },[])

  return (
    <div className="">
      
        <div>
            <SignUpEngine checkSignIn={checkSignIn}/>
            
        </div>
      
      
    </div>
  );
}

export default SignUp;
