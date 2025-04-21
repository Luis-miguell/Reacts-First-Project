import React, {useState} from "react";
import SumForm from "./componentes/sumForm.js";
import Result from "./componentes/result.js";
import Titulo from "./componentes/titulo.js";
import "./App.css"


function App(){

    const [resultado, setResultado] = useState(0);
    const [visible, setVisible] = useState(false)

    return(

        <div className="hola">
    
            <Titulo/>
            <SumForm  setResultado={setResultado} setVisible={setVisible}/>
            <Result resultado={resultado} visibilidad={visible}/>
    
        </div>
    
    )

}

export default App;