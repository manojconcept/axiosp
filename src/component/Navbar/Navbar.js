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
                            isLog ? <button onClick={handleLogin} className="btn btn-light my-2 my-sm-0" >Logout</button> : <button onClick={handleLogin} className="btn btn-light my-2 my-sm-0" >Login</button>
                        }
                
                </div>
            </nav>
        </>

    )
}

export default Navbar;