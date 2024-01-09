import axios from "axios";

const userRecords = "659d82d7633f9aee79098e60";
const endpoint = "/users-records";
// export const api = "https://jsonplaceholder.typicode.com";
export const api = `https://${userRecords}.mockapi.io/api/v1/`

export const getData = async (setUsers) =>{
    const response = await axios.get(`${api}${endpoint}`);
    setUsers(response.data)   
    console.log(response.data);
}


