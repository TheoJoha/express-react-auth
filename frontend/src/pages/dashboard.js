import { Outlet, Link } from "react-router-dom"

export default function Dashboard() {
    return <div>
        <h1>Your Dashboard</h1>
        <Link to="/dashboard/create"><button>Create note</button></Link>
        <Outlet />
    </div>
}





