import React, { useState } from 'react';

function ToggleText() {
    // Step 2: State management
    const [isVisible, setIsVisible] = useState(true);

    const [isChecked, setIsChecked] = useState(false);

   
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible && <h1>Hello, world!</h1>}
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Text' : 'Show Text'}
            </button>


            <input type="checkbox" checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />

            <p>Toggle: {isChecked ? 'On' : 'Off'}</p>

          
        </div>
    );

}

export default ToggleText;