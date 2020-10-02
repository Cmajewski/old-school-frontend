import React from "react"
import Category from "./Category"

const Categories=({categories})=>{

    return(
        <div>
            {categories.map((category)=>
                <Category category={category} key={category.id}/>
            )}
        </div>
    )

}

export default Categories