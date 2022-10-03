import { useState } from "react";
import styled from "styled-components";
import DeckCards from "./DeckCards";
import Footer from "./Footer";
import Hearder from "./Header";


export default function ZapRecall({ perguntas, cores }) {

    const [estadoResultado, setEstadoResultado] = useState("")
    let novoResultado =""

    function botaoClicado(opcao){
        novoResultado = opcao
        setEstadoResultado(novoResultado)
    }

    return (
        <ScreenContainer>
            <Hearder />
            <DeckCards  cores={cores} perguntas={perguntas} resultado={estadoResultado}/>
            <Footer cores={cores} qtdPerguntas={perguntas.length} botaoClicado={botaoClicado}/>
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