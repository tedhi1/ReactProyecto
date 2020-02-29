

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {
    //const [name, setName]=useState('edith')
    const [contador, setContador]= useState(0)

    const sumar = () => {
        setContador(contador+1)

    }
    const restar = () => {
        setContador(contador-1)

    }

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} 
                className="App-logo"></img>
                <button onClick={sumar}>
                    +
                </button>
                <div>{contador}</div>
                <button onClick={restar}>
                    -
                </button>

            </div>
        
        </div>

    )

}

export default App