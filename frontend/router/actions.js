import url from "./url"
import {redirect}  from "react-router-dom"
import headers from "./headers"

export const signUpAction = async ({request}) => {
    const formData = await request.formData()

    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/signup", {
        method: "post",
        headers: JSON.stringify(user)
    })

    if (response.status === 400) {
        alert("failed signup")
        return redirect("/signup")
    }

    return redirect("/login")
}


export const loginAction = async ({request}) => {
    const formData = await request.formData()

    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/login", {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(user)
    })

    if (response.status === 400) {
        alert("failed login")
        return redirect("/login")
    }

    localStorage.setItem("loggedIn", "true")

    return redirect("/dashboard")
}


export const logoutAction = async ({request}) => {
    const formData = await request.formData()

    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/logout", {
        method: "post",
        headers: JSON.stringify(user)
    })

    if (response.status === 400) {
        alert("failed logout")
        return redirect("/logout")
    }

    return redirect("/")
}


export const createAction = async ({request}) => {
    const formData = await request.formData()

    const note = {
        title: formData.get("title"),
        message: formData.get("message")
    }

    const response = await fetch(url + "/note", {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(note)
    })

    if (response.status === 400) {
        alert("failed create")
        return redirect("/dashboard")
    }

    return redirect("/dashboard")
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    
    const formData = await request.formData()

    const note = {
        title: formData.get("title"),
        message: formData.get("message")
    }

    const response = await fetch(url + `/note/${id}`, {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(note)
    })

    if (response.status === 400) {
        alert("failed create")
        return redirect("/dashboard")
    }

    return redirect("/dashboard")
}

export const deleteAction = async ({params}) => {
    const id = params.id

    const response = await fetch(url + `/note/${id}`, {
        method: "delete",
        credentials: "include",
    })

    if (response.status === 400) {
        alert("failed delete")
        return redirect("/dashboard")
    }

    return redirect("/dashboard")
}


