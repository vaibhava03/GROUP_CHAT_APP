import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios';
function Login() {
  function handleSubmit(e)
    {
        e.preventDefault();
        const input = document.getElementById("Pwd");
        const emailId = document.getElementById("email").value;
        const password=input.value;
        const myObj = {
        email: emailId,
        password:password
        }
        axios.post('http://localhost:4000/user/login', myObj)
        .then(res =>{
            console.log(res);
            if(res.status===200){
           localStorage.setItem('token',res.data);
           
                const a=document.createElement('a');
                a.href="/expenses";
                a.target='_blank';
                document.body.appendChild(a);
                a.click();
                a.remove();
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
     <label htmlFor="email">Email:</label><br />
    <input type="email" id="email" /><br />
    <label htmlFor="password" id="password">Password:</label><br />
    <input type="password" id="Pwd" /><br />
    <input type="submit" id='btn'value="LOGIN" /> <br />
    <h4>A new user? </h4>
    <Link to="/"><h5>Signup Here</h5></Link>
    </form>
    </div>
          </div>
  );
}

export default Login;
