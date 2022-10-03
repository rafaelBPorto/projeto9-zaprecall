import styled from "styled-components";
import setinha from "../assets/img/setinha.png"
import { useState } from "react";


export default function ({ 
    cores,
    perguntas,
    contRespostas
    }) {
        const [{ AMARELO, CINZA, VERDE, VERMELHO }] = cores
        const [posicaoCard, setPosicaoCard] = useState("fechado")

            function botaoClicado(opcao) {
                const novoResultado = opcao
                setPosicaoCard (opcao)
                contRespostas()
            } 

        return(
        <>
            {posicaoCard==="fechado" &&(
                <PerguntaFechada linha={"none"} cor={"#333333"} onClick={() => setPosicaoCard("textoPergunta")}>
                    <p>Pergunta {perguntas.id}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </PerguntaFechada>
            )}

            {posicaoCard === "textoPergunta" && (
                <PerguntaAberta  >
                    <div>
                        {perguntas.pergunta}
                        <img onClick={() => setPosicaoCard("respostaPergunta")} src={setinha} alt="setinha" />
                    </div>
                </PerguntaAberta>
            )}

            {posicaoCard === "respostaPergunta" && 
                    <PerguntaAberta>
                            <div>
                                {perguntas.resposta}
                            </div>
                            <ContainerBotoes>
                                <Botao onClick={() => botaoClicado("naoLembrei")} cor={VERMELHO}>
                                    Não Lembrei
                                </Botao>
                                <Botao onClick={() => botaoClicado("quase")} cor={AMARELO}>
                                    Quase não lembrei
                                </Botao>
                                <Botao onClick={() => botaoClicado("zap")} cor={VERDE}>
                                    Zap!
                                </Botao>
                            </ContainerBotoes>
                        </PerguntaAberta>
            }

            {posicaoCard==="naoLembrei" &&(
                <PerguntaFechada linha={"line-through"} cor={VERMELHO}>
                    <p>Pergunta {perguntas.id}</p>
                    < ion-icon name="close-circle" />
                </PerguntaFechada>
            )}
           
            {posicaoCard==="quase" &&(
                <PerguntaFechada linha={"line-through"} cor={AMARELO}>
                    <p>Pergunta {perguntas.id}</p>
                    < ion-icon name="help-circle" />
                </PerguntaFechada>
            )}

            {posicaoCard==="zap" &&(
                <PerguntaFechada linha={"line-through"} cor={VERDE}>
                    <p>Pergunta {perguntas.id}</p>
                    < ion-icon name="checkmark-circle" />
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

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;

`
const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid ${props => props.cor};
    padding:5px;
`