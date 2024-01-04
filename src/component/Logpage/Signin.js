function Signin() {
    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card p-4 mt-5">

                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group mt-2">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="d-flex justify-content-end mt-2">
                                    <button type="submit" class="btn btn-dark m-2">Login</button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Signin;