import React, { useState } from 'react'

import allWizards from "../data/wizards.json"
// console.log(allWizards)
// los json son automaticamente exportados

function Wizards() {

  const [ wizardsToShow, setWizardsToShow ] = useState([])

  const handleAddWizard = () => {
    console.log("probando click")

    // quiero buscar el primer elemento del array allWizards
    const wizardToAdd = allWizards.shift()
    console.log(wizardToAdd)

    const clone = JSON.parse( JSON.stringify( wizardsToShow ) )
    clone.push(wizardToAdd)

    // quiero añadirlo al estado
    setWizardsToShow(clone)

  }

  const handleDelete = (indexToDelete) => {
    console.log("borrando un elemento del estado", indexToDelete)
    
    const clone = JSON.parse(JSON.stringify(wizardsToShow))

    clone.splice(indexToDelete, 1)

    setWizardsToShow(clone)
  }

  return (
    <div>
      
        <h3>Lista de personajes de Harry Potter</h3>

        <button onClick={handleAddWizard}>Añadir nuevo personaje</button>

        {wizardsToShow.map((eachWizard, index) => {
          return (
            <div key={eachWizard.id}>
              <hr />
              <h3>{eachWizard.name}</h3>
              <p>{eachWizard.description}</p>
              {/* <button onClick={handleDelete}>Borrar</button> */}
              <button onClick={() => handleDelete(index)}>Borrar</button>
            </div>
          )
        })}

    </div>
  )
}

export default Wizards