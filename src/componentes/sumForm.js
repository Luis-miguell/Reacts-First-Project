import React, {useState} from "react";

function SumForm({setResultado, setVisible}){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const prevent = (e) => {
        e.preventDefault();
        const suma = Number(num1) + Number(num2);
        setResultado(suma);
        setVisible(true)
    }

    const mostrar = () => {
        setVisible(false)
    }

    return(

        <form onSubmit={prevent}>

            <input
            required
            type="number"
            placeholder="Número 1"
            onChange={(event) => {setNum1(event.target.value)}}
            onKeyDown={mostrar}
            />

            <input
            required
            type="number"
            placeholder="Número 2"
            onChange={(event) => {setNum2(event.target.value)}}
            onKeyDown={mostrar}
            />

            <button type="submit">Sumar</button>

        </form>

    )

}

export default SumForm;