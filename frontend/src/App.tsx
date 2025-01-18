import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import Work from './pages/Work'

import './App.css'
import About from './pages/About'

import ContactPage from './pages/ContactPage'
import Experience from './pages/Experience'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Homepage />
      <Experience />
      <Work />
      <About />
      <ContactPage />
    </div>
  )
}

export default App
