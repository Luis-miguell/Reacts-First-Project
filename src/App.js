import React, {useState} from "react";
import SumForm from "./componentes/sumForm.js";
import Result from "./componentes/result.js";


function App(){

    const [resultado, setResultado] = useState(0);

    return(

        <div>
    
            <SumForm  setResultado={setResultado} />
            <Result resultado={resultado} />
    
        </div>
    
    )

}

export default App;