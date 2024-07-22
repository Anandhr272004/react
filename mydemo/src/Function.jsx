import { useState } from "react";

const Function = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>INCREMENT: {count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
            <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Function;
