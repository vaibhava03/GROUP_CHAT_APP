import axios from "axios";
import { useState, useEffect } from "react";


function ChatScreen(){
    const token=localStorage.getItem("token");
    let arr=[];
arr=JSON.parse(localStorage.getItem("msgs"));  
const id= (arr) ? arr[arr.length-1].id : 0;

useEffect(() =>{
 axios(`http://localhost:4000/getmessages?messageId=${id}`)
 .then(res =>{
    const msgs=res.data; 
    if(arr) 
        arr=arr.push(...msgs); 
     localStorage.setItem("msgs",JSON.stringify(msgs));
 }).catch(Err => console.log(Err));
},[]);

 function getUsers(chats) {
    if(!chats) return; 

    return chats.map(chat => {
    if(chat.message==='have joined') 
    {  console.log(chat.token===token);
        if(chat.token===token) return  <h4>You have joined</h4>
        else return <h4>{chat.name} {chat.message}</h4>
    } 
    else  return  <h4>{chat.name}:{chat.message}</h4>
    });
}

function handleSubmit(e){
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
    return <div>
            <div>
            {getUsers(JSON.parse(localStorage.getItem("msgs")))}
            
            </div>
            <div id="enter-message-div"> 
            <form id="enter-message-form" onSubmit={handleSubmit}>  
            <input type="text" id="chat" placeholder="enter a message" />
            <input type="submit" id="btn" value="Send" />
            </form>
            </div>
        </div>
}
export default ChatScreen;
