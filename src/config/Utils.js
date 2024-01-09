import { useContext, createContext,useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import { getData } from "./Api";
import { adminData } from "./Db";

const flowDat = createContext();
export const UsersWrapperList = ({ children }) => {
    useEffect(() => { getData(setUsers) }, []);
    const [users, setUsers] = useState([]);
    const [isLog, setIslog] = useState(+false);
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
            {children}
        </flowDat.Provider>
    )
}

export const GobalContext = () => {
    return useContext(flowDat);
}
