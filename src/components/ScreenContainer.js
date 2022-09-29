import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PERGUNTAS from "../mock.js"

export default function ScreenContainer(){
    return(
        <div>
            <Header />
            <Main perguntas={PERGUNTAS} />
            <Footer />
        </div>
    )
}