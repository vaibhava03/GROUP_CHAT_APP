
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {


  return (
    <div className="App">
      <header className="App-header"> 
     <h2>Chat Application</h2> 
      </header>
      <div className="formDiv">
        <div>
          
        </div>
      <form id="Form">
        <label for="UserName" >User Name:</label> <br />  
          <input type="text" id="Name" placeholder="Enter a Username" /><br />
          <label for="email">Email:</label><br />
          <input type="email" id="email" placeholder="Enter Email" /><br />
          <label for="phoneNumber">PhoneNumber:</label><br />
          <input type="tel" id="phoneNumber" pattern="[0-9]{10}" placeholder="Enter 10-Digit Phone Number" /><br />
          <label for="password" id="password">Password:</label><br />
          <input type="password" id="Pwd" placeholder="Enter a Password" /><br />
          <input type="submit" id='btn' value="SIGN UP" /> 
          </form>
          </div>
    </div>
  );
}

export default App;
