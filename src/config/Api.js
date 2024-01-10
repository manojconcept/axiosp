import axios from "axios";
import {adminUserControlKey} from "./Db"
const endpoint = "users-records";
export const api = `https://${adminUserControlKey}.mockapi.io/api/v1/`
export const getData = async (setUsers) =>{
    const response = await axios.get(`${api}/${endpoint}`);
    setUsers(response.data)
}


