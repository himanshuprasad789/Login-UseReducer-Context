import React, { useReducer, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { login } from "../../utils/LoginPromise";
// import loginReducer, { initialState } from './LoginReducer';
const Login = () => {
  // const [state, dispatch] = useReducer(loginReducer,initialState);
  const { state, dispatch } = useContext(UserContext);
  const { name, password, isLogging, isLoggedIn, error } = state;

  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')
  // const [isLogging,setIsLogging]=useState(false)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [error,setError] = useState(false)
  const onSubmit = async e => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ name, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <div className="flex justify-start flex-col items-center bg-green-100 w-96 mx-auto mt-8 pt-16 py-4 h-72 rounded-md md:(w-3/4)">
      <input
        type="text"
        className=" w-56 rounded-sm outline-none pl-3 bg-green-50 mb-4 h-8 md:w-2/5"
        value={name}
        onChange={e =>
          dispatch({ type: "field", field: "name", value: e.target.value })}
        placeholder="Name"
      />
      <input
        type="password"
        className="w-56 rounded-sm outline-none pl-3 bg-green-50 mb-4 h-8 md:w-2/5"
        value={password}
        onChange={e =>
          dispatch({ type: "field", field: "password", value: e.target.value })}
        placeholder="Password"
      />
      <button
        className="w-24 bg-green-200 hover:bg-green-500 mt-4 rounded-sm transition-all"
        type="submit"
        onClick={onSubmit}
      >
        {isLogging ? "Logging in" : "Log in"}
      </button>
      {error
        ? <h1 className="text-xl text-red-800 mt-4 ">
            Wrong User Credential. Try again!
          </h1>
        : null}
    </div>
  );
};

export default Login;

