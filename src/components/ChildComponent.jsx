import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const ChildComponent = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      <p className="text-center m-4 py-4 border-2 border-black uppercase bold font-mono">
        hello {state.name}
      </p>
      <div className="flex justify-center">
        <button
          className="w-24 mx-auto bg-green-200 hover:bg-green-500 mt-4 rounded-sm transition-all"
          onClick={() => dispatch({ type: "logout" })}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default ChildComponent;
