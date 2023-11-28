import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Login from "../pages/login"
import Signup from "../pages/signup"
import { loginAction, signupAction, logoutAction, createAction, deleteAction } from "./actions"
import Dashboard from "../pages/dashboard"
import { indexLoader } from "./loaders"
import Index from "../pages"
import Create from "../pages/create"
import Show from "../pages/show"
import Update from "../update/show"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} action={loginAction} />
        <Route path="/signup" element={<Signup />} action={signupAction} />
        <Route path="/logout" action={logoutAction} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="create" element={<Create />} action={createAction} />
        <Route path=":id/" element={<Show />} loader={showLoader} />
        <Route path="update" element={<Update/>}  loader={showLoader} action={updateAction}/>
        <Route path="delete" action={deleteAction} />
    </>
))

export default router