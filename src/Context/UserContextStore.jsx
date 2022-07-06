import { UserContext } from "./UserContext";
import loginReducer, { initialState } from "../components/Login/LoginReducer";
import { useReducer } from "react";
export default function (props){
    const [state, dispatch] = useReducer(loginReducer,initialState);
    return (
        <UserContext.Provider value={{state,dispatch}}>
            {props.children}
        </UserContext.Provider>
    )

}