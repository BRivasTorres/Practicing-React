import * as React from 'react';
import { useState } from 'react';


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(validateForm(form))

        if (Object.keys(errors).length === 0) {
            alert("Enviando formulario")
        } else {
            return
        }

        try {
            const response = await fetch("https://formspree.io/f/mayzzwej",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(form)
                })

            if (response.ok) {
                alert('Formulario enviado satisfacotoriamente');
            } else {
                alert('Un error ocurrio mientras se eniviaba el formulario.');
            }
        } catch (error) {
            alert("Un error ocurrio mientras se eniviaba el formulario")
            console.log(error)
        }
    }

    return { form, errors, loading, response, handleChange, handleBlur, handleSubmit }
}
