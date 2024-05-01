
function Events() {


  const handleClick = () => console.log("clickando el botón")

  const handleMouseOver = (event) => {
    console.log("pasando el cursor sobre el h3", event.target)
  }

  const handleMouseLeave = () => {
    console.log("quitando el cursor del h3")
  }

  const handleInputChange = (event) => {
    console.log("usuario cambiando el campo", event.target.value)
  }

  return (
    <div>
      
        <button onClick={ handleClick }>Click</button>

        <h3 onMouseEnter={ handleMouseOver } onMouseLeave={ handleMouseLeave }>Hola</h3>

        <input type="text" onChange={ handleInputChange }/>

    </div>
  )
}

export default Events