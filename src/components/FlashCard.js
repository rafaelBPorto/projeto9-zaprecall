import styled from "styled-components";
import setinha from "../assets/img/setinha.png"
import { useState } from "react";


export default function ({ cores, perguntas, estadoCarta, bloquearCartas, liberarCartas, resultado, liberarResposta, liberarBotoes, resetarResultado }) {

    const [{ AMARELO, CINZA, VERDE, VERMELHO }] = cores
    const [posicaoCard, setPosicaoCard] = useState(perguntas.posicaoCard)
    const [cardFinalizado, setCardFinalizado] = useState(perguntas.resultado)
    // const [liberarResposta, setLiberarResposta] = useState(false)

    function finalizarCard() {
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
                liberarBotoes()
                break;
            case "respostaPergunta":
                novaPosicao = "respondido"
                liberarCartas()
                finalizarCard()
                liberarBotoes()
                resetarResultado()
                break;
        }

        perguntas.posicaoCard = novaPosicao
        estadoCarta = novoEstado
        setPosicaoCard(novaPosicao)
    }

    return (
        <>
            {perguntas.posicaoCard === "fechado" && (
                <PerguntaFechada linha={"none"} cor={"#333333"} onClick={() => { estadoCarta && (mudarExibicaoCard(posicaoCard)) }}>
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
                <>
                    {resultado !== "" && (
                        <PerguntaAberta onClick={() => mudarExibicaoCard(perguntas.posicaoCard)}>
                            <div>
                                {perguntas.resposta}
                            </div>
                        </PerguntaAberta>

                    )}

                    {resultado === "" && (
                        <PerguntaAberta>
                            <div>
                                {perguntas.resposta}
                            </div>
                        </PerguntaAberta>

                    )}
                </>


            )}

            {perguntas.posicaoCard === "respondido" && (
                <>
                    {cardFinalizado === "naoLembrei" && (
                        <PerguntaFechada linha={"line-through"} cor={VERMELHO}>
                            <p>Pergunta {perguntas.id}</p>
                            <ion-icon name="close-circle"></ion-icon>
                        </PerguntaFechada>

                    )}
                    {cardFinalizado === "quase" && (
                        <PerguntaFechada linha={"line-through"} cor={AMARELO}>
                            <p>Pergunta {perguntas.id}</p>
                            <ion-icon name="help-circle"></ion-icon>
                        </PerguntaFechada>

                    )}
                    {cardFinalizado === "zap" && (
                        <PerguntaFechada linha={"line-through"} cor={VERDE}>
                            <p>Pergunta {perguntas.id}</p>
                            <ion-icon name="checkmark-circle"></ion-icon>
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
        text-decoration-line: ${props => props.linha};
      }

    ion-icon{
        color: ${props => props.cor};
        height: 30px;
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