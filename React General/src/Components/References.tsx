import React, { createRef, useRef } from 'react'

const References = () => {
    let refMenu = useRef()
    let refMenuBtn = useRef()

    //&Esta seria la manera en que se modificaria el estado de un compoennte normalmente, auque ahora es recomendado hacerlo con referencias.
    const handleToggleMenu = (e) => {
        //     const $menu = document.getElementById("menu")

        //     if (e.target.textContent === "Menu") {
        //         e.target.textContent = "Cerrar"
        //         $menu.style.display = "block"
        //     } else {
        //         e.target.textContent = "Menu"
        //         $menu.style.display = "none"
        //     }


        if (refMenuBtn?.current?.textContent === "Menu") {
            refMenuBtn.current.textContent = "Cerrar"
            refMenu.current.style.display = "block"
        } else {
            refMenuBtn.current.textContent = "Menu"
            refMenu.current.style.display = "none"
        }
    }


    return (
        <>
            <h2>Referencias</h2>
            <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id='menu' ref={refMenu} style={{ display: "none" }}>
                <a href="">Section 1</a><br />
                <a href="">Section 2</a><br />
                <a href="">Section 3</a><br />
                <a href="">Section 4</a><br />
                <a href="">Section 5</a><br />
            </nav >
        </>
    )
}

export default References