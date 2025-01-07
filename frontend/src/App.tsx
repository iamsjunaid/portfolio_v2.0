import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import Work from './pages/Work'

import './App.css'
import About from './pages/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-4 mx-6 sm:mx-16'>
      <Navbar />
      <Homepage />
      <Work />
      <About />
    </div>
  )
}

export default App
