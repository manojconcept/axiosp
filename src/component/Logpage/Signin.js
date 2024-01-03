function Signin() {
    return (
        <>
            <div className="container-xl mt-2">
                <div className="card">
                    <div className="container">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="d-flex justify-content-end mx-5">
                                <button type="submit" class="btn btn-primary m-2">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;