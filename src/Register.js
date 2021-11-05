import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";


function Register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [user, setuser] = useState([])
    return (
        <>
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email:</label>
            <input {...register("email")} id="email" />

            <label htmlFor="username">Username:</label>
            <input {...register("username")} id="username" />

            <label htmlFor="role">Role:</label>
            <select {...register("role")} id="role">
                <option value="">Select...</option>
                <option value="1">Admin</option>
                <option value="2">Manager</option>
                <option value="3">Cashier</option>
            </select>

            <label htmlFor="password">Password:</label>
            <input {...register("password")} id='password' />
            <input type="submit" />
            </form>
        </>
    )
}

export default Register