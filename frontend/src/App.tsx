import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import Work from './pages/Work'

import './App.css'
import About from './pages/About'

import ContactPage from './pages/ContactPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-4'>
      <Navbar />
      <Homepage />
      <Work />
      <About />
      <ContactPage />
    </div>
  )
}

export default App
