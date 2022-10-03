import { useState } from "react";
import styled from "styled-components";
import DeckCards from "./DeckCards";
import Footer from "./Footer";
import Hearder from "./Header";


export default function ZapRecall({ perguntas, cores }) {

    const [respondidos, setRespondidos] = useState(0)

    function contRespostas(){
        const novoResposta = respondidos + 1 
        setRespondidos(novoResposta)
        console.log(novoResposta)
    }
    return (
        <ScreenContainer>
            <Hearder />
            <DeckCards
                cores={cores}
                perguntas={perguntas}
                contRespostas={contRespostas}
            />
            <Footer 
                qtdPerguntas={perguntas.length}
                respondidos={respondidos}
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
