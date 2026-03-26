// ! Um componente não é declarado no main.jsx
// ! Componentes são apenas importados por páginas

// 9
import { Link } from "react-router-dom"

import "../styles/Navbar.css"
import { useState, useEffect } from "react";
import { FaHotel } from "react-icons/fa";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        function handleScroll() {
            setScroll(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <nav className={scroll ? "navbar active" : "navbar"}>
                <h1>
                    <FaHotel /> Hotel Lux
                </h1>

                <ul>
                    <li onClick={() => scrollToSection("sobre")}>Sobre</li>
                    <li onClick={() => scrollToSection("cards")}>Quartos</li>
                    <li onClick={() => scrollToSection("suporte")}>Suporte</li>
                    {/* 8 */}
                    <li>
                        <Link to="/reserve" />Reserve<Link />
                    </li>
                </ul>
            </nav>
        </>
    );
}