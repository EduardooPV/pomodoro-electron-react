import { useState, useLayoutEffect } from 'react'
import { Container, Timer, ContainerButtons, Quantity } from './styles'
import { Notify } from '../../utils/notify'
import PomoIcon from '../../../assets/pomo.png'
import { VscDebugStart, VscDebugRestart, VscStopCircle } from 'react-icons/vsc'

import { useCountdown } from '../../context/countdown'

export function Countdown() {
  // eslint-disable-next-line no-undef
  let countdownTimeout: NodeJS.Timeout

  const [timeLocalStorage, setTimeLocalStorage] = useState(0)
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [rest, setRest] = useState(false)
  const [numberSprint, setNumberSprint] = useState(1)

  const { addMoreOneSprintLocalStorage } = useCountdown()

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

  function finishCountdown() {
    if (!rest) {
      setTime(5 * 60)
      setRest(true)
    } else {
      setRest(false)
      setTime(25 * 60)
    }
  }

  useLayoutEffect(() => {
    // Verifica se é uma sprint de DESCANSO ou de ESTUDO
    if (rest) {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else if (isActive && time === 0) {
        Notify('Acabou o descanso!', 'Bora voltar para a luta!', PomoIcon)
        setIsActive(false)
        setTime(25 * 60)
        setRest(false)
      }
    } else {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1)
          setTimeLocalStorage(timeLocalStorage + 1)

          if (time === 5 * 60) {
            Notify(
              'Restam 5 minutos',
              'Prepare-se para a revisão do estudo.',
              PomoIcon
            )
          }
        }, 1000)
      } else if (isActive && time === 0) {
        Notify('Acabou!', 'Parabéns, você finalizou essa sprint!', PomoIcon)
        setIsActive(false)
        setTime(5 * 60)
        setRest(true)
        setNumberSprint(numberSprint + 1)
        addMoreOneSprintLocalStorage(timeLocalStorage)
      }
    }
  }, [isActive, time])

  // const sprintsDOM = storage.reduce((sumAmount: number, product: number) => sumAmount + product) 

  return (
    <Container>
      <h1>Pomoduds</h1>

      <h2>{rest ? `Decansos: ${numberSprint - 1}` : `Sprints: ${numberSprint}`}</h2>

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
            <VscStopCircle />
          </button>
        ) : (
          <button className="start" onClick={startCountdown}>
            <VscDebugStart />
          </button>
        )}
        <button className="reset" onClick={() => resetCountdown()}>
          <VscDebugRestart />
        </button>

        <button className="finish" onClick={() => finishCountdown()}>Finalizar Sprint</button>
      </ContainerButtons>
    </Container>
  )
}
