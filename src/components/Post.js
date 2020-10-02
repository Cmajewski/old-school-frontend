import React from "react"

const Post =({post})=>{
    return (
        <div className="post-container">
            <h3>{post.title}</h3>
            <img src={post.image_url} alt=""/>
            <p>{post.size}</p>
            <p>{post.availability}</p>
            <p>${post.price}</p>
            <p>{post.description}</p>
            <p>{post.likes} Likes</p>
            <p>{post.comments.length} Comments</p>
        </div>
    )
}

export default Post