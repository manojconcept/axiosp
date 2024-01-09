import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getData } from "./config/Api";
import { adminData } from "./config/Db"
import Main from "./component/Main/Main";
import { createContext } from "react";
import Navbar from "./component/Navbar/Navbar"
import Signin from "./component/Logpage/Signin";
import Signup from "./component/Logpage/Signup";
import List from "./component/Userlist/List";

export const flowDat = createContext();

function App() {
  useEffect(() => { getData(setUsers) }, []);
  const [users, setUsers] = useState([]);
  const [isLog, setIslog] = useState(false);
  const navigate = useNavigate()
  const handleLogin = (reDir) => {
    navigate(`/${reDir}`);
    setIslog(!isLog);
  }

  
  const dataFall = { 
    users, 
    setUsers, 
    adminData, 
    isLog, 
    setIslog,
    handleLogin
  }
  return (
    <flowDat.Provider value={dataFall}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<List />} />
      </Routes>
    </flowDat.Provider>
  )
}
console.log(`Hey checkout My Repo :${"https://github.com/manojconcept/user-ga-db"}`);
export default App;