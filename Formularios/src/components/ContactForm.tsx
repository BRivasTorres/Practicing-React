import { useForm } from '../hooks/useForm'

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
}

const validationsForm = (form) => {
    const errors = {}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El campo ´Nombre´ es requerido"
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo Nombre solo acepta caracteres Alfabeticos"
    }

    if (!form.email.trim()) {
        errors.email = "El campo Email es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campol Email debe ser un correo"
    }

    if (!form.subject.trim()) {
        errors.subject = "El campo Subject es requerido"
    }

    if (!form.comments.trim()) {
        errors.comments = "El campo Comments es requerido"
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo Comments deve contener solamente 255 caracteres"
    }

    return errors
}

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
                {errors.name && <p className='text-[#e63535] font-bold'>{errors.name}</p>}
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
                {errors.email && <p className='text-[#e63535] font-bold'>{errors.email}</p>}
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
                {errors.subject && <p className='text-[#e63535] font-bold'>{errors.subject}</p>}
                <textarea
                    className='inpus-styles resize-none'
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
                {errors.comments && <p className='text-[#e63535] font-bold'>{errors.comments}</p>}
                <input type="submit" value="Enviar" className='w-[20%] border-2' />
            </form>
        </div>
    )
}

export default ContactForm
