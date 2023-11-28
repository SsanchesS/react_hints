import React, { FC } from 'react'
import { IPost } from '../../../types/types'
import { NavLink } from 'react-router-dom'

const PostPreview:FC<{ post: IPost }> = ({post}) => {
    return (
    <NavLink to={`/post/${post.id}`} className='post_link'>
       <h1>{post.id}</h1>
       <p>{post.title}</p>
    </NavLink>
    )
}
export default PostPreview