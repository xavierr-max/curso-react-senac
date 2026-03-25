import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <section id="sobre">
                <h2>Sobre</h2>
                <p>Somos referência em hotelaria de luxo.</p>
            </section>

            <Footer />
        </>
    );
}

export default App;