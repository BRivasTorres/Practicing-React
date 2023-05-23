import React from 'react'
import Modal from './Modal'
import { useModal } from '../Hooks/useModal'

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    return (
        <>
            <h2 className='text-[2rem] font-bold mx-4'>Modales</h2>
            <button className='bg-gray-300 w-[5rem] p-[.3rem] font-bold rounded-[10px] mx-4' onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1} >
                <h2>Modal 1</h2>
                <p>Contenido del modal 1</p>
                <img src="https://placeimg.com/300/300/nature" alt="nature" />
            </Modal>
            <button className='bg-gray-300 w-[5rem] p-[.3rem] font-bold rounded-[10px]' onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h2>Modal 1</h2>
                <p>Contenido del modal 1</p>
                <img src="https://placeimg.com/300/300/nature" alt="nature" />
            </Modal>
        </>
    )
}

export default Modals
