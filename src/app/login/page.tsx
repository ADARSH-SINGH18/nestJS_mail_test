"use client";
import Link from "next/link"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading,setLoading] = React.useState(false)


    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login",user)
            console.log("Login seccess",response.data)
            toast.success("Login success")
            router.push("/profile")

        } catch (error:any) {
            console.log("Login failed", error.message)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }

    },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email" 
                />
            <label htmlFor="password">password</label>
            <input type="passowrd"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password" />    
            <button onClick={onLogin}>{buttonDisabled ? "no Login" :"Login"}</button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
}