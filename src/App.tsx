import { GlobalStyle } from './styles/GlobalStyle'

import { Countdown } from './components/Countdown'
import { Header } from './components/Header'
import { CountdownProvider } from './context/countdown'

export function App() {
  return (
    <>
      <CountdownProvider>
        <GlobalStyle />
        <Header />
        <Countdown />
      </CountdownProvider>
    </>
  )
}
