

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ContadorComponent from './componentes/Contador.js'

const App = () => {
    //const [name, setName]=useState('edith')
    const [contador, setContador]= useState(0)

    const sumar = () => {
        setContador(contador+1)

    }
    const restar = () => {
        setContador(contador-1)

    }

    const name='Edith'
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} 
                className="App-logo"></img>
                <ContadorComponent nameA={name}/>

                

            </div>
        
        </div>

    )

}

export default App