// 5
import { Routes, Route } from "react-router-dom"
// 6
import Reserve from "./pages/Reserve"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

//10
//é uma pagina inicial agora
function Home() {
    return (
        <>
            <Hero />

            <section id="sobre" style={{ padding: "60px", textAlign: "center" }}>
                <h2>Sobre</h2>
                <p>Somos referência em hotelaria de luxo.</p>
            </section>

            <Cards />

            <Footer />
        </>
    )
}

// configuracao comum a toda pagina e aplicacao
function App() {
    return (
        <>
            <Navbar />

            {/* 7 */}
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/reserve" element={<Reserve />} />

            </Routes>
        </>
    );
}

export default App;