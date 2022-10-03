import { useState } from "react";
import styled from "styled-components";
import DeckCards from "./DeckCards";
import Footer from "./Footer";
import Hearder from "./Header";


export default function ZapRecall({ perguntas, cores }) {

    const [estadoResultado, setEstadoResultado] = useState("")
    const [liberarResposta, setLiberarResposta] = useState(false)
    let novoResultado = ""

    function botaoClicado(opcao) {
        novoResultado = opcao
        setEstadoResultado(novoResultado)
    } 

    function resetarResultado(){
        setEstadoResultado("")
    }

    function liberarBotoes() {
        const estado = !liberarResposta
        setLiberarResposta(estado)
    }


    return (
        <ScreenContainer>
            <Hearder />
            <DeckCards 
                cores={cores} 
                perguntas={perguntas} 
                resultado={estadoResultado}
                liberarResposta={liberarResposta}
                liberarBotoes={liberarBotoes}
                resetarResultado={resetarResultado}
                />
            <Footer
                cores={cores}
                qtdPerguntas={perguntas.length}
                botaoClicado={botaoClicado}
                liberarResposta={liberarResposta}
            />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;


`