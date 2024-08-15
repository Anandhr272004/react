import { useReducer, useState } from "react";

const initialvalue = {

         items: [] 
        
};

const reduser=(state, action)=>{

    switch (action.type) {
        case "ADD":
            return { ...state, items: [...state.items, action.payLoad] };
        case "REMOVE":
            return {
                ...state, items: state.items.filter(item => item !== action.payLoad)
            };
        case "RESET":
            return initialvalue;
        default:
            return state;

    }
}

const UseRed = () => {
    const [state, dispatch] = useReducer(reduser, initialvalue);
    const [value, setValue] = useState(' ');

    const additems = () => {
        
        dispatch({ type: "ADD", payLoad: value })
        setValue(' ')

    };
    const removeitems = (oneitems) => {
        dispatch({ type: "REMOVE", payLoad: oneitems })
    }
    const resetitems = () => {
        dispatch({ type: "RESET" })
    };
    return (
        <>
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />   
            <button onClick={additems}>Add items</button>
            <button onClick={resetitems}>reset</button>

        
            <ul>
                {state.items.map((oneitems) => (
                    <li>
                        {oneitems}
                        <button onClick={() => removeitems(oneitems)}>Remove</button>
                        </li>
                        ))}
            </ul>
        </>
    )

}
export default UseRed;