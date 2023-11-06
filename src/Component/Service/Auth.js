import axios from "axios";

export const signUp=(data)=>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/signup`,data).then((result)=>{
    console.log("result",result)    
    return result
    }).catch((error)=>{
        console.log("error from signup",error)
    })
}

export const Checkuser =(data)=>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/checkuser`,data).then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for check user",err)
    })

}
export const Login=(data)=>{

    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/signIn`,data).then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for login",err)
    })

}
// doLoggedIn
export const doLoggedIn = async(data,next)=>{
    window.localStorage.clear()
    window.localStorage.setItem("token",JSON.stringify(data))
    next()
 }

 // doLoggedOut
    export const doLoggedOut = async(next)=>{
        window.localStorage.clear()
        
    }
 // curretUser
    export const currentUser =()=>{
        let dataString= window.localStorage.getItem("token")
        let data=JSON.parse(dataString)
        console.log("user",data)
         return data  
        
    }