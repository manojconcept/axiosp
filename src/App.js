import { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";
import { getData } from "./config/Api";
import { adminData } from "./config/Db"
import Main from "./component/Main/Main";
import { createContext } from "react";
import Navbar from "./component/Navbar/Navbar"
import Signin from "./component/Logpage/Signin";

export const flowDat = createContext();

function App() {
  useEffect(() => { getData(setUsers) }, [])
  const [users, setUsers] = useState([]);
  console.log(users)
  return (
    <flowDat.Provider value={{users,setUsers,adminData}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </flowDat.Provider>
  )
}
export default App;