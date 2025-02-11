import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Work from './pages/Work';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Experience from './pages/Experience';
import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className='flex flex-col bg-gray-100'>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <Homepage />
          <Experience />
          <Work />
          <About />
          <ContactPage />
        </>
      )}
    </div>
  );
}

export default App;