import React from 'react';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUpPage'
import SignIn from './components/signIn';
import Welcome from './pages/WelcomePage';




function App() {
  

 

  return (
    <div  className="App  ">

      <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='SignIn' element = {<SignIn/>}/>
        <Route path='Welcome' element={<Welcome/>}></Route>
      </Routes>
      

      </BrowserRouter>
     
    </div>
  );
}

export default App;
