import { useRef } from "react";

const Ref=(props)=>{

    const input=useRef("");
    const button=()=>{
        input.current.focus();
    }

    return(
        <>
        <input type="text" ref={input}/>
        <button onClick={button}>click</button>
        <p></p>
        </>
    )

}
export default Ref;