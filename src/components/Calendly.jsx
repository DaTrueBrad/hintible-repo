// referenceing https://medium.com/swlh/how-to-integrate-calendly-reactjs-frontend-edition-feb7ce923927
import React, { useEffect, useRef } from 'react'
import '../App.css'

const Calendly = () => {

  const ref = useRef();





  const handleClick = () => {
    let list = document.getElementsByClassName('igLUv25CGn1lcV9W4BLo')
    console.log(list)
  }
  return (
    <div>
      <button onClick={handleClick}>Change Something</button>
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/bottbrady/30min"
          style={{ minWidth: '320px', height: '60vh' }} />
      </div>
    </div>
  );
}

export default Calendly