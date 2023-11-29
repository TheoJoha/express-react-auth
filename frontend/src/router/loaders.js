import url from "./url"

export const indexLoader = async () => {
    const response = await fetch(url + "/note", {
        credentials: "include"
    })
    const notes = await response.json()
    return notes
}

export const showLoader = async ({params}) => {
    const id = params.id

    const response = await fetch(url + `/note/${id}`, {
        credentials: "include"
    })


const note = await response.json()

return note

}


