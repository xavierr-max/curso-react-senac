import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />

            <section id="sobre">
                <h2>Sobre</h2>
                <p>Somos referência em hotelaria de luxo.</p>
            </section>
        </>
    );
}

export default App;