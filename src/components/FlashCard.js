import styled from "styled-components";
import setinha from "../assets/img/setinha.png"
import { useState } from "react";


export default function ({ cores, perguntas, estadoCarta, bloquearCartas, liberarCartas, resultado }) {
    const [{AMARELO, CINZA, VERDE, VERMELHO}] = cores

    const [posicaoCard, setPosicaoCard] = useState(perguntas.posicaoCard)
    const [cardFinalizado, setCardFinalizado] = useState(perguntas.resultado)

    function finalizarCard(){
        const novoResultado = resultado
        setCardFinalizado(novoResultado)
    }
    
    function mudarExibicaoCard(posicaoAtual) {
        let novaPosicao = ""
        let novoEstado
        switch (posicaoAtual) {
            case "fechado":
                novaPosicao = "textoPergunta"
                bloquearCartas()
                break;
            case "textoPergunta":
                novaPosicao = "respostaPergunta"

                break;
            case "respostaPergunta":
                novaPosicao = "respondido"
                liberarCartas()
                finalizarCard() 
                break;
        }
        perguntas.posicaoCard = novaPosicao
        estadoCarta = novoEstado
        setPosicaoCard(novaPosicao)
    }

    return (
        <>
            {perguntas.posicaoCard === "fechado" && (
                <PerguntaFechada cor={"#333333"} onClick={() => { estadoCarta && (mudarExibicaoCard(posicaoCard)) }}>
                    <p>Pergunta {perguntas.id}</p>
                    <ion-icon name="play-outline"></ion-icon>

                </PerguntaFechada>
            )}


            {perguntas.posicaoCard === "textoPergunta" && (
                <PerguntaAberta  >
                    <div>
                        {perguntas.pergunta}
                        <img onClick={() => mudarExibicaoCard(perguntas.posicaoCard)} src={setinha} alt="setinha" />
                    </div>
                </PerguntaAberta>
            )}
            {perguntas.posicaoCard === "respostaPergunta" && (
                <PerguntaAberta onClick={() => mudarExibicaoCard(perguntas.posicaoCard)}>
                    <div>
                        {perguntas.resposta}
                    </div>
                </PerguntaAberta>
            )}
            {perguntas.posicaoCard === "respondido" && (
                <>
                    {cardFinalizado === "naoLembrei" && (
                        <PerguntaFechada cor={VERMELHO}>
                            <p>Pergunta {perguntas.id}</p>
                            <ion-icon name="close-circle"></ion-icon>
                        </PerguntaFechada>

                    )}
                       {cardFinalizado === "quase" && (
                        <PerguntaFechada cor={AMARELO}>
                            <p>Pergunta {perguntas.id}</p>
                            <ion-icon name="close-circle"></ion-icon>
                        </PerguntaFechada>

                    )}
                    {cardFinalizado === "zap" && (
                        <PerguntaFechada cor={VERDE}>
                            <p>Pergunta {perguntas.id}</p>
                            <ion-icon name="close-circle"></ion-icon>
                        </PerguntaFechada>

                    )}
                </>

            )}

        </>
    )
}


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.cor};
      }

    ion-icon{
        color: black;
    }

    img{
        width: 30px;
        color: red;
    }

   
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    img:hover{
        cursor: pointer;
    }
  `