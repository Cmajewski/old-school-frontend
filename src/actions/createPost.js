export const createPost=(post)=>{
    return(dispatch)=>{
        fetch("http://localhost:3000/api/v1/posts",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(post)
        })
        .then(response=>response.json())
        .then(post=>dispatch({type: "ADD_POST", payload: post}))
    }

}