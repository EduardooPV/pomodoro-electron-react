import { useState } from 'react'
import { Container, Settings, ContentModal } from './styles'
import { FiSettings } from 'react-icons/fi'
import { MdClose, MdLeaderboard } from 'react-icons/Md'
import Modal from 'react-modal'

import { useCountdown } from '../../context/countdown'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: '60%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}

Modal.setAppElement('#root')

export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false)

  const { sprints, clearLocalStorage } = useCountdown()

  const totalSprints = Object.entries(sprints).reduce(function (
    total: any,
    pair: any
  ) {
    const [, value] = pair
    return total + value.sprint
  },
  0)

  const totalTempoSprints = Object.entries(sprints).reduce(function (
    total: any,
    pair: any
  ) {
    const [, value] = pair
    return total + value.valueTime
  },
  0)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Container>
        <Settings>
          <MdLeaderboard onClick={openModal} fontSize={30} color="#000" />
        </Settings>

        <Settings style={{ cursor: 'not-allowed' }}>
          <FiSettings fontSize={30} color="#000" />
        </Settings>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Leaderboard"
        >
          <ContentModal>
            <button onClick={closeModal}>
              <MdClose />
            </button>
            <h3>Estatisticas: </h3>
            <div>
              <p>Sprints: <strong>{totalSprints}</strong></p>

              <p>Tempo total: <strong>{totalTempoSprints}</strong></p>
            </div>

            <span onClick={() => clearLocalStorage()}>Limpar histórico</span>
          </ContentModal>
        </Modal>
      </Container>
    </>
  )
}
