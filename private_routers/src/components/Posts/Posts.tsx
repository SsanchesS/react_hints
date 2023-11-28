import React, { FC,useEffect,useState } from 'react'
import PostPreview from './PostPreview/PostPreview.tsx'
import { IPost } from '../../types/types'


const Posts:FC = () => {
  const [posts,setPosts] = useState<IPost[]>([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return (
    <div className=''>
      <div><h1>Posts</h1></div>
      <div>
        {posts.map(post=><PostPreview key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

export default Posts