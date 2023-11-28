import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Login from "../pages/login"
import Signup from "../pages/signup"
import {loginAction, signupAction, logoutAction, } from "./actions"

const router = createBrowserRouter(createRoutesFromElements( 
    <>
        <Route path="/" element={<App />}/>
            <Route path="/login" element={<Login/>} action={loginAction}/>
            <Route path="/signup" element={<Signup/>}  action={signupAction}/>
            <Route path="/logout" action={logoutAction} />
            <Route path="/dashboard/" element={<Dashboard />} />
                <Route path="" element={<Index/>} loader={indexLoader} />
                <Route path="create" element={<Create/>} action={createAction} />
                <Route path=":id/" element={<h1>show</h1>} />
                <Route path="update" element={<h1>index</h1>} />
                <Route path="delete" element={<h1>index</h1>} />
            </>
))

            export default router