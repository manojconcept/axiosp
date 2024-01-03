function Navbar() {
    return (
        <>
            <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-dark bg-dark  justify-content-between">
                <div className="container">
                    <a href="" className="navbar-brand"><i class="bi bi-database"></i>  User Database</a>
                    <form className="form-inline">
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Login</button>
                    </form>

                </div>
            </nav>
        </>

    )
}

export default Navbar;