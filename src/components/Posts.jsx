import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Post from './Post';


function Posts({userId}) {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setPosts(res.data.filter((item)=> item.userId === userId ))
    });
  },[]);

  return (
    <div>
      <h4> number of posts {posts.length}</h4>
      <div className="ml-5">
        {posts.map((item,index)=><Post key={index} post={item} />)}
      </div>
    </div>
  )
}

export default Posts