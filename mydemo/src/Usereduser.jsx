import { useReducer } from "react";

const initialstate={
    count:0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':

            return {
                count: state.count + 1
            };
        case 'decrement':

            return {
                count: state.count - 1
            };
        case 'reset':

            return {
                count: 0
            };
        default:
            return state;

    }
}
const Usereduser = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)


    const increment = () => {
        dispatch({ type: 'increment' });
    };
    const decrement = () => {
        dispatch({ type: 'decrement' });
    
};
    const reset = () => {
        dispatch({ type: 'reset' });
    
};
return (
    <div>
        <p>Count: {state.count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div>
);
};

export default Usereduser;