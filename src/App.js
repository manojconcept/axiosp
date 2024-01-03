import { useEffect, useState } from "react";
import { getData } from "./config/Api";

function App(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{getData(setUsers)},[])
  console.log("users",users);
  return(
    <h1>hello</h1>
  )
}
export default App;