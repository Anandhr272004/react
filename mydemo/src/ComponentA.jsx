import { createContext,useState } from "react";
import ComponentB from "./ComponentB";


export const send=createContext();

const ComponentsA=()=>{
    const [data,setData]=useState("anandh");

return(
    <div className="Box">
        <h1>{`Hello${data}`}</h1>
        <send.Provider value={data}>
            <ComponentB />
        </send.Provider>
    </div>

)}
export default ComponentsA;