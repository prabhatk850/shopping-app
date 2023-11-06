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

    return getUserInstance.post("/api/getUserData").then((result)=>{
        return result
    }).catch((err)=>{
        console.log("error for getuserDetails",err)
    })

} 