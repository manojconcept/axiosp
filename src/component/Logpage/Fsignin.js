import { useFormik } from "formik";
import * as manoj from "yup";


    const signInSchema = manoj.object({
        email:manoj.string().min(13,"minum 13"),
        password:manoj.string().min(4,"minum 4")
    })
function Fsignin() {

    const signInForm = {
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:(values)=>{
            console.log(values);

        },
        validationSchema: signInSchema,
    }
    const formik= useFormik(signInForm)
    console.log(formik);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">

                        <form onSubmit={formik.handleSubmit}>
                            <div className="">
                                <div>
                                    <input type="email" id="email" name="email"  onChange={formik.handleChange} placeholder="email" value={formik.values.email} />
                                </div>
                                {formik.errors.email}
                                <br/>
                                <div>
                                    <input type="password" id="password" name="password" onChange={formik.handleChange} placeholder="password" value={formik.values.password}/>
                                </div>
                                {formik.errors.password}
                                <br/>
                                <div>
                                    <button type="submit">
                                        submit
                                    </button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Fsignin;