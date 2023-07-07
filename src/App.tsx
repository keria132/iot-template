import styled from 'styled-components';
import LoginPage from './LoginPage'
import MainPage from './MainPage';
import "./normalize.css"
import { Container } from "./styles/Container.style"

const Main = styled.main`
  // font-size: 4vw;
  font-family: 'Quicksand', sans-serif;
  color: white;
  background: radial-gradient(50% 50% at 50% 50%, #322C48 0%, #0E0B1C 100%);
    
`

function App() {

  return (
    <Main>
      <MainPage />
    </Main>
  )
}

export default App
