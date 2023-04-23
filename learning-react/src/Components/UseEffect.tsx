import React, { useState, useEffect } from "react"

const UseEffect = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        console.log("montaje")

        const detectScrollY = () => setScrollY(window.pageXOffset)

        window.addEventListener("scroll", detectScrollY())
    })


    return (
        <>
            <h2>UseEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY} px </p>
        </>
    )
}

export default UseEffect