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
        headers: JSON.stringify(user)
    })

    if (response.status === 400) {
        alert("failed login")
        return redirect("/login")
    }

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


