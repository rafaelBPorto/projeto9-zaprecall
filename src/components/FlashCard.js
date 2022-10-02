import styled from "styled-components";
import setinha from "../assets/img/setinha.png"
import { useState } from "react";


export default function ({ perguntas, estadoCarta, bloquearCartas, liberarCartas}) {


    const [posicaoCard, setPosicaoCard] = useState(perguntas.posicaoCard)

    function mudarExibicao(posicaoAtual) {
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
                break;
        }
        perguntas.posicaoCard = novaPosicao
        estadoCarta = novoEstado
        setPosicaoCard(novaPosicao)
    }

    return (
        <>
            {perguntas.posicaoCard === "fechado" && (
                <PerguntaFechada cor={"#333333"} onClick={() => {estadoCarta && (mudarExibicao(perguntas.posicaoCard))}}>
                    <p>Pergunta {perguntas.id}</p>
                    <ion-icon name="play-outline"></ion-icon>

                </PerguntaFechada>
            )}

            
            {perguntas.posicaoCard === "textoPergunta" && (
                <PerguntaAberta  onClick={() => mudarExibicao(perguntas.posicaoCard)}>
                    <div>
                        {perguntas.pergunta}
                        <img src={setinha} />
                    </div>
                </PerguntaAberta>
            )}
            {perguntas.posicaoCard === "respostaPergunta" && (
                <PerguntaAberta onClick={() => mudarExibicao(perguntas.posicaoCard)}>
                    <div>
                        {perguntas.resposta}
                    </div>
                </PerguntaAberta>
            )}
            {perguntas.posicaoCard === "respondido" && (
                <PerguntaFechada cor={"red"}>
                    <p>Pergunta {perguntas.id}</p>
                    <ion-icon name="close-circle"></ion-icon>
                   

                </PerguntaFechada>
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

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props=>props.cor};
      }

    ion-icon{
        color: red;
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
  `