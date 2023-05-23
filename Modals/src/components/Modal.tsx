import React from 'react'

const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClikc = e => e.stopPropagation()
    return (
        <div onClick={closeModal} className={`${isOpen && "is-open "}
            fixed z-[999] top-0 left-0 w-[100%] min-h-screen modal-bg justify-center items-center border hidden`}>
            <div className='modal-container relative bg-white p-[1rem]' onClick={handleModalContainerClikc}>
                <button className='modal-close absolute top-[1rem] right-[1rem] bg-gray-200 w-4 rounded' onClick={closeModal}>X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal
