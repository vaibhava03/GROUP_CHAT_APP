
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("Pwd");
    const name=document.getElementById('Name').value;
    const email=document.getElementById('email').value;
    const phoneNumber=document.getElementById('phoneNumber').value;
    const password=input.value;
    const myObj={
      name:name,
      email:email,
      phone:phoneNumber,
      password:password
    }

    axios.post('http://localhost:4000/user/signup', myObj)
    .then(res =>{
      if(res.status===201)
      {
        alert('successfully signed up');
      }
      else if(res.status===208)
      {
        alert('user already exists please login');
      }
    }).catch(err => console.log(err));
  }


  return (
    <div className="App">
      <header className="App-header"> 
     <h2>Chat Application</h2> 
      </header>
      <div className="formDiv">
        <div>
        </div>
      <form id="Form" onSubmit={handleSubmit}>
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
