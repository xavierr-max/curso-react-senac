import "../styles/Cards.css"
import { FaWifi, FaSwimmingPool, FaCoffee } from "react-icons/fa"

export default function Cards() {
    return (
        <section id="cards" className="cards">
            <h2>Quartos</h2>

            <div className="card-container">

                {/* // ! quando a className tem o espaço, o css terá . (ponto) */}
                {/* // ! quando o elemento estiver dentro de outro, o css será com espaço. */}
                <div className="card card1">
                    <div className="overlay">
                        <FaWifi className="icon" />
                        <h3>Wi-fi grátis</h3>
                        <p>Internet de alta velocidade</p>
                    </div>
                </div>

                <div className="card card2">
                    <div className="overlay">
                        <FaSwimmingPool className="icon" />
                        <h3>Piscina</h3>
                        <p>Área de lazer completa</p>
                    </div>
                </div>

                <div className="card card3">
                    <div className="overlay">
                        <FaCoffee className="icon" />
                        <h3>Café da manhã</h3>
                        <p>Incluso em todas as diárias</p>
                    </div>
                </div>
            </div>
        </section>
    );
}