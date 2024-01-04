import { GobalContext } from "../../config/Utils";
import { Link } from "react-router-dom";

function Navbar() {
    const { isLog,handleLogin } = GobalContext();
    return (
        <>
            <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-dark bg-dark  justify-content-between">
                <div className="container">
                    <Link to={"/"} className="navbar-brand"><i className="bi bi-database"></i>  User Database</Link>
                    
                        {
                            isLog ? <button onClick={()=>handleLogin("")} className="btn btn-light my-2 my-sm-0" ><i class="bi bi-person-check-fill"></i> Logout</button> : <button onClick={()=>handleLogin("signin")} className="btn btn-light my-2 my-sm-0" > <i className="bi bi-person-fill-lock"></i> Login</button>
                        }
                
                </div>
            </nav>
        </>

    )
}

export default Navbar;