import { useState } from "react";
import styled from "styled-components";

export default function Footer({ cores, qtdPerguntas, botaoClicado, liberarResposta }) {
    const [{ AMARELO, CINZA, VERDE, VERMELHO }] = cores




    return (
        <FooterConcluidos>
            <ContainerBotoes>
                {liberarResposta ?
                    <>
                        <Botao onClick={() => botaoClicado("naoLembrei")} cor={VERMELHO}>
                            Não Lembrei
                        </Botao>
                        <Botao onClick={() => botaoClicado("quase")} cor={AMARELO}>
                            Quase não lembrei
                        </Botao>
                        <Botao onClick={() => botaoClicado("zap")} cor={VERDE}>
                            Zap!
                        </Botao>
                    </>
                    :
                    <>
                        <Botao cor={VERMELHO}>
                            Não Lembrei
                        </Botao>
                        <Botao cor={AMARELO}>
                            Quase não lembrei
                        </Botao>
                        <Botao cor={VERDE}>
                            Zap!
                        </Botao>
                    </>
                }

            </ContainerBotoes>
            <div>
                0/{qtdPerguntas} Concluidos
            </div>
        </FooterConcluidos>
    )
}


const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
  
 
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

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/

