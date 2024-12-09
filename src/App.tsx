import GlobalStyle, { theme } from "./styles/globalStyles"
import { ThemeProvider } from "styled-components"
import ParticlesBackground from "./components/Particles"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing"
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ParticlesBackground />
        <Router>
          <Routes>
            <Route path="/" Component={Landing} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
