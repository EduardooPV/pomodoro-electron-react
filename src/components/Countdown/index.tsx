import { useState, useLayoutEffect } from 'react'
import { Container, Timer, ContainerButtons, Quantity } from './styles'
import PomoIcon from '../../../assets/pomo.png'

export function Countdown() {
  // eslint-disable-next-line no-undef
  let countdownTimeout: NodeJS.Timeout

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [rest, setRest] = useState(false)

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
    if (rest) {
      setTime(5 * 60)
    } else {
      setTime(25 * 60)
    }
  }

  useLayoutEffect(() => {
    if (rest) {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else if (isActive && time === 0) {
        alertNotify('Acabou o descanso!', 'Bora voltar para a luta!')
        setIsActive(false)
        setTime(25 * 60)
        setRest(false)
      }
    } else {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1)

          if (time === 5 * 60) {
            alertNotify(
              'Restam 5 minutos',
              'Prepare-se para a revisão do estudo.'
            )
          }
        }, 1000)
      } else if (isActive && time === 0) {
        alertNotify('Acabou!', 'Parabéns, você finalizou essa sprint!')
        setIsActive(false)
        setTime(0.1 * 60)
        setRest(true)
      }
    }
  }, [isActive, time])

  // setRest(true)
  // setTime(5 * 60)

  function alertNotify(title: string, body: string) {
    // eslint-disable-next-line no-new
    new Notification(title, { body: body, icon: PomoIcon })
  }

  return (
    <Container>
      <h1>Pomoduds</h1>

      {rest ? (
        <Quantity>
          <button onClick={() => setTime(5 * 60)}>5</button>
          <button onClick={() => setTime(10 * 60)}>10</button>
          <button onClick={() => setTime(15 * 60)}>15</button>
        </Quantity>
      ) : (
        <Quantity>
          <button onClick={() => setTime(time > 0 ? time - 5 * 60 : 0)}>
            -
          </button>
          <button onClick={() => setTime(20 * 60)}>20</button>
          <button onClick={() => setTime(25 * 60)}>25</button>
          <button onClick={() => setTime(30 * 60)}>30</button>
          <button
            onClick={() => setTime(time < 60 * 60 ? time + 5 * 60 : 60 * 60)}
          >
            +
          </button>
        </Quantity>
      )}

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
