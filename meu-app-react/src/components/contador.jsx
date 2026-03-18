import { useState } from "react"

function Contador(){

    const [contador, setContador] = useState(0)
//!     valor atual -> valor atualizado
//!     valor exibido -> valor manipulado

    function aumentar(){
        setContador(contador + 1)
    }

    function diminuir(){
        setContador(contador - 1)
    }

    return(
        <div>
            <h1>Contador</h1>

            <h2>{contador}</h2>

            <div>
                <button onClick={aumentar}>+</button>

                <button onClick={diminuir}>-</button>
            </div>
        </div>
    )
}

export default Contador