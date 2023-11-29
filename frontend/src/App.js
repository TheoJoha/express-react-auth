import './App.css';
import { Outlet, Link, Form, useNavigate } from "react-router-dom"
import {useEffect} from "react"

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn")
    if(loggedIn === "true") {
      navigate("/dashboard")
    }
  }, [navigate])
  
  return (
    <div className="App">
      <h1>My Notetaking App</h1>
      <Link to="/signup"> <button>Signup</button></Link>
      <Link to="/login"> <button>Login</button></Link>
      <Link to="/logout"> <button>Logout</button></Link>
        <Form action="/logout" method="post"></Form>
        <Outlet>

        </Outlet>
      

    </div>
  );
}

export default App;
