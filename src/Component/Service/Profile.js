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
export const updateProfile = ()=>{
    const {firstname,lastname,password,preference,dob,email,phoneNumber}=this.state;
    const response =  axios.put(`${process.env.REACT_APP_BASE_URL}/api/updateProfile`, {
        firstname: {firstname},
        lastname: {lastname},
        password: {password},
        preference: {preference},
        dob: {dob},
        email: {email},
        phoneNumber: {phoneNumber}   
    }).then(response => {
        this.setState({ status: response.status })
    })
    .catch(error => {
        this.setState({ errorMessage: error.message });
    });
    return response
}