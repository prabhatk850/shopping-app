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

export const FetchProducts=()=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/viewproduct`).then((result)=>{
        return result
    }).catch((error)=>{
        console.log("error from fetch product",error)
    })
}

export const Sidebardata=()=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/viewSidebar`).then((result)=>{
        return result
    }).catch((error)=>{
        console.log("error from sidebar",error)
    })
}

export const DropdownData = ()=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/viewDropDown`).then((result)=>{
        console.log("DropDown",result)
        return result
    }).catch((error)=>{
        console.log("Error in Drop Down",error)
    })
}

export const getFavoriteProducts=()=>{
    return UserInstance.get(`${process.env.REACT_APP_BASE_URL}/api/getfav`).then((result)=>{
        return result
    }).catch((error)=>{
        console.log("error from fetch product",error)
    })
}
export const addFavoriteProducts=(data)=>{
    return UserInstance.post(`${process.env.REACT_APP_BASE_URL}/api/addfav`,data).then((result)=>{
        return result
    }).catch((error)=>{
        console.log("error from fetch favproduct",error)
    })
}

export const addToCart=(data)=>{
    return UserInstance.post(`${process.env.REACT_APP_BASE_URL}/api/addtocart`,data).then((result)=>{
        return result
    }).catch((error)=>{
        console.log("error from fetch cart",error)
    })
}