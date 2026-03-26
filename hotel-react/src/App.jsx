import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

function App() {
    return (
        <>
            <Navbar />

            <Hero />

            <section id="sobre" style={{ padding: "60px", textAlign: "center" }}>
                <h2>Sobre</h2>
                <p>Somos referência em hotelaria de luxo.</p>
            </section>

            <Cards />

            <Footer />
        </>
    );
}

export default App;