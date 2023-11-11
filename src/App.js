import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/recipe-details/:id" element={<Recipe />} />
          </Routes>
        </main>
        <footer>
          <p>CPIT-405 | React Examples</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
