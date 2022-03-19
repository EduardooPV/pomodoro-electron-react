import { useState } from 'react'
import { Container, Timer, ContainerButtons, Quantity } from './styles'

export function Countdown() {
  const [minutes, setMinutes] = useState(20)
  const [seconds, setSeconds] = useState(0)

  return (
    <Container>
      <h1>Pomoduds</h1>

      <Quantity>
        <button onClick={() => setMinutes(minutes - 5)}>-</button>
        <button onClick={() => setMinutes(20)}>20</button>
        <button onClick={() => setMinutes(25)}>25</button>
        <button onClick={() => setMinutes(30)}>30</button>
        <button onClick={() => setMinutes(minutes + 5)}>+</button>
      </Quantity>

      <Timer>
        <span>{minutes}</span>
        <p>:</p>
        <span>{seconds === 0 ? '00' : seconds}</span>
      </Timer>

      <ContainerButtons>
        <button>Iniciar</button>
        <div>
          <button>Parar</button>
          <button>Reiniciar</button>
        </div>
      </ContainerButtons>
    </Container>
  )
}
