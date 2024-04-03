import { Routes, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Navbar from "./component/Navbar/Navbar"
import Signin from "./component/Logpage/Signin";
import List from "./component/Userlist/List";
import UsersWrapperList from "./context /ContextWarapper";
import UserAdd from "./component/Userlist/UserAdd";

function App() {
  return (
    <UsersWrapperList>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="adduser" element={<UserAdd/>}/>
        <Route path="/admin" element={<List />} />
      </Routes>
    </UsersWrapperList>
  )
}
export default App;