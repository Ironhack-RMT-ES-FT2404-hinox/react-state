import { useState } from "react"


function Counter() {



  // let counter = 5;
  let [ counter, setCounter ] = useState(0)
  // const algo = useState(0)
  // console.log(algo)
  // 1. counter es el nombre con el que nos referimos al estado
  // 2. setCounter es la funcion que va a manipular el estado
  // 3. (0) es el valor inicial del estado

  const handleIncrease = () => {
    // counter++
    // console.log("aumentando el valor", counter)

    //! en react NUNCA podemos manipular el estado directamente
    // counter++

    setCounter( counter + 1 )
    // las funciones que nos dá el estado hacen dos cosas:
    //1. actualizan el valor del estado
    //2. causan una nueva renderización del componente con los valores actualizados

    setButtonColor("red")
  }

  const handleDecrease = () => {
    setCounter( counter - 1 )
  }

  // creando otro estado
  const [ buttonColor, setButtonColor ] = useState("gray")

  return (
    <div>
      
      <h1>{counter}</h1>

      <button className="btn" onClick={handleIncrease} style={{backgroundColor: buttonColor}}>Incrementar</button>
      <br />
      <button onClick={ handleDecrease }>Reducir</button>

    </div>
  )
}

export default Counter