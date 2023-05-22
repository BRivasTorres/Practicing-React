import React from 'react'

const Modal = ({ children }) => {
    return (
        <div className='is-open'>
            <div className='modal-container'>
                <button className='modal-close'>X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal
