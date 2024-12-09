import GlobalStyle, { theme } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import ParticlesBackground from "./components/Particles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ParticlesBackground />
        <Router>
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/home" Component={Home} />
            <Route path="/films" Component={Films} />
            <Route path="/people" Component={People} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
