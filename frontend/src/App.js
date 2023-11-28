import logo from './logo.svg';
import './App.css';
import { Outlet, Link, Form } from "react-router-dom"

function App() {
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
