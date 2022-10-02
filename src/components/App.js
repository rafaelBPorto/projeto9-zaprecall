import Global from "../Global.js";
import ZapRecall from "./ZapRecall.js";
import PERGUNTAS from '../perguntas.js'
import CORES from '../cores.js'

export default function App(){

    return(
            <div>
                <ZapRecall perguntas={PERGUNTAS} cores={CORES}/>
                <Global />
            </div>
        )
}
