import React, {useState} from 'react';

const Contador = (props) => {

    const [contador, setContador]= useState(0)
    const {nameA}=props



    const sumar = () => {
        setContador(contador+1)

    }
    const restar = () => {
        setContador(contador-1)

    }

    return (
                <div>
                {nameA}
                <button onClick={sumar}>
                    +
                </button>
                <div>{contador}</div>
                <button onClick={restar}>
                    -
                </button>
                </div>

    )

}

export default Contador