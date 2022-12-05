import React, {useState} from "react";

import UserContext from '../Contexts/UserContext';

export default ({children}) => {
    const [name, setName] = useState("");

    return(
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>

    );


};