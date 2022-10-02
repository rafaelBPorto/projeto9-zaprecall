import styled from "styled-components";
import DeckCards from "./DeckCards";
import Footer from "./Footer";
import Hearder from "./Header";


export default function ZapRecall({ perguntas, cores }) {


    return (
        <ScreenContainer>
            <Hearder />
            <DeckCards perguntas={perguntas}/>
            <Footer cores={cores} qtdPerguntas={perguntas.length} />
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