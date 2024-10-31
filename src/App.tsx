import { ThemeProvider } from 'styled-components'

import { Header } from './components/Cabecalho/styles'
import Hero from './components/Hero'
import ListaVagas from './containers/ListasVagas'

import EstiloGlobal, { Container } from './styles'
import Tema from './themes/colors'

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <EstiloGlobal />
      <Header>
        <h1>EBAC Jobs</h1>
      </Header>
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
