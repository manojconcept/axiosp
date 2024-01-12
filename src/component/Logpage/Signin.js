import { useFormik } from "formik"
import * as yup from "yup"
import { GobalContext } from "../../config/Utils";
import { useNavigate } from "react-router-dom"

const signInSchema = yup.object({
    username:yup.string().max(12,"maxium letter is five char").required('fill the username'),
    password:yup.string().max(4,"maximum 4").required("fill the password"),
})
function Signin() {
    const { adminData } = GobalContext();
    const navigator = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            const [obj1, obj2] = [values, adminData[0]]
            if (isAuthEqual(obj1, obj2) === true) {
                sessionStorage.setItem("auth", JSON.stringify(values))
                const getSessionDat = JSON.parse(sessionStorage.getItem("auth"))
                if (isAuthEqual(getSessionDat, obj2)) {
                    navigator("/admin")
                }
            }
        }
    })
    function isAuthEqual(obj1, obj2) {
        return obj1 && obj2 && typeof obj1 === "object" && typeof obj2 === "object" ?
            Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).reduce((prev, curr) => {
                return prev && isAuthEqual(obj1[curr], obj2[curr]);
            }, true) : obj1 === obj2
    }
    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div style={{ boxShadow: "10px 10px 5px gray " }}  className="card p-4 mt-5">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">@Username</label>
                                    <input type="text" className="form-control" id="username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} aria-describedby="usernameHelp" placeholder="Enter Username" required/>
                                    <small id="usernameHelp" className="form-text text-muted mx-2">{
                                        formik.errors.username && formik.touched.username ? formik.errors.username : "username : manojconcept"
                                    }</small>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Password" aria-describedby="passwordHelp" required />
                                    <small id="paswordHelp" className="form-text text-muted mx-2">
                                        {
                                            formik.errors.password && formik.touched.errors ? formik.errors.password : "password: 1234"
                                        }
                                    </small>
                                </div>
                                <div className="d-flex justify-content-end mt-2">
                                    <button type="submit" className="btn btn-dark m-2">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                {/* {signinDat!==null ? <h1>{`Email :${signinDat.email}, Password: ${signinDat.password}`}</h1> : <h1>{"values is null"}</h1>} */}
                {/* {isAuthEqual(obj1, obj2) } */}
            </div>
        </>
    )
}

export default Signin;