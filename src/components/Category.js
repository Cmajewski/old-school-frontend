import React from "react"
import {Link} from "react-router-dom"

const Category=({category})=>{
    
    return (
        <div>
           <Link to={{
            pathname: `/categories/${category.id}/posts`,
            state: {posts: category.posts}
           }}>
           {category.name}
           </Link>
        </div>
        
        )
}

export default Category