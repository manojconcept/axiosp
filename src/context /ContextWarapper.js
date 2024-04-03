import { useContext, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetData } from "../config/Api";
import { adminData } from "../config/Db";
export const userRecord = {
    name: "",
    username: "",
    email: "",
    adstreet: "",
    adsuite: "",
    adcity: "",
    adzipcode: "",
    geolat: "",
    geolng: " ",
    phone: "",
    website: "",
    comname: "",
    comcatchPhrase: "",
    comBs: "",
}
const flowDat = createContext();

const UsersWrapperList = ({ children }) => {
    const [users, setUsers] = useState([]); //api call
    const [uAdd, setUadd] = useState(userRecord);//input recordes
    const [apiStatus,setApiStatus] = useState()
    const navigate = useNavigate()

    useEffect(() => { GetData(setUsers) }, []);

    const handleLogin = (reDir) => {
        navigate(`/${reDir}`);
    }
    const dataFall = {
        users,
        setUsers,
        adminData,
        handleLogin,
        setUadd,
        uAdd,
        apiStatus,
        setApiStatus
    }
    return (
        <flowDat.Provider value={dataFall}>
            {children}
        </flowDat.Provider>
    )
}

const GobalContext = () => {
    return useContext(flowDat);
}

export {GobalContext};
export default UsersWrapperList;