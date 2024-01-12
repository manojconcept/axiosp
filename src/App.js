import { Routes, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Navbar from "./component/Navbar/Navbar"
import Signin from "./component/Logpage/Signin";
// import Signup from "./component/Logpage/Signup";
import List from "./component/Userlist/List";
import { UsersWrapperList } from "./config/Utils";
function App() {
  return (
    <UsersWrapperList>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/admin" element={<List />} />
      </Routes>
    </UsersWrapperList>
  )
}
console.log(`Hey checkout My Repo :${"https://github.com/manojconcept/user-ga-db"}`);
export default App;