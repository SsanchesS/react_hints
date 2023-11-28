import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IPost } from '../../../types/types'

const Post:FC = () => {
const {id} = useParams()
const [post,setPost] = useState<IPost | null>(null)
const [isLoading,setisLoading] = useState(true)

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>{
        data.id ? setPost(data) : setPost(null) 
        setisLoading(false)
    })
},[])
return (
<div>
    {isLoading ? <div>Загрузка</div> : post ?
        <>
            <div><h1>Пост номер:  {post.id}</h1></div>
            <div><h2>Пост юзера: {post.userId}</h2></div>
            <div><h3>Заголовок: {post.title}</h3></div>
            <div><p>{post.body}</p></div>
        </> : <div>Такого поста нет</div>
    }
</div>
)
}

export default Post