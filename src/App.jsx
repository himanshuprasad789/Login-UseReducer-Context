import { useContext } from "react"
import ChildComponent from "./components/ChildComponent"
import Login from "./components/Login/Login"
import { UserContext } from "./Context/UserContext"

function App(){
  const {state}=useContext(UserContext)
  return (
    <div className="App">
      {
        state.isLoggedIn?
        <ChildComponent />:
        <Login />
      }
      
    </div>
  )
}
export default App