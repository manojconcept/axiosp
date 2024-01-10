import { useState } from "react";
import { GobalContext } from "../../config/Utils";
import "./list.css";
import { useFormik } from "formik";
import * as yup from "yup"



function List() {
    const { users, setUsers } = GobalContext()
    const [editRow, setEditRow] = useState(0);
    const userRecord = {
        name: "",
        username: "",
        email: "",
        adstreet: "",
        adsuite: "",
        adcity: "",
        adzipcode: "",
        geolat: "",
        geolng: " ",
        phone: "",
        website: "",
        comname: "",
        comcatchPhrase: "",
        comBs: "",

    }
    const userForm = {
        initialValues : userRecord,
        validationSchema : "",
        onSubmit: (value) =>{
            console.log(value);
        }

    }

    const formik = useFormik(userForm);


    const handEdit = (id) => {
        // setInput(preData => !preData);
        setEditRow(id);
        // console.log("edit", editRow);
    }

    const handDel = (id) => {
        // console.log("Del")
        // console.log(id);
    }
    // console.log(users);
    return (
        <>
            <div className="container-fluid mt-2 mx-2">
                <div className="card p-2">
                    <form>
                        <table className="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <tr className="hoverSite" key={index}>
                                                {
                                                    editRow === user.id ?
                                                        <>
                                                            <th scope="row">{user.id}</th>
                                                            <td style={{ fontSize: "15px", height: "20px", margin: "2px" }} className=" mb-2 p-2">@{user.username}</td>
                                                            <td>
                                                                <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control mb-2 p-2" type="text" id="" name="" onChange="" value={user.name} />
                                                            </td>
                                                            <td>
                                                                <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control mb-2 p-2" type="email" value={user.email} />
                                                            </td>
                                                            <td>
                                                                <div>
                                                                    <div className="d-flex justify-content-center align-items-center mb-2">
                                                                        <div id="emailHelp" className="form-text">Street</div>
                                                                        <input style={{ fontSize: "13px", height: "10px", margin: "2px" }} className="form-control p-2" type="text" value={user.adstreet} />
                                                                        <div id="emailHelp" className="form-text">Suite</div>
                                                                        <input style={{ fontSize: "13px", height: "10px", margin: "2px" }} className="form-control p-2" type="text" value={user.adsuite} />
                                                                    </div>
                                                                    <hr />
                                                                    <div className="d-flex justify-content-center align-items-center mb-2">
                                                                        <div id="emailHelp" className="form-text">City</div>
                                                                        <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control p-2" type="text" value={user.adcity} />
                                                                        <div id="emailHelp" className="form-text">Zipcode</div>
                                                                        <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control p-2" type="text" value={user.adzipcode} />
                                                                    </div>
                                                                    <hr />
                                                                    <div className="d-flex justify-content-center align-items-center mb-2">
                                                                        <div id="emailHelp" className="form-text">lat</div>
                                                                        <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control p-2" type="text" value={user.geolat} />
                                                                        <div id="emailHelp" className="form-text">lgn</div>
                                                                        <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control p-2" type="text" value={user.geolng} />
                                                                    </div>
                                                                    <hr />
                                                                    <div id="emailHelp" className="form-text">phone</div>
                                                                    <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control mb-2" type="text" value={user.phone} />
                                                                    <div id="emailHelp" className="form-text">website</div>
                                                                    <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control" type="text" value={user.website} />
                                                                </div>
                                                            </td>

                                                            <td>

                                                                <div id="emailHelp" className="form-text">Company Name</div>
                                                                <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control mb-2 p-2" type="email" value={user.comname} />
                                                                <hr />
                                                                <div id="emailHelp" className="form-text">Catch Phrase</div>
                                                                <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control mb-2 p-2" type="email" value={user.comcatchPhrase} />
                                                                <hr />
                                                                <div id="emailHelp" className="form-text">Business Slogan</div>
                                                                <input style={{ fontSize: "13px", height: "20px", margin: "2px" }} className="form-control p-2" type="email" value={user.comBs} />
                                                            </td>

                                                        </>



                                                        :
                                                        <>

                                                            <th scope="row">{user.id}</th>
                                                            <td>@{user.username}</td>
                                                            <td>
                                                                {user.name}
                                                            </td>
                                                            <td>
                                                                {user.email}

                                                            </td>
                                                            <td>
                                                                <p>
                                                                    <small>
                                                                        {`Street : ${user.adstreet}, Suite : ${user.adsuite}`}
                                                                    </small>
                                                                </p>
                                                                <hr />

                                                                <p>
                                                                    <small>
                                                                        {`City : ${user.adcity}, ZipCode : ${user.adzipcode}`}
                                                                    </small>
                                                                </p>
                                                                <hr />
                                                                <p>
                                                                    <small>
                                                                        {`Geo - lat : ${user.geolat},lng : ${user.geolng}`}
                                                                    </small>
                                                                </p>
                                                                <hr />
                                                                <p>
                                                                    <small>
                                                                        {` name : ${user.website}, phone : ${user.phone}`}
                                                                    </small>
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p>
                                                                    <small>
                                                                        {` company Name : ${user.comname}`}
                                                                    </small>
                                                                </p>
                                                                <hr />
                                                                <p>
                                                                    <small>
                                                                        {` Catch Phrase : ${user.comcatchPhrase}`}
                                                                    </small>

                                                                </p>
                                                                <hr />
                                                                <p>
                                                                    <small>
                                                                        {` Business Slogan : ${user.comBs}`}
                                                                    </small>

                                                                </p>
                                                            </td>
                                                        </>

                                                }
                                                <div style={{ flexDirection: "row" }}>
                                                    <div>
                                                        <button onClick={() => { handEdit(user.id) }} className="mx-2 btn btn-dark "><i className="bi bi-pencil"></i></button>

                                                    </div>
                                                    <div style={{ marginLeft: "8px" }}>
                                                        <button onClick={() => { handDel(user.id) }} className="btn btn-danger mt-2"><i className="bi bi-x-lg"></i></button>
                                                    </div>
                                                    <div style={{ marginLeft: "8px" }}>
                                                        <button onClick={() => { handDel(user.id) }} className="btn btn-warning mt-2"><i className="bi bi-person-gear"></i></button>
                                                    </div>

                                                </div>

                                            </tr>


                                        )
                                    })
                                }
                            </tbody>


                        </table>
                    </form>

                </div>
            </div>

        </>
    )
}

export default List;