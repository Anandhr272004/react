import { useRef } from "react";


const Useref = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    //2nd input field
    const input = useRef();

    const focusI = () => {
        input.current.style.background="red";
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>

            {/* 2nd input field */}
            <input type="password" ref={input} />
            <button onClick={focusI}> Click to Focus  the Input</button>
        </>
    );
}


export default Useref;