import { useLoaderData, Link } from "react-router-dom"

export default function Index() {
    const notes = useLoaderData()
    console.log(notes)

    return <div>
        {notes.map((note) => 
            <div>
                <Link to={`/dashboard/${note._id}`}><h1>
                    {note.title}
                </h1></Link>
            </div>
        )}
    </div>
}