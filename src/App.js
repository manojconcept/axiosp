import { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";
import { getData } from "./config/Api";
import { adminData } from "./config/Db"
import Main from "./component/Main/Main";
import { createContext } from "react";
import Navbar from "./component/Navbar/Navbar"

export const flowDat = createContext();
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => { getData(setUsers) }, [])
  console.log("users", users);
  console.log(adminData);
  return (
    <flowDat.Provider value={{users,setUsers}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Main />} />
      </Routes>
    </flowDat.Provider>
  )
}
export default App;