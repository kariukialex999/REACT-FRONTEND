import './css/App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import {Routes, Route} from "react-router-dom"
import { movieProvider } from './context/MovieContext';
import NavBar from './components/Navbar';

function App() {
  return (
    <movieProvider>
        <NavBar /> 
    <main className="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path= "/favorites" element={<Favorite />} />
        </Routes>
    </main>
    </movieProvider>
  );
}

export default App
