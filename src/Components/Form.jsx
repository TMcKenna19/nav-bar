import React, {useContext} from "react";
import UserContext from "../Contexts/UserContext";

export default () =>{
    const {name, setName} = useContext(UserContext);

    const inputStyle = {
        padding: "8px 10px",
        fontSize: "1em"
    };

    return(
        <div style={{padding: "20px"}}>
            <div>
                <label>User Name:</label>{""}
                <input style={inputStyle} value={name} onChange={e => setName(e.target.value)}/>
            </div>

        </div>
    );
};