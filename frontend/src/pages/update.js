import { Form, useLoaderData } from "react-router-dom"

export default function Update() {
    const note = useLoaderData()
    return <Form action={`/dashboard/${note._id}/update`} method="post">
        <input type="text" name="title" placeholder="title" defaultValue={note.title}/>
        <input type="text" name="message" placeholder="message" defaultValue={note.message} />
        <button>Update Note</button>
    </Form>

}