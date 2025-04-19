import React, {useState} from "react";

function SumForm({setResultado}){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const prevent = (e) => {
        e.preventDefault();
        const suma = Number(num1) + Number(num2);
        setResultado(suma);
    }

    return(

        <form onSubmit={prevent}>

            <input
            required
            type="number"
            placeholder="Número 1"
            onChange={(event) => {setNum1(event.target.value)}}
            />

            <input
            required
            type="number"
            placeholder="Número 2"
            onChange={(event) => {setNum2(event.target.value)}}
            />

            <button type="submit">Sumar</button>

        </form>

    )

}

export default SumForm;