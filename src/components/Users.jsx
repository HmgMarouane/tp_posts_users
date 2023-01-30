import { useState,useEffect } from 'react'
import axios from 'axios';
import User from './User';
import usersData from './data'
import styled from 'styled-components';


function Users() {
    const [usersList,setUsers] = useState([])
    console.log(usersList)
    useEffect(
        ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
            setUsers(response.data);
            console.log('added users');
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div  >
        <h1>Number of users {usersList.length}</h1>

        <div className="d-flex justify-content-center flex-column mx-5">
        {usersList.map((item,index)=><User key={index} user={item} />)}
        </div>
    </div>
  )
}

export default Users;