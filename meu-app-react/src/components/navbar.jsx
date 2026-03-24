import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="barra_navegacao">
      <h2>Meu app React</h2>

      <ul>
        <li>Home</li>
        <li>Contador</li>
        <li>Sobre</li>
      </ul>
    </nav>
  );
}

export default Navbar;
