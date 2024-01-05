function Signup() {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="card p-3">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="confirm password" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;