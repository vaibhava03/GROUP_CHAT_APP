import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios';
import { useState } from 'react';

function ChatScreen(){
    const token=localStorage.getItem('token');
    const [data,setData]=useState();
    

setInterval( () =>
{
    axios.get('http://localhost:4000/getmessages')
.then(res =>{
setData(res.data);
}).catch(err => console.log(err));
},1000);


function getUsers(data) {
data.forEach(element => {
if(element.message==='have Joined')
{
    if(element.token===token)
    {
        return <div>
        <h4>You {element.message}</h4>
    </div>
    }
    else {
    return (
    <div>
    <h4>{element.name} {element.message}</h4>
    </div>
    );
    }
} 
else {
    return <div>
        <h4>{element.name}:{element.message}</h4>
    </div>
}
});
return <div></div>
}
function postMessages(e){
    e.preventDefault();
    const message=document.getElementById('chat').value;
    const myObj={
    message:message
    }
    const head={
        headers:{
            'Authorization':token
        }
    }
    axios.post('http://localhost:4000/getmessages',myObj,head)
    .then(res =>{
        console.log(res.status);
    }).catch(err =>console.log(err));
}

    return(
    <div className="App">
        <div>
            {getUsers(data)}
        </div>
    <form onSubmit={postMessages} className="chatApp">
        <input htmlFor="text" id="chat" name="chat" />
        <input type="submit" id='submit'value="SEND" /> 
    </form>
    </div>
    );
}
export default ChatScreen;
