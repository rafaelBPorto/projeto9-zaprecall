import FlashCard from "./FlashCard";
import { useState } from "react";

export default function DeckCards({ perguntas }) {
    let cartaFechada = true
    const [estadoCarta, setEstadoCarta] = useState(true)

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
                key={p.id}
                perguntas={p}
                estadoCarta={estadoCarta}
                bloquearCartas={bloquearCartas}
                liberarCartas={liberarCartas}
            />)}
        </div>
    )
}