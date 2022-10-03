import FlashCard from "./FlashCard";
import { useState } from "react";

export default function DeckCards({ cores, perguntas, resultado, liberarResposta, liberarBotoes, resetarResultado}) {
    const [estadoCarta, setEstadoCarta] = useState(true)
    console.log("este é o resultado " + resultado)

    function bloquearCartas(){
        const novoEstado = false
        setEstadoCarta(novoEstado)
    }

    function liberarCartas(){
        const novoEstado = true
        setEstadoCarta(novoEstado)
    }

    return (
        <div>
            {perguntas.map((p) => <FlashCard
                cores={cores}
                key={p.id}
                perguntas={p}
                estadoCarta={estadoCarta}
                bloquearCartas={bloquearCartas}
                liberarCartas={liberarCartas}
                resultado={resultado}
                liberarResposta={liberarResposta}
                liberarBotoes={liberarBotoes}
                resetarResultado={resetarResultado}
            />)}
        </div>
    )
}