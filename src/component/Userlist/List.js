import { GobalContext } from "../../config/Utils";
function List() {
    const { users, setUsers } = GobalContext()
    console.log(users);
    return (
        <>
            <div className="container">
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return(
                                    <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>@{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <tr>
                                            <th>hello</th>
                                            <th>hello</th>
                                        </tr>
                                    </td>
                                    <td>@mdo</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default List;