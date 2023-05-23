import React from 'react'
import Modal from './Modal'
import { useModal } from '../Hooks/useModal'

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    return (
        <>
            <Modal>
                <h2>Modal 1</h2>
                <p>Contenido del modal 1</p>
                <img src="https://placeimg.com/300/300/nature" alt="nature" />
            </Modal>
        </>
    )
}

export default Modals
