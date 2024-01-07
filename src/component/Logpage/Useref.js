import { useRef } from "react";


function Useref(){
    const inputRef = useRef();
    // console.log(inputRef);        
    const handleSubmit = () =>{
        // console.log(inputRef.current.value);
    }
    const handleChange = () =>{
        // console.log(inputRef.current.value);
    }
    return(
        <>
            <input type="text" ref={inputRef} onChange={handleChange}/>
            <button type="button" onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Useref;