import axios from "axios";
import { currentUser } from "./Auth";

const token = currentUser()
const UserInstance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout:1000000000,
    headers:{"token":`b ${token}`},
    validateStatus:function(status){
        return status <600;
    }
})


export const getUserDetails = ()=>{
   
    return UserInstance.get("/api/getUserData").then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for getuserDetails",err)
    })

} 

export const updateProfile = (data)=>{

    return UserInstance.put("/api/updateProfile",data).then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for Update Profile",err)
    })
}
export const updateAdd = (data)=>{
    
    return UserInstance.post("/api/updateAddress",data).then((result)=>{
        console.log("add",result)
        return result
    }).catch((err)=>{
        console.log("error for Update Address",err)
    })
}
export const getUserAddress = ()=>{

    return UserInstance.get("/api/getUserAddress").then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for getuserAddress",err)
    })

}

