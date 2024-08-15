// import { useState } from "react";

// const Frm=()=>{
//     const [name,setName]=useState(" ");

//     const handelsubmit=(e)=>{
//         e.preventDefault();
//         console.log({name});
//     }
// const input=(e)=>{
//     setName(e.target.value);

// }
//     return(
//         <div>
//             <form onSubmit={handelsubmit}>
//                 <label>Enter your name:  </label><br/>
//                 <input type="text" value={name} onChange={input} />
//                 <button type="submit">click</button>
//             </form>
//         </div>
//     )
// }
// export default Frm;


import React, { useEffect, useState, useRef } from "react";

const Frm = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log("render");
    }, [value]);
    // Store a reference to the input's DOM node
    const inputRef = useRef();
    const input = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)} />
            <button type="submit" onClick={input}>click</button>
        </div>
    );
} 
export default Frm;