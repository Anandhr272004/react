import React, { useState, useEffect } from 'react';

function Effect({someProp}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('someProp changed:', someProp);
    }, [someProp]); // Only re-run the effect if someProp changes

    useEffect(() => {
        console.log('count changed:', count);
    }, [count]); // Only re-run the effect if count changes

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>Increment</button>
        </div>
    );
}

export default Effect;
