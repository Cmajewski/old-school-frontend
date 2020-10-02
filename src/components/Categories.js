import React from "react"
import Category from "./Category"
import {Link} from "react-router-dom"


const Categories=({categories})=>{

    return(
        <div>
            {{categories}.map((category)=>
            <li>
                <Category category={category} key={category.id} posts={category.posts}/>
            </li>
          
            )}
        </div>
    )

}

export default Categories