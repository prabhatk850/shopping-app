import axios from "axios";

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
