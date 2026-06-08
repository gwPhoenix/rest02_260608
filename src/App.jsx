import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App
