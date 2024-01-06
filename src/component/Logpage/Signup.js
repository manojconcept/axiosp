import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup"
function Signup() {
    const [singupVal, setSingupVal] = useState();

    const signUpSchema = yup.object({
        username: yup.string().min(5, "Need a longer email").required("Please Type the Username"),
        // username:yup.string().min(5,"Need a longer email").required("Please Type the Username").matches(/here we give regx/,"display message"),
        password: yup.string().min(5, "Type the range").max(5, "type the range").required("Please type the password")
    })
    const loginForm = {
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
            setSingupVal(values);
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
                                <label htmlFor="exampleInputUsername" className="form-label">Email address</label>
                                <input value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Email" />
                                {formik.errors.username && formik.touched.username ? formik.errors.username : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="password" name="password" placeholder="password" />
                                <small id="passwordhelp" className="form-text text-muted">{formik.errors.password && formik.touched.password ? formik.errors.password : " We'll never share your password with anyone else. "}</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputConfirmPassword" className="form-label">confirm Password</label>
                                <input id="confirmpassword" name="confirmpassword" type="password" className="form-control" placeholder="confirm password" />

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