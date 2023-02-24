import { useState } from "react"
import { useForm } from "react-hook-form"
import "./../css/style.css"

export default function Form() {

    const { register } = useForm();

    return (
        <div className="form-container">
            <form className="form">
                <input {...register("firstName")} type="text" placeholder="first name" />
                <input {...register("lastname")} type="text" placeholder="last name" />
                <input type="submit" />
            </form>
        </div>

    )
}