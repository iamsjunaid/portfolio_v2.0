import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Work from './pages/Work';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Experience from './pages/Experience';
import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './components/Spinner';
import ArticlesList from './pages/ArticlesList';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='flex flex-col bg-gray-100'>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center sm:h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <Homepage />
          <Experience />
          <Work />
          <About />
          <ArticlesList />
          <ContactPage />
        </>
      )}
    </div>
  );
}

export default App;