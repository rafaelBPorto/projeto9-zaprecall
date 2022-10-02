import FlashCard from "./FlashCard";

export default function DeckCards({ perguntas }) {
    return (
        <div>
            {perguntas.map((p) => <FlashCard
                key={p.id}
                perguntas={p}
            />)}
        </div>
    )
}