import { useState, useRef } from "react";

const Click = () => {
    const [click, setClick] = useState(0);

    const clickref = useRef(null)


    const buttonclick = () => {
        clickref.current = clickref.current + 1;
        setClick(clickref.current);

    }
    return (
        <>
            <button onClick={buttonclick}>Click</button>
            <p>counts : {click}</p>
        </>
    );
}
export default Click;