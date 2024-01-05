import { useFormik } from "formik";
import { useState } from "react";

function Signup() {
    const [formVal,setFormVal] = useState();

    const loginForm = {
        initialValues : {
            username:"",
            password: ""
        },
        onSubmit :(values)=>{
            console.log(values);
            setFormVal(values);
        }
    }
    const formik = useFormik(loginForm)
    console.log(formik);

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="card p-3">

                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={formik.values.username} onChange={formik.handleChange} type="email" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={formik.values.password} onChange={formik.handleChange}  type="password" className="form-control" id="password" name="password" placeholder="password" />
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