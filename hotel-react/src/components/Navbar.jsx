// ! Um componente não é declarado no main.jsx

import { useState, useEffect } from "react";
import { FaHotel } from "react-icons";

export default function Navbar() {

    //exibicao e manipulacao do scroll
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        //operacao logica da manipulacao
        function handleScroll() {
            setScroll(window.screenY > 50);
        }

        //aciona o evento quando "scrollar"
        window.addEventListener("scroll", handleScroll);

        //remove o evento "scrollar"
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); //[] -> faz o evento ocorrer uma unica vez

    // deixa a animacao do scroll mais suave
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }


    return (
        <nav className={scroll ? "navbar active" : "navbar"}>
            <h1><FaHotel/> Hotel Lux</h1>

            <ul>
                <li onClick={() => scrollToSection("sobre")}>Sobre</li>
                <li onClick={() => scrollToSection("cards")}>Quartos</li>
                <li onClick={() => scrollToSection("suporte")}>Suporte</li>
            </ul>
        </nav>
    );
}