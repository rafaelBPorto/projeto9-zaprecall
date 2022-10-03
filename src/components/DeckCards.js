import FlashCard from "./FlashCard";

export default function DeckCards({ 
    cores,
    perguntas,
    contRespostas

    }){


    return (
        <div>
            {perguntas.map((p) => <FlashCard
                cores={cores}
                key={p.id}
                perguntas={p}
                contRespostas={contRespostas}
            />)}
        </div>

    )
}