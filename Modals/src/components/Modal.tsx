import React from 'react'

const Modal = ({ children }) => {
    return (
        <div className='is-open fixed z-[999] top-0 left-0 w-[100%] min-h-screen modal-bg justify-center items-center border hidden'>
            <div className='modal-container relative bg-white p-[1rem] '>
                <button className='modal-close absolute top-[1rem] right-[1rem]'>X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal
