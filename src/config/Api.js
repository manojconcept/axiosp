import axios from "axios";
import { adminUserControlKey } from "./Db"
const endpoint = "users-records";
export const api = `https://${adminUserControlKey}.mockapi.io/api/v1/`

export const GetData = async (setUsers) => {
    try {
        const response = await axios.get(`${api}/${endpoint}`);
        console.log(response.data);
        setUsers(response.data)
    } catch (error) {
        console.error("Error fetching data:");
    }
}

export const GetDataId = async (id) => {
    try {
        const response = await axios.get(`${api}/${endpoint}/${id}`)
        console.log(response.data);
        console.log(response)
    } catch (error) {
        console.error("Error Fetching Data")
    }
}

export const GetUpdate = async (id, user) => {
    try {
        const response = await axios.put(`${api}/${endpoint}/${id}`, user)
        console.log(response)
    } catch (error) {
        console.error("Error Fetching Data in getUpdate");
    }
}

export const GetPost = async (data) => {
    try {
        const response = await axios.post(`${api}/${endpoint}`,data)
        console.log(response.data)
    } catch (error) {
        console.error("Error Fetching on data post")
    }
}

export const GetDelete = async (id) => {
    try {
        const response = await axios.delete(`${api}/${endpoint}/${id}`)
        console.log(response);
        if (response.status === 200) {
            window.location.reload(false);
        }
    } catch (error) {
        console.error("Error Fetching Data");
    }
}
