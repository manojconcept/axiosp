import axios from "axios";

export const api = "https://jsonplaceholder.typicode.com";

export const getData = async (setUsers) =>{
    const response = await axios.get(`${api}/users`);
    console.log(response);
    console.log(response.data);
    setUsers(response.data)
    
}