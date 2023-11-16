import axios from "axios";
import { currentUser } from "./Auth";


export const getUserDetails = ()=>{
    const token = currentUser()
    console.log("token",token)
    const getUserInstance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`b ${token}`},
        validateStatus:function(status){
            return status <600;
        }
    })

    return getUserInstance.get("/api/getUserData").then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for getuserDetails",err)
    })

} 

export const updateProfile = (data)=>{

  const token = currentUser()
    console.log("token",token)
    const updateUserInstance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`b ${token}`},
        validateStatus:function(status){
            return status <600;
        }
    })
    console.log("update",data)

    return updateUserInstance.put("/api/updateProfile",data).then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for Update Profile",err)
    })
}
export const updateAdd = (data)=>{
    const token = currentUser()
    const updateUserInstance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`b ${token}`},
        validateStatus:function(status){
            return status <600;
        }
    })

    return updateUserInstance.post("/api/updateAddress",data).then((result)=>{
        console.log("add",result)
        return result
    }).catch((err)=>{
        console.log("error for Update Address",err)
    })
}