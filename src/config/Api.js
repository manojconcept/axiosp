import axios from "axios";
import { adminUserControlKey } from "./Db"
const endpoint = "users-records";
export const api = `https://${adminUserControlKey}.mockapi.io/api/v1/`


export const getData = async (setUsers) => {
    try {
        const response = await axios.get(`${api}/${endpoint}`);
        console.log(response.data);
        setUsers(response.data)
    } catch (error) {
        console.error("Error fetching data:");
    }
}

export const getDataId = async (id) => {
    try {
        const response = await axios.get(`${api}/${endpoint}/${id}`)
        console.log(response.data);
    } catch (error) {
        console.error("Error Fetching Data")
    }
}

 

export const getUpdate = async (id) =>{
    try{
        const response = await axios.post(`${api}/${endpoint}/${id}`)
        console.log(response.data)

    }catch(error){
        console.error("Error Fetching Data in getUpdate");
    }
}

export const getPostNew = async() => {
    try{
        const response = await axios.post(`${api}/${endpoint}`)
        console.log(response.data)
    }catch(error){
        console.error("Error Fetching on data post")
    }
}

export const getDeletId = async(id)=>{
    try{
        const response = await axios.delete(`${api}/${endpoint}/${id}`)
        console.log(response);
    }catch(error){
        console.error("Error Fetching Data");
    }
}
