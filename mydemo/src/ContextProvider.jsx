import React from 'react';
import { createContext } from 'react';

 const UserContext = createContext();

const ContextProvider = (props) => {
    const name = "Nschool Inst";
    return (
        <div>
            <UserContext.Provider value={name}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}

export {UserContext,ContextProvider as default};

