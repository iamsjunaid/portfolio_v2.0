import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import Work from './pages/Work'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-16 mx-12 border-2 border-red-500'>
      <Navbar />
      <Homepage />
      <Work />
    </div>
  )
}

export default App
