import { Fragment } from "react";
import { Link } from "react-router-dom";

import { GobalContext } from "../../context /ContextWarapper";

function Navbar() {
    const {  handleLogin} = GobalContext();

    const handleClear = () => {
        sessionStorage.clear()
    }
    
    const sessionFlag = sessionStorage.getItem('auth') !== null ? true : false;
    return (
        <>
            <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-dark bg-dark  justify-content-between">
                <div className="container">
                    <Link to={"/"}  className="navbar-brand"><i className="bi bi-database"></i>  User Database</Link>
                    {
                        sessionFlag ? <Link to={"/admin"}   className="navbar-brand mx-2"><i className="bi bi-person-circle"></i> {`Hello, Admin ${JSON.parse(sessionStorage.getItem("auth")).username}`}</Link> : ""

                    }

                    <div className="d-flex">
                    {/* <button onClick={() => handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button>  */}
                        {/* {
                            isLog ? <button onClick={() => handleLogin("signup")} className="btn btn-light my-2 my-sm-0" ><i className="bi bi-person-plus-fill"></i> Signup</button> : <button onClick={() => handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button>
                        } */}
                        {
                            sessionFlag ? (
                                <Fragment>
                                <Link to={"/adduser"} data-toggle="tooltip" ata-toggle="tooltip" data-placement="bottom" title="add users" className="mx-2 btn btn-light my-2 my-sm-0"><i className="bi bi-file-earmark-plus-fill fs-5" ></i></Link>
                                <Link to={"/"} onClick={handleClear} className="mx-2 btn btn-danger my-2 my-sm-0">Log out</Link>
                                </Fragment>
                                    
                            ):<button onClick={() => handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button> 

                        }
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;