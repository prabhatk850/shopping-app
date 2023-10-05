import axios from "axios";

export const signUp=(data)=>{
    console.log("data",data)
    axios.post("https://nike-backend-wy14.onrender.com/api/Signup",data).then((result)=>{
    console.log("result",result)    
    return result
    }).catch((error)=>{
        console.log("error from signup",error)
    })
}