import React from "react";
import { useState } from "react";

const Example = () => {
    const [click, setClick] = useState(false)

    //
    const [hide, setHide] = useState(true)

    const submit = () => {
        setClick(!click)
    }

    const button = () => {
        setHide(!hide)
    }
    return (
        <>
            <input type="checkbox" checked={click} onClick={submit} />
            {click ? "on" : "off"}
            <br />
            {/* // */}
            {hide && "hello"}
            <button type="submit" onClick={button}>
                {hide ? "click to hide" : "click to show"}</button>
        </>
    )


}
export default Example;