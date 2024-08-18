import React, { useState } from 'react';

function ToggleText() {
    // Step 2: State management
    const [isVisible, setIsVisible] = useState(true);

    // Step 4: Button click handler
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible && <h1>Hello, world!</h1>}
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Text' : 'Show Text'}
            </button>
        </div>
    );

}

export default ToggleText;