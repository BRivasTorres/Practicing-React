import React from 'react'
import { useForm } from '../hooks/useForm'

const initialForm = {}
const validationsForm = (form) => { }

const ContactForm = () => {
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm)

    return (
        <div className='flex-col w-[80%] mx-auto my-0 '>
            <h2 className='text-[1.5rem] font-bold' >Formulario de contacto</h2>
            <form onSubmit={handleSubmit} className='flex flex-col justify-between h-[400px]'>
                <input
                    className='inpus-styles'
                    type="text"
                    name='name'
                    placeholder='Escribe tu nombre'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                />
                <input
                    className='inpus-styles'
                    type="email"
                    name='email'
                    placeholder='Escribe tu email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                <input
                    className='inpus-styles'
                    type="text"
                    name='subject'
                    placeholder='Asunto a tratar'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.subject}
                    required
                />
                <textarea
                    className='inpus-styles'
                    name="comments"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder='Escribe tus comentarios'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                ></textarea>
                <input type="submit" value="Enviar" className='w-[20%] border-2' />
            </form>
        </div>
    )
}

export default ContactForm
