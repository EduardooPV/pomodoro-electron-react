import { useState, useLayoutEffect } from 'react'
import { Container, Timer, ContainerButtons, Quantity } from './styles'

export function Countdown() {
  // eslint-disable-next-line no-undef
  let countdownTimeout: NodeJS.Timeout

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  useLayoutEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <Container>
      <h1>Pomoduds</h1>

      <Quantity>
        <button onClick={() => setTime(time - 5 * 60)}>-</button>
        <button onClick={() => setTime(20 * 60)}>20</button>
        <button onClick={() => setTime(25 * 60)}>25</button>
        <button onClick={() => setTime(30 * 60)}>30</button>
        <button onClick={() => setTime(time + 5 * 60)}>+</button>
      </Quantity>

      <Timer>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
        <p>:</p>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </Timer>

      <ContainerButtons active={isActive}>
        {isActive ? (
          <button className="stop" onClick={stopCountdown}>
            Parar
          </button>
        ) : (
          <button className="start" onClick={startCountdown}>
            Iniciar
          </button>
        )}
        <button className="reset" onClick={() => resetCountdown()}>
          Reiniciar
        </button>
      </ContainerButtons>
    </Container>
  )
}
