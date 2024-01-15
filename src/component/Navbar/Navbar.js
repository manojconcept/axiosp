import { GobalContext } from "../../config/Utils";
import { Link } from "react-router-dom";

function Navbar() {
    const { isLog, handleLogin, setIslog } = GobalContext();
    const handleClear = () => {
        sessionStorage.clear()
        setIslog(false);
    }
    const handleShow =()=>{
        setIslog(true)
    }
    const sessionFlag = sessionStorage.getItem('auth') !== null ? true : false;
    return (
        <>
            <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-dark bg-dark  justify-content-between">
                <div className="container">
                    <Link to={"/"} onClick={handleShow}  className="navbar-brand"><i className="bi bi-database"></i>  User Database</Link>
                    {
                        sessionFlag ? <Link to={"/admin"}  path className="navbar-brand mx-2"><i className="bi bi-person-circle"></i> {`Hello, Admin ${JSON.parse(sessionStorage.getItem("auth")).username}`}</Link> : ""

                    }

                    <div className="d-flex">
                    <button onClick={() => handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button> 
                        {/* {
                            isLog ? <button onClick={() => handleLogin("signup")} className="btn btn-light my-2 my-sm-0" ><i className="bi bi-person-plus-fill"></i> Signup</button> : <button onClick={() => handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button>
                        } */}
                        {
                            sessionFlag ? <Link to={"/"} onClick={handleClear} className="mx-2 btn btn-danger my-2 my-sm-0">Log out</Link>:""
                        }
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;