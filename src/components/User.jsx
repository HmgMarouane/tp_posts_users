import React,{useState} from 'react'
import Posts from './Posts';


function User({user}) {
    const [show,setShow] = useState(false)
    let {name,phone,username,email,address,company,website} = user;
  return (
    <div className='user'>
        <h3> nom : {name}</h3>
        <h5> email: {email} </h5>
        <h5> ville: {address.city}, rue: {address.street} </h5>
        <button onClick={()=>setShow(prev=> !prev)}>show posts</button>
        {
            show &&  <Posts userId={user.id} />
        }
    </div>
  )
}

export default User