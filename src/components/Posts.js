import React from "react"
import Post from "./Post"

const Posts=(params)=>{
    return (
    <div>
        {params.posts.map(post=><Post key={post.id} post={post}/>)}
    </div>
)
}

export default Posts;