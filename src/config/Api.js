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

export const getUpdate = async (id, user) => {
    try {
        const response = await axios.put(`${api}/${endpoint}/${id}`, user)
        console.log(response.data)
        if (response.status === 200) {
            window.location.reload(false);
        }
    } catch (error) {
        console.error("Error Fetching Data in getUpdate");
    }
}

export const getPost = async () => {
    try {
        const response = await axios.post(`${api}/${endpoint}`)
        console.log(response.data)
    } catch (error) {
        console.error("Error Fetching on data post")
    }
}

export const getDelete = async (id) => {
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
