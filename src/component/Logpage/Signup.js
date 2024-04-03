import { useFormik } from "formik";
import * as yup from "yup"

function Signup() {
    const signUpSchema = yup.object({
        username: yup.string().min(5, "Need a longer username").required("Please Type the Username"),
        password: yup.string().min(5, "Type the range").required("Please type the password"),
        confirmpassword: yup.string().min(5, "Type the range").required("Please type the password")
    })
    const loginForm = {
        initialValues: {
            username: "",
            password: "",
            confirmpassword: ""
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            const passwordMatch = values.password === values.confirmpassword
            if(passwordMatch){
                setInUsers({
                    username : values.username,
                    password : values.password
                })
            }
           
        }
    }
    const setInUsers = (data)=>{
        return data
    }
    const formik = useFormik(loginForm)
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div style={{ boxShadow: "10px 10px 5px gray " }} className="card p-3">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputUsername" className="form-label">Email address</label>
                                <input value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="username" />
                                {formik.errors.username && formik.touched.username && (
                                    <span>{formik.errors.username}</span>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="password" name="password" placeholder="password" />
                                {formik.errors.password && formik.touched.password && (
                                    <small id="passwordhelp" className="form-text text-muted">
                                        {formik.errors.password}
                                    </small>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    value={formik.values.confirmpassword}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    className={`form-control ${formik.errors.confirmpassword && formik.touched.confirmpassword ? 'is-invalid' : ''}`}
                                    placeholder="Confirm password"
                                />
                                {formik.errors.confirmpassword && formik.touched.confirmpassword && (
                                    <div className="invalid-feedback">
                                        {formik.errors.confirmpassword}
                                    </div>
                                )}
                                {formik.values.password === formik.values.confirmpassword ? (
                                    <small className="form-text text-success">Passwords match</small>
                                ) : (
                                    <small className="form-text text-danger">Passwords don't match</small>
                                )}
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup;