import { useState } from "react";
import { GobalContext } from "../../config/Utils";
// import "./list.css";
import { useFormik } from "formik";
import * as yup from "yup"



function List() {

    const userData = {
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        }
    }





    const { users, setUsers } = GobalContext()
    // const [input, setInput] = useState(false);
    const [editRow, setEditRow] = useState(0);

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
            <div className="container=fluid mt-2 mx-2">
                <div className="card p-2">

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
                                                        <td>@{user.username}</td>
                                                        <td>
                                                            <input className="form-control" type="text" value={user.name} />
                                                        </td>
                                                        <td>
                                                            <input className="form-control" type="email" value={user.email} />
                                                        </td>
                                                        <td>
                                                            <input className="form-control" type="email" value={user.email} />

                                                        </td>
                                                        <td>
                                                            <input className="form-control" type="email" value={user.email} />
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
                                                            address
                                                        </td>
                                                        <td>
                                                            company
                                                        </td>
                                                    </>

                                            }
                                            <td className="">
                                                <button onClick={() => { handDel(user.id) }} className="btn btn-danger"><i className="bi bi-x-lg"></i></button>
                                                <button onClick={() => { handEdit(user.id) }} className="mx-2 btn btn-dark "><i className="bi bi-pencil"></i></button>
                                            </td>
                                        </tr>


                                    )
                                })
                            }
                        </tbody>


                    </table>

                </div>
            </div>

        </>
    )
}

export default List;