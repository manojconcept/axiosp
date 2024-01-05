import { useState } from "react";
import { GobalContext } from "../../config/Utils";
function List() {
    const { users, setUsers } = GobalContext()
    const [input, setInput] = useState(false);
    const [editRow, setEditRow] = useState(0);

    const handEdit = (id) => {
        setInput(preData => !preData);
        setEditRow(id);
        console.log("input", input);
        console.log("edit", editRow);
    }
    const handDel = (id) => {
        console.log("Del")
        console.log(id);
    }
    console.log(users);
    return (
        <>
            <div className="container mt-2">
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

                                        <tr key={index}>
                                            <th scope="row">{user.id}</th>
                                            <td>@{user.username}</td>
                                            <td>
                                                {editRow === user.id ? (
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            value={user.name}
                                                        />
                                                    </div>
                                                ) : (
                                                    user.name
                                                )}
                                            </td>
                                            <td>
                                                {
                                                    editRow === user.id ? (
                                                        <div className="input-group">
                                                            <input
                                                                className="form-control"
                                                                id="name"
                                                                name="name"
                                                                type="text"
                                                                value={user.name}
                                                            />
                                                        </div>
                                                    ) : (
                                                        user.name
                                                    )

                                                }
                                            </td>
                                            <td>
                                                {
                                                    editRow === user.id ? (
                                                        <div className="input-group">
                                                            <input
                                                                className="form-control"
                                                                id="name"
                                                                name="name"
                                                                type="text"
                                                                value={user.name}
                                                            />
                                                        </div>
                                                    ) : (
                                                        user.name
                                                    )

                                                }
                                            </td>
                                            <td>
                                            {
                                                    editRow === user.id ? (
                                                        <div className="input-group">
                                                            <input
                                                                className="form-control"
                                                                id="name"
                                                                name="name"
                                                                type="text"
                                                                value={user.name}
                                                            />
                                                        </div>
                                                    ) : (
                                                        user.name
                                                    )

                                                }
                                            </td>
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