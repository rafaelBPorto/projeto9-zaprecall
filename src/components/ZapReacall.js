import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PERGUNTAS from "../mock.js"
import styled from "styled-components";

export default function ZapReacall() {
    return (
        <ScreeContainer>
            <Header />
            <Main />
            <Footer />
        </ScreeContainer>
    )
}

const ScreeContainer = styled.div`
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