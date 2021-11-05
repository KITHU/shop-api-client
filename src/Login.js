import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";


function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://shop-api-v1.herokuapp.com/api/v1/auth/login/', data)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    };
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email:</label>
            <input {...register("email")} id="email" />
            <label htmlFor="email">Password:</label>
            <input {...register("password")} id='password' />
            <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login
