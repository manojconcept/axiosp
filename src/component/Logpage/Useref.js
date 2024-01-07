import { useRef } from "react";

function Useref(){
    const inputRef = useRef();
    
    const handleChange =()=>{
        console.log(inputRef.current.value)
    }

    const handleClick =()=>{
        console.log(inputRef.current.value);
    }
    

    return(
        <>
            <input ref={inputRef} type="text"  />
            <button type="button" onClick={handleClick} >submit</button>
        </>
    )
}
export default Useref;