import { GobalContext } from "../../config/Utils";

function Main(){
    const data = GobalContext();
    console.log(data);
    return(
        <h1>Home</h1>
    )
}

export default Main;