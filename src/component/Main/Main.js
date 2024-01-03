import { GobalContext } from "../../config/Utils";
import MainCard from "./MainCard";

function Main() {
    const { users, setUsers, adminData } = GobalContext();
    console.log(users);
    return (

        <section className="py-7">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                    {
                        users.map((users,index)=>{
                            return <MainCard key={index} value={users} ind={index}/>
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default Main;