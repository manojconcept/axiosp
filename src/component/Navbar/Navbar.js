import { GobalContext } from "../../config/Utils";
import { Link } from "react-router-dom";

function Navbar() {
    const { isLog, handleLogin,setIslog } = GobalContext();
    const handleClear = () => {
        sessionStorage.clear()
        setIslog(false);
    }
    const sessionFlag = sessionStorage.getItem('auth') !== null ? true : false;
    console.log(sessionFlag);
    return (
        <>
            <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-dark bg-dark  justify-content-between">
                <div className="container">
                    <Link to={"/"} onClick={handleClear} className="navbar-brand"><i className="bi bi-database"></i>  User Database</Link>
                    {
                        sessionFlag ? <div className="navbar-brand"><i className="bi bi-person-gear"></i> {`Hello ${JSON.parse(sessionStorage.getItem("auth")).username}`}</div> : ""

                    }

                    {
                        isLog ? <button onClick={() => handleLogin("signup")} className="btn btn-light my-2 my-sm-0" ><i className="bi bi-person-plus-fill"></i> Signup</button> : <button onClick={() => handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button>
                    }

                </div>
            </nav>
        </>

    )
}

export default Navbar;